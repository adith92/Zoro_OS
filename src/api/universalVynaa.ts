import { useSettingsStore } from "@/store/useStore";
import type { VynaaCallResult, VynaaEndpoint } from "@/types/vynaa";

const VYNAA_BASE_URL = "https://vynaa.web.id";

export type VynaaParams = Record<string, string | number | boolean | undefined>;

export function buildVynaaUrl(endpoint: string, apiKey: string, params: VynaaParams = {}) {
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  
  // If use proxy is enabled in store
  const { useVynaaProxy } = useSettingsStore.getState();
  
  const baseUrl = useVynaaProxy ? "/api/vynaa-proxy" : VYNAA_BASE_URL;
  const url = new URL(cleanEndpoint, typeof window !== 'undefined' && useVynaaProxy ? window.location.origin : VYNAA_BASE_URL);
  
  if (useVynaaProxy) {
      url.pathname = `/api/vynaa-proxy${cleanEndpoint}`;
  }

  url.searchParams.set("apikey", apiKey);

  Object.entries(params).forEach(([key, value]) => {
    if (key === "apikey") return;
    if (value === undefined || value === "") return;
    url.searchParams.set(key, String(value));
  });

  return url;
}

export async function callVynaaEndpoint(
  endpoint: VynaaEndpoint,
  params: VynaaParams = {}
): Promise<VynaaCallResult> {
  const { vynaaApiKey } = useSettingsStore.getState();

  if (!vynaaApiKey) {
    return {
      endpointId: endpoint.id,
      endpointLabel: endpoint.label,
      category: endpoint.category,
      requestedAt: new Date().toISOString(),
      ok: false,
      outputType: endpoint.outputType,
      error: "Vynaa API key belum diisi. Buka Settings lalu simpan API key dulu.",
    };
  }

  const startedAt = new Date().toISOString();

  try {
    const url = buildVynaaUrl(endpoint.endpoint, vynaaApiKey, params);

    const response = await fetch(url.toString(), {
      method: endpoint.method || "GET",
      headers: {
        Accept: "application/json, text/plain, image/*, audio/*, video/*, */*",
      },
    });

    const contentType = response.headers.get("content-type") || "";

    if (!response.ok) {
      let message = `Vynaa API error: ${response.status}`;
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
      error: error?.message || "Unknown Vynaa API error",
    };
  }
}

export async function testVynaaPing() {
  return await callVynaaEndpoint({
    id: "ping", label: "Ping", category: "status", group: "status", endpoint: "/status/serverstatus/ping", method: "GET", params: [], description: "", outputType: "json", safe: true, enabledByDefault: true, tags: []
  });
}

export async function getVynaaHealth() {
  return await callVynaaEndpoint({
    id: "health", label: "Health", category: "status", group: "status", endpoint: "/status/serverstatus/health", method: "GET", params: [], description: "", outputType: "json", safe: true, enabledByDefault: true, tags: []
  });
}

export async function getVynaaStatus() {
  return await callVynaaEndpoint({
    id: "status", label: "Status", category: "status", group: "status", endpoint: "/status/serverstatus/status", method: "GET", params: [], description: "", outputType: "json", safe: true, enabledByDefault: true, tags: []
  });
}

export async function getVynaaUserLimit() {
  return await callVynaaEndpoint({
    id: "limit", label: "Limit", category: "status", group: "status", endpoint: "/status/userlimit/check-limit", method: "GET", params: [], description: "", outputType: "json", safe: true, enabledByDefault: true, tags: []
  });
}

export async function getVynaaUserProfile() {
  return await callVynaaEndpoint({
    id: "profile", label: "Profile", category: "status", group: "status", endpoint: "/status/userlimit/user-profile", method: "GET", params: [], description: "", outputType: "json", safe: true, enabledByDefault: true, tags: []
  });
}
