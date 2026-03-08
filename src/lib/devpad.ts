import { ApiClient } from "@devpad/api";

let _client: ApiClient | null = null;

export function getDevpadClient(): ApiClient | null {
  if (_client) return _client;

  const apiKey = process.env.DEVPAD_API_KEY ?? (import.meta as any).env?.DEVPAD_API_KEY;
  if (!apiKey) {
    console.warn("[gallery] No DEVPAD_API_KEY found, using fallback data");
    return null;
  }

  _client = new ApiClient({
    base_url: "https://devpad.tools",
    api_key: apiKey,
    auth_mode: "key",
  });

  return _client;
}
