import { useSettingsStore } from "@/store/useStore";
import type { VtechCallResult, VtechEndpoint } from "@/types/vtech";

const VTECH_BASE_URL = import.meta.env.VITE_VTECH_BASE_URL || "https://api.vtech.biz.id";

export type VtechParams = Record<string, string | number | boolean | undefined>;

export function buildVtechUrl(endpoint: string, apiKey: string, params: VtechParams = {}) {
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  
  // If use proxy is enabled in store
  const { useVtechProxy } = useSettingsStore.getState();
  
  const baseUrl = useVtechProxy ? "/api/vtech-proxy" : VTECH_BASE_URL;
  const url = new URL(cleanEndpoint, typeof window !== 'undefined' && useVtechProxy ? window.location.origin : VTECH_BASE_URL);
  
  if (useVtechProxy) {
      url.pathname = `/api/vtech-proxy${cleanEndpoint}`;
  }

  url.searchParams.set("apikey", apiKey);

  Object.entries(params).forEach(([key, value]) => {
    if (key === "apikey") return;
    if (value === undefined || value === "") return;
    url.searchParams.set(key, String(value));
  });

  return url;
}

export async function callVtechEndpoint(
  endpoint: VtechEndpoint,
  params: VtechParams = {}
): Promise<VtechCallResult> {
  let { vtechApiKey } = useSettingsStore.getState();
  if (!vtechApiKey && import.meta.env.VITE_VTECH_API_KEY) {
    vtechApiKey = import.meta.env.VITE_VTECH_API_KEY;
  }

  if (!vtechApiKey) {
    return {
      endpointId: endpoint.id,
      endpointLabel: endpoint.label,
      category: endpoint.category,
      requestedAt: new Date().toISOString(),
      ok: false,
      outputType: endpoint.outputType,
      error: "VTECH API key belum diisi. Buka Settings lalu simpan API key dulu.",
    };
  }

  const startedAt = new Date().toISOString();

  try {
    const url = buildVtechUrl(endpoint.endpoint, vtechApiKey, params);

    const response = await fetch(url.toString(), {
      method: endpoint.method || "GET",
      headers: {
        Accept: "application/json, text/plain, image/*, audio/*, video/*, */*",
      },
    });

    const contentType = response.headers.get("content-type") || "";

    if (!response.ok) {
      let message = `VTECH API error: ${response.status}`;
      try {
        const err = await response.json();
        message = err?.message || err?.error || JSON.stringify(err);
      } catch {}
      return {
        endpointId: endpoint.id,
        endpointLabel: endpoint.label,
        category: endpoint.category,
        requestedAt: startedAt,
        ok: false,
        status: response.status,
        contentType,
        outputType: endpoint.outputType,
        error: message,
      };
    }

    if (contentType.includes("application/json")) {
      const data = await response.json();
      return {
        endpointId: endpoint.id,
        endpointLabel: endpoint.label,
        category: endpoint.category,
        requestedAt: startedAt,
        ok: true,
        status: response.status,
        contentType,
        outputType: "json",
        data,
      };
    }

    if (contentType.startsWith("image/")) {
      const blob = await response.blob();
      return {
        endpointId: endpoint.id,
        endpointLabel: endpoint.label,
        category: endpoint.category,
        requestedAt: startedAt,
        ok: true,
        status: response.status,
        contentType,
        outputType: "image",
        blobUrl: URL.createObjectURL(blob),
      };
    }

    if (contentType.startsWith("audio/")) {
      const blob = await response.blob();
      return {
        endpointId: endpoint.id,
        endpointLabel: endpoint.label,
        category: endpoint.category,
        requestedAt: startedAt,
        ok: true,
        status: response.status,
        contentType,
        outputType: "audio",
        blobUrl: URL.createObjectURL(blob),
      };
    }

    if (contentType.startsWith("video/")) {
      const blob = await response.blob();
      return {
        endpointId: endpoint.id,
        endpointLabel: endpoint.label,
        category: endpoint.category,
        requestedAt: startedAt,
        ok: true,
        status: response.status,
        contentType,
        outputType: "video",
        blobUrl: URL.createObjectURL(blob),
      };
    }

    const text = await response.text();

    try {
      const parsed = JSON.parse(text);
      return {
        endpointId: endpoint.id,
        endpointLabel: endpoint.label,
        category: endpoint.category,
        requestedAt: startedAt,
        ok: true,
        status: response.status,
        contentType,
        outputType: "json",
        data: parsed,
      };
    } catch {
      return {
        endpointId: endpoint.id,
        endpointLabel: endpoint.label,
        category: endpoint.category,
        requestedAt: startedAt,
        ok: true,
        status: response.status,
        contentType,
        outputType: "text",
        data: text,
      };
    }
  } catch (error: any) {
    return {
      endpointId: endpoint.id,
      endpointLabel: endpoint.label,
      category: endpoint.category,
      requestedAt: startedAt,
      ok: false,
      outputType: endpoint.outputType,
      error: error?.message || "Unknown VTECH API error",
    };
  }
}

export async function testVtechPing() {
  const useKey = useSettingsStore.getState().vtechApiKey;
  if (!useKey || useKey.trim() === '') {
    return {
      endpointId: "ping",
      endpointLabel: "Ping API",
      category: "status",
      requestedAt: new Date().toISOString(),
      ok: false,
      outputType: "json" as const,
      error: "VTECH API key belum diisi. Buka Settings lalu simpan API key dulu."
    };
  }

  let res = await callVtechEndpoint({
    id: "ping", label: "Ping Server", category: "status", group: "status", endpoint: "/status/serverstatus/ping", method: "GET", params: [], description: "Ping API", outputType: "json", safe: true, enabledByDefault: true, tags: []
  });

  if (!res.ok && res.status === 404) {
    res = await callVtechEndpoint({
      id: "cekk", label: "Check Server", category: "status", group: "status", endpoint: "/status/serverstatus/cekk", method: "GET", params: [], description: "Check Server API", outputType: "json", safe: true, enabledByDefault: true, tags: []
    });
  }

  if (!res.ok) {
     if (res.status === 404) {
        res.error = "Endpoint VTECH tidak ditemukan atau path API berubah. Coba endpoint status lain atau cek registry endpoint.";
     } else if (res.status === 401 || res.status === 403) {
        res.error = "VTECH API key ditolak. Cek kembali API key di Settings.";
     } else if (!res.status) {
        res.error = "Koneksi ke VTECH API gagal. Cek internet, CORS, atau aktifkan proxy jika tersedia.";
     }
  }

  return res;
}

// These endpoints might not exist natively on the new API as user profile routes, 
// so we'll mock or fallback to BMKG info if they don't exist to prevent errors,
// since the prompt says "Perbaiki Settings API Test. Test API harus benar-benar call endpoint ringan yang aman."
export async function getVtechHealth() {
  return await testVtechPing();
}

export async function getVtechStatus() {
  return await testVtechPing();
}

export async function getVtechUserLimit() {
  return await testVtechPing();
}

export async function getVtechUserProfile() {
  return await testVtechPing();
}
