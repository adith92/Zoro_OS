export type VtechOutputType =
  | "json"
  | "text"
  | "image"
  | "audio"
  | "video"
  | "link"
  | "file"
  | "download"
  | "unknown";

export type VtechParamType =
  | "text"
  | "textarea"
  | "url"
  | "number"
  | "select"
  | "boolean"
  | "color"
  | "image-url";

export interface VtechEndpointParam {
  name: string;
  label: string;
  type: VtechParamType;
  required: boolean;
  placeholder?: string;
  defaultValue?: string;
  options?: string[];
  helperText?: string;
}

export interface VtechEndpoint {
  id: string;
  label: string;
  category: string;
  group: string;
  endpoint: string;
  method: "GET" | "POST";
  params: VtechEndpointParam[];
  description: string;
  outputType: VtechOutputType;
  plan?: "free" | "premium" | "vip";
  safe: boolean;
  enabledByDefault: boolean;
  sensitiveReason?: string;
  tags: string[];
  rawUrl?: string;
}

export interface VtechCallResult {
  endpointId: string;
  endpointLabel: string;
  category: string;
  requestedAt: string;
  ok: boolean;
  status?: number;
  contentType?: string;
  outputType: VtechOutputType;
  data?: unknown;
  blobUrl?: string;
  error?: string;
}

// For compatibility with some older code if any
export type EndpointParam = VtechEndpointParam;
export interface ApiResponse {
  status: boolean;
  message?: string;
  result?: any;
  data?: any;
  [key: string]: any;
}
