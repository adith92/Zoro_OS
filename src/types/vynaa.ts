export type VynaaOutputType =
  | "json"
  | "text"
  | "image"
  | "audio"
  | "video"
  | "link"
  | "file"
  | "download"
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
  method: "GET" | "POST";
  params: VynaaEndpointParam[];
  description: string;
  outputType: VynaaOutputType;
  plan?: "free" | "premium" | "vip";
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
  error?: string;
}

// For compatibility with some older code if any
export type EndpointParam = VynaaEndpointParam;
export interface VynaaResponse {
  status: boolean;
  message?: string;
  result?: any;
  data?: any;
  [key: string]: any;
}
