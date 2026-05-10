export type VynaaOutputType =
  | "json"
  | "text"
  | "image"
  | "audio"
  | "video"
  | "download"
  | "link"
  | "file"
  | "unknown";

export type VynaaParamType =
  | "text"
  | "textarea"
  | "url"
  | "number"
  | "select"
  | "boolean"
  | "color"
  | "image-url";

export type VynaaPlan = "free" | "premium" | "vip";
export type VynaaMethod = "GET" | "POST";

export interface VynaaEndpointParam {
  name: string;
  label: string;
  type: VynaaParamType;
  required: boolean;
  placeholder?: string;
  defaultValue?: string;
  options?: string[];
  helperText?: string;
}

export interface VynaaEndpoint {
  id: string;
  label: string;
  category: string;
  group: string;
  endpoint: string;
  method: VynaaMethod;
  params: VynaaEndpointParam[];
  description: string;
  outputType: VynaaOutputType;
  plan: VynaaPlan;
  safe: boolean;
  enabledByDefault: boolean;
  sensitiveReason?: string;
  tags: string[];
  rawUrl?: string;
}

export interface VynaaCallResult {
  endpointId: string;
  endpointLabel: string;
  category: string;
  requestedAt: string;
  ok: boolean;
  status?: number;
  contentType?: string;
  outputType: VynaaOutputType;
  data?: unknown;
  blobUrl?: string;
  directUrl?: string;
  error?: string;
  durationMs?: number;
}

// For compatibility with older code.
export type EndpointParam = VynaaEndpointParam;
export interface VynaaResponse {
  status?: boolean;
  ok?: boolean;
  message?: string;
  result?: any;
  data?: any;
  type?: VynaaOutputType;
  error?: string;
  [key: string]: any;
}
