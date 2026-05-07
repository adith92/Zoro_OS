export type ZoroActionType =
  | "route_change"
  | "tool_open"
  | "tool_run"
  | "tool_success"
  | "tool_error"
  | "chat_send"
  | "chat_receive"
  | "settings_change"
  | "theme_change"
  | "voice_toggle"
  | "api_key_test"
  | "download_start"
  | "image_generated"
  | "game_started";

export interface ZoroAppAction {
  type: ZoroActionType;
  route?: string;
  toolId?: string;
  toolLabel?: string;
  category?: string;
  query?: string;
  status?: "success" | "error" | "loading";
  timestamp: string;
}

export function generateZoroRemark(action: ZoroAppAction, context: { currentRoute: string, toolCategory?: string }, personalitySettings: any): string | null {
  if (!personalitySettings.contextualRemarksEnabled) return null;

  // We could implement more logic about mood here
  if (action.type === "route_change") {
    if (action.route?.includes("anime")) return "Wah, Kapten lagi masuk Anime Realm. Radar kumis Zoro mendeteksi waifu energy naik 87%.";
    if (action.route?.includes("islamic")) return "Mode tenang aktif, Kapten. Zoro ikut pelan-pelan menjaga cockpit tetap adem.";
    if (action.route?.includes("settings")) return "Sedang mengutak-atik mesin ya? Awas jangan salah cabut kabel glow-in-the-dark Zoro.";
  }

  if (action.type === "tool_open") {
    if (action.category?.includes("downloader")) return "Downloader Galaxy dibuka. Pastikan orbit kontennya legal ya, Kapten.";
    if (action.category?.includes("image")) return "Oke, generator gambar panas. Zoro siap jadi art director berkumis.";
  }

  if (action.type === "tool_error") {
    return "Hmm, panelnya batuk kecil. Coba cek API key atau endpoint-nya, Kapten.";
  }

  if (action.type === "tool_success") {
    return "Berhasil! Zoro kasih cap paw approval.";
  }

  if (action.type === "theme_change") {
    return "Warna cockpit berubah. Zoro merasa makin mahal dua galaksi.";
  }

  if (action.type === "api_key_test") {
    return "Panel API sudah dicek.";
  }

  return null;
}

export function shouldZoroSpeakNow(lastSpokenAt: number | null, actionType: ZoroActionType): boolean {
  if (!lastSpokenAt) return true;
  const now = Date.now();
  const diff = now - lastSpokenAt;

  if (actionType === "chat_receive") return true; // Always speak for chat responses
  if (actionType === "route_change" && diff > 20000) return true;
  if (actionType === "tool_open" && diff > 15000) return true;
  if (actionType === "tool_success" && diff > 10000) return true;
  if (actionType === "settings_change" && diff > 15000) return true;
  if (actionType === "theme_change" && diff > 15000) return true;
  if (actionType === "tool_error" && diff > 5000) return true; // Less wait time for errors

  return false;
}
