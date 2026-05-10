import type { VynaaEndpoint, VynaaPlan } from "@/types/vynaa";

const BLOCKED_RULES: Array<{ match: string; reason: string }> = [
  { match: "nsfw", reason: "Adult/NSFW endpoint is disabled by default." },
  { match: "/api/nsfw", reason: "Adult/NSFW endpoint is disabled by default." },
  { match: "gore", reason: "Graphic/gore content endpoint is disabled by default." },
  { match: "nhentai", reason: "Adult manga endpoint is disabled by default." },
  { match: "xnxx", reason: "Adult site related endpoint is disabled by default." },
  { match: "xvideos", reason: "Adult site related endpoint is disabled by default." },
  { match: "porn", reason: "Adult-branded endpoint is disabled by default." },
  { match: "hentai", reason: "Adult anime endpoint is disabled by default." },
  { match: "ahegao", reason: "Adult anime endpoint is disabled by default." },
  { match: "blowjob", reason: "Explicit sexual endpoint is disabled by default." },
  { match: "pussy", reason: "Explicit sexual endpoint is disabled by default." },
  { match: "masturbation", reason: "Explicit sexual endpoint is disabled by default." },
  { match: "gangbang", reason: "Explicit sexual endpoint is disabled by default." },
  { match: "orgy", reason: "Explicit sexual endpoint is disabled by default." },
  { match: "bdsm", reason: "Explicit sexual endpoint is disabled by default." },
  { match: "cum", reason: "Explicit sexual endpoint is disabled by default." },
  { match: "tentacles", reason: "Explicit sexual endpoint is disabled by default." },
  { match: "panties", reason: "Sexualized endpoint is disabled by default." },
  { match: "thighs", reason: "Sexualized endpoint is disabled by default." },
  { match: "zettai", reason: "Sexualized endpoint is disabled by default." },
  { match: "loli", reason: "Potential minor-sexualized endpoint is disabled by default." },
  { match: "shota", reason: "Potential minor-sexualized endpoint is disabled by default." },
  { match: "bocil", reason: "Potential minor-related image endpoint is disabled by default." },
  { match: "ektp", reason: "Fake identity/document generator is disabled by default." },
  { match: "fake-xnxx", reason: "Fake adult-site image generator is disabled by default." },
  { match: "bypassrecaptcha", reason: "Bypass reCAPTCHA endpoint is disabled by default." },
  { match: "recaptcha", reason: "Bypass/CAPTCHA-related endpoint is disabled by default." },
  { match: "vcc", reason: "Virtual credit card generator is disabled by default." },
  { match: "vccgen", reason: "Virtual credit card generator is disabled by default." },
  { match: "stalk", reason: "Account lookup/stalk endpoint is disabled by default for privacy." },
  { match: "cek-ewallet", reason: "Personal financial lookup endpoint is disabled by default." },
  { match: "cekbillpln", reason: "Personal utility account lookup endpoint is disabled by default." },
  { match: "random-address", reason: "Synthetic identity/address generator is disabled by default." },
  { match: "tempmail", reason: "Temporary email endpoint is disabled by default." },
  { match: "create-temp-mail", reason: "Temporary email endpoint is disabled by default." },
  { match: "free-proxy", reason: "Proxy list endpoint is disabled by default." },
  { match: "create-subdo", reason: "DNS/subdomain mutation endpoint is disabled by default." },
  { match: "web2zip", reason: "Website copying/downloading endpoint is disabled by default." },
  { match: "bypasscity", reason: "Bypass utility endpoint is disabled by default." },
];

export function classifyVynaaEndpointSafety(input: {
  label: string;
  category: string;
  endpoint: string;
  group?: string;
  rawUrl?: string;
  plan?: VynaaPlan;
}): {
  safe: boolean;
  enabledByDefault: boolean;
  sensitiveReason?: string;
  tags: string[];
} {
  const fullText = [
    input.label,
    input.category,
    input.group,
    input.endpoint,
    input.rawUrl,
    input.plan,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  const matchedRule = BLOCKED_RULES.find(rule => fullText.includes(rule.match));
  if (matchedRule) {
    return {
      safe: false,
      enabledByDefault: false,
      sensitiveReason: matchedRule.reason,
      tags: ["sensitive", "disabled-by-default"],
    };
  }

  if (input.plan && input.plan !== "free") {
    return {
      safe: false,
      enabledByDefault: false,
      sensitiveReason: `${input.plan.toUpperCase()} plan endpoint requires gated access.`,
      tags: [input.plan, "disabled-by-default"],
    };
  }

  return {
    safe: true,
    enabledByDefault: true,
    tags: [],
  };
}

export function applyVynaaSafety(endpoint: VynaaEndpoint): VynaaEndpoint {
  const safety = classifyVynaaEndpointSafety(endpoint);
  const tags = Array.from(new Set([...(endpoint.tags || []), ...safety.tags]));

  return {
    ...endpoint,
    safe: safety.safe,
    enabledByDefault: safety.enabledByDefault,
    sensitiveReason: safety.sensitiveReason || endpoint.sensitiveReason,
    tags,
  };
}
