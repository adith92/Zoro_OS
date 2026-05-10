import { VynaaEndpoint } from '../types/vynaa';

export const GENERATED_VYNAA_ENDPOINTS: VynaaEndpoint[] = [
  {
    "id": "vynaa_ep_1",
    "label": "AI - AI4Chat",
    "category": "AI",
    "group": "AI",
    "endpoint": "/api/ai/ai4chat",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Chat dengan AI4Chat — model AI general purpose yang cepat dan responsif.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: AI",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ai/ai4chat"
  },
  {
    "id": "vynaa_ep_2",
    "label": "AI - Bible AI",
    "category": "AI",
    "group": "AI",
    "endpoint": "/api/ai/bibleai",
    "method": "GET",
    "params": [
      {
        "name": "question",
        "label": "question",
        "type": "text",
        "required": true
      },
      {
        "name": "translation",
        "label": "translation",
        "type": "text",
        "required": false
      }
    ],
    "description": "Ask a Bible-grounded AI a question with cited verses & sources.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: AI",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ai/bibleai"
  },
  {
    "id": "vynaa_ep_3",
    "label": "AI - DeepSeek R1 (CF)",
    "category": "AI",
    "group": "AI",
    "endpoint": "/api/ai/deepseek-r1",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Chat dengan DeepSeek R1 via Cloudflare Workers AI — model reasoning canggih.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: AI",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ai/deepseek-r1"
  },
  {
    "id": "vynaa_ep_4",
    "label": "AI - Gemma 3 12B (CF)",
    "category": "AI",
    "group": "AI",
    "endpoint": "/api/ai/gemma-3-12b",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Chat dengan Google Gemma 3 12B via Cloudflare Workers AI.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: AI",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ai/gemma-3-12b"
  },
  {
    "id": "vynaa_ep_5",
    "label": "AI - Gemma 7B LoRA (CF)",
    "category": "AI",
    "group": "AI",
    "endpoint": "/api/ai/gemma-7b-lora",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Chat dengan Google Gemma 7B (fine-tuned LoRA) via Cloudflare Workers AI.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: AI",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ai/gemma-7b-lora"
  },
  {
    "id": "vynaa_ep_6",
    "label": "AI - DeepSeek R1",
    "category": "AI",
    "group": "AI",
    "endpoint": "/api/ai/deepseekr1",
    "method": "GET",
    "params": [
      {
        "name": "prompt",
        "label": "prompt",
        "type": "text",
        "required": true
      },
      {
        "name": "system",
        "label": "system",
        "type": "text",
        "required": false
      },
      {
        "name": "temperature",
        "label": "temperature",
        "type": "text",
        "required": false
      }
    ],
    "description": "Chat with DeepSeek R1 reasoning language model.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: AI",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ai/deepseekr1"
  },
  {
    "id": "vynaa_ep_7",
    "label": "AI - Gita",
    "category": "AI",
    "group": "AI",
    "endpoint": "/api/ai/gita",
    "method": "GET",
    "params": [
      {
        "name": "q",
        "label": "q",
        "type": "text",
        "required": true
      }
    ],
    "description": "Ask the Bhagavad Gita AI a spiritual / philosophical question.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: AI",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ai/gita"
  },
  {
    "id": "vynaa_ep_8",
    "label": "AI - GLM 4.7 Flash",
    "category": "AI",
    "group": "AI",
    "endpoint": "/api/ai/glm47flash",
    "method": "GET",
    "params": [
      {
        "name": "prompt",
        "label": "prompt",
        "type": "text",
        "required": true
      },
      {
        "name": "system",
        "label": "system",
        "type": "text",
        "required": false
      },
      {
        "name": "temperature",
        "label": "temperature",
        "type": "text",
        "required": false
      }
    ],
    "description": "Chat with Z.ai GLM 4.7 Flash language model.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: AI",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ai/glm47flash"
  },
  {
    "id": "vynaa_ep_9",
    "label": "AI - GPT-OSS 120B",
    "category": "AI",
    "group": "AI",
    "endpoint": "/api/ai/gptoss120b",
    "method": "GET",
    "params": [
      {
        "name": "prompt",
        "label": "prompt",
        "type": "text",
        "required": true
      },
      {
        "name": "system",
        "label": "system",
        "type": "text",
        "required": false
      },
      {
        "name": "temperature",
        "label": "temperature",
        "type": "text",
        "required": false
      }
    ],
    "description": "Chat with the GPT-OSS 120B open-source language model.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: AI",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ai/gptoss120b"
  },
  {
    "id": "vynaa_ep_10",
    "label": "AI - Groq Compound",
    "category": "AI",
    "group": "AI",
    "endpoint": "/api/ai/groq-compound",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      },
      {
        "name": "systemPrompt",
        "label": "systemPrompt",
        "type": "text",
        "required": false
      },
      {
        "name": "sessionId",
        "label": "sessionId",
        "type": "text",
        "required": false
      }
    ],
    "description": "Chat AI dengan Groq Compound — ultra fast inference, mendukung session (memory) dan system prompt.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: AI",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ai/groq-compound"
  },
  {
    "id": "vynaa_ep_11",
    "label": "AI - Phi-2",
    "category": "AI",
    "group": "AI",
    "endpoint": "/api/ai/phi2",
    "method": "GET",
    "params": [
      {
        "name": "prompt",
        "label": "prompt",
        "type": "text",
        "required": true
      },
      {
        "name": "system",
        "label": "system",
        "type": "text",
        "required": false
      },
      {
        "name": "temperature",
        "label": "temperature",
        "type": "text",
        "required": false
      }
    ],
    "description": "Chat with Microsoft Phi-2 small language model.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: AI",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ai/phi2"
  },
  {
    "id": "vynaa_ep_12",
    "label": "AI - QwQ 32B",
    "category": "AI",
    "group": "AI",
    "endpoint": "/api/ai/qwq32b",
    "method": "GET",
    "params": [
      {
        "name": "prompt",
        "label": "prompt",
        "type": "text",
        "required": true
      },
      {
        "name": "system",
        "label": "system",
        "type": "text",
        "required": false
      },
      {
        "name": "temperature",
        "label": "temperature",
        "type": "text",
        "required": false
      }
    ],
    "description": "Chat with Alibaba Qwen QwQ 32B reasoning model.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: AI",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ai/qwq32b"
  },
  {
    "id": "vynaa_ep_13",
    "label": "AI - Writecream",
    "category": "AI",
    "group": "AI",
    "endpoint": "/api/ai/writecream",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      },
      {
        "name": "logic",
        "label": "logic",
        "type": "text",
        "required": false
      }
    ],
    "description": "Chat AI dengan Writecream — mendukung custom system prompt (logic).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: AI",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ai/writecream"
  },
  {
    "id": "vynaa_ep_14",
    "label": "Anime - Akira",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/akira",
    "method": "GET",
    "params": [],
    "description": "Random akira anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/akira"
  },
  {
    "id": "vynaa_ep_15",
    "label": "Anime - Akiyama",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/akiyama",
    "method": "GET",
    "params": [],
    "description": "Random akiyama anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/akiyama"
  },
  {
    "id": "vynaa_ep_16",
    "label": "Anime - Ana",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/ana",
    "method": "GET",
    "params": [],
    "description": "Random ana anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/ana"
  },
  {
    "id": "vynaa_ep_17",
    "label": "Anime - Asuna",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/asuna",
    "method": "GET",
    "params": [],
    "description": "Random asuna anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/asuna"
  },
  {
    "id": "vynaa_ep_18",
    "label": "Anime - Auratail Search",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/auratail-search",
    "method": "GET",
    "params": [
      {
        "name": "query",
        "label": "query",
        "type": "text",
        "required": true
      }
    ],
    "description": "Search novels/manhua from auratail.vip.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/auratail-search"
  },
  {
    "id": "vynaa_ep_19",
    "label": "Anime - Ayuzawa",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/ayuzawa",
    "method": "GET",
    "params": [],
    "description": "Random ayuzawa anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/ayuzawa"
  },
  {
    "id": "vynaa_ep_20",
    "label": "Anime - Boruto",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/boruto",
    "method": "GET",
    "params": [],
    "description": "Random boruto anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/boruto"
  },
  {
    "id": "vynaa_ep_21",
    "label": "Anime - Chiho",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/chiho",
    "method": "GET",
    "params": [],
    "description": "Random chiho anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/chiho"
  },
  {
    "id": "vynaa_ep_22",
    "label": "Anime - Chitoge",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/chitoge",
    "method": "GET",
    "params": [],
    "description": "Random chitoge anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/chitoge"
  },
  {
    "id": "vynaa_ep_23",
    "label": "Anime - Deidara",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/deidara",
    "method": "GET",
    "params": [],
    "description": "Random deidara anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/deidara"
  },
  {
    "id": "vynaa_ep_24",
    "label": "Anime - Doraemon",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/doraemon",
    "method": "GET",
    "params": [],
    "description": "Random doraemon anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/doraemon"
  },
  {
    "id": "vynaa_ep_25",
    "label": "Anime - Eba",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/eba",
    "method": "GET",
    "params": [],
    "description": "Random eba anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/eba"
  },
  {
    "id": "vynaa_ep_26",
    "label": "Anime - Elaina",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/elaina",
    "method": "GET",
    "params": [],
    "description": "Random elaina anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/elaina"
  },
  {
    "id": "vynaa_ep_27",
    "label": "Anime - Emilia",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/emilia",
    "method": "GET",
    "params": [],
    "description": "Random emilia anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/emilia"
  },
  {
    "id": "vynaa_ep_28",
    "label": "Anime - Erza",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/erza",
    "method": "GET",
    "params": [],
    "description": "Random erza anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/erza"
  },
  {
    "id": "vynaa_ep_29",
    "label": "Anime - Gremory",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/gremory",
    "method": "GET",
    "params": [],
    "description": "Random gremory anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/gremory"
  },
  {
    "id": "vynaa_ep_30",
    "label": "Anime - Hestia",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/hestia",
    "method": "GET",
    "params": [],
    "description": "Random hestia anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/hestia"
  },
  {
    "id": "vynaa_ep_31",
    "label": "Anime - Hinata",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/hinata",
    "method": "GET",
    "params": [],
    "description": "Random hinata anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/hinata"
  },
  {
    "id": "vynaa_ep_32",
    "label": "Anime - Husbu",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/husbu",
    "method": "GET",
    "params": [],
    "description": "Random husbu anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/husbu"
  },
  {
    "id": "vynaa_ep_33",
    "label": "Anime - Inori",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/inori",
    "method": "GET",
    "params": [],
    "description": "Random inori anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/inori"
  },
  {
    "id": "vynaa_ep_34",
    "label": "Anime - Isuzu",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/isuzu",
    "method": "GET",
    "params": [],
    "description": "Random isuzu anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/isuzu"
  },
  {
    "id": "vynaa_ep_35",
    "label": "Anime - Itachi",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/itachi",
    "method": "GET",
    "params": [],
    "description": "Random itachi anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/itachi"
  },
  {
    "id": "vynaa_ep_36",
    "label": "Anime - Itori",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/itori",
    "method": "GET",
    "params": [],
    "description": "Random itori anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/itori"
  },
  {
    "id": "vynaa_ep_37",
    "label": "Anime - Kaga",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/kaga",
    "method": "GET",
    "params": [],
    "description": "Random kaga anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/kaga"
  },
  {
    "id": "vynaa_ep_38",
    "label": "Anime - Kagura",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/kagura",
    "method": "GET",
    "params": [],
    "description": "Random kagura anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/kagura"
  },
  {
    "id": "vynaa_ep_39",
    "label": "Anime - Kakasih",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/kakasih",
    "method": "GET",
    "params": [],
    "description": "Random kakasih anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/kakasih"
  },
  {
    "id": "vynaa_ep_40",
    "label": "Anime - Kaori",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/kaori",
    "method": "GET",
    "params": [],
    "description": "Random kaori anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/kaori"
  },
  {
    "id": "vynaa_ep_41",
    "label": "Anime - Keneki",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/keneki",
    "method": "GET",
    "params": [],
    "description": "Random keneki anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/keneki"
  },
  {
    "id": "vynaa_ep_42",
    "label": "Anime - Kotori",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/kotori",
    "method": "GET",
    "params": [],
    "description": "Random kotori anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/kotori"
  },
  {
    "id": "vynaa_ep_43",
    "label": "Anime - Kurumi",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/kurumi",
    "method": "GET",
    "params": [],
    "description": "Random kurumi anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/kurumi"
  },
  {
    "id": "vynaa_ep_44",
    "label": "Anime - Madara",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/madara",
    "method": "GET",
    "params": [],
    "description": "Random madara anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/madara"
  },
  {
    "id": "vynaa_ep_45",
    "label": "Anime - Megumin",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/megumin",
    "method": "GET",
    "params": [],
    "description": "Random megumin anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/megumin"
  },
  {
    "id": "vynaa_ep_46",
    "label": "Anime - Mikasa",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/mikasa",
    "method": "GET",
    "params": [],
    "description": "Random mikasa anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/mikasa"
  },
  {
    "id": "vynaa_ep_47",
    "label": "Anime - Miku",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/miku",
    "method": "GET",
    "params": [],
    "description": "Random miku anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/miku"
  },
  {
    "id": "vynaa_ep_48",
    "label": "Anime - Minato",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/minato",
    "method": "GET",
    "params": [],
    "description": "Random minato anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/minato"
  },
  {
    "id": "vynaa_ep_49",
    "label": "Anime - Naruto",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/naruto",
    "method": "GET",
    "params": [],
    "description": "Random naruto anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/naruto"
  },
  {
    "id": "vynaa_ep_50",
    "label": "Anime - Nezuko",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/nezuko",
    "method": "GET",
    "params": [],
    "description": "Random nezuko anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/nezuko"
  },
  {
    "id": "vynaa_ep_51",
    "label": "Anime - Nsfwloli",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/nsfwloli",
    "method": "GET",
    "params": [],
    "description": "Random nsfwloli anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/nsfwloli"
  },
  {
    "id": "vynaa_ep_52",
    "label": "Anime - Onepiece",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/onepiece",
    "method": "GET",
    "params": [],
    "description": "Random onepiece anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/onepiece"
  },
  {
    "id": "vynaa_ep_53",
    "label": "Anime - Pokemon",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/pokemon",
    "method": "GET",
    "params": [],
    "description": "Random pokemon anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/pokemon"
  },
  {
    "id": "vynaa_ep_54",
    "label": "Anime - Rize",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/rize",
    "method": "GET",
    "params": [],
    "description": "Random rize anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/rize"
  },
  {
    "id": "vynaa_ep_55",
    "label": "Anime - Sagiri",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/sagiri",
    "method": "GET",
    "params": [],
    "description": "Random sagiri anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/sagiri"
  },
  {
    "id": "vynaa_ep_56",
    "label": "Anime - Sakura",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/sakura",
    "method": "GET",
    "params": [],
    "description": "Random sakura anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/sakura"
  },
  {
    "id": "vynaa_ep_57",
    "label": "Anime - Sasuke",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/sasuke",
    "method": "GET",
    "params": [],
    "description": "Random sasuke anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/sasuke"
  },
  {
    "id": "vynaa_ep_58",
    "label": "Anime - Shina",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/shina",
    "method": "GET",
    "params": [],
    "description": "Random shina anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/shina"
  },
  {
    "id": "vynaa_ep_59",
    "label": "Anime - Shinka",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/shinka",
    "method": "GET",
    "params": [],
    "description": "Random shinka anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/shinka"
  },
  {
    "id": "vynaa_ep_60",
    "label": "Anime - Shinomiya",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/shinomiya",
    "method": "GET",
    "params": [],
    "description": "Random shinomiya anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/shinomiya"
  },
  {
    "id": "vynaa_ep_61",
    "label": "Anime - Shizuka",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/shizuka",
    "method": "GET",
    "params": [],
    "description": "Random shizuka anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/shizuka"
  },
  {
    "id": "vynaa_ep_62",
    "label": "Anime - Shota",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/shota",
    "method": "GET",
    "params": [],
    "description": "Random shota anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/shota"
  },
  {
    "id": "vynaa_ep_63",
    "label": "Anime - Tejina",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/tejina",
    "method": "GET",
    "params": [],
    "description": "Random tejina anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/tejina"
  },
  {
    "id": "vynaa_ep_64",
    "label": "Anime - Toukachan",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/toukachan",
    "method": "GET",
    "params": [],
    "description": "Random toukachan anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/toukachan"
  },
  {
    "id": "vynaa_ep_65",
    "label": "Anime - Tsunade",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/tsunade",
    "method": "GET",
    "params": [],
    "description": "Random tsunade anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/tsunade"
  },
  {
    "id": "vynaa_ep_66",
    "label": "Anime - Umaru",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/umaru",
    "method": "GET",
    "params": [],
    "description": "Random umaru anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/umaru"
  },
  {
    "id": "vynaa_ep_67",
    "label": "Anime - Waifu",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/waifu",
    "method": "GET",
    "params": [],
    "description": "Random waifu anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/waifu"
  },
  {
    "id": "vynaa_ep_68",
    "label": "Anime - Waifu2",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/waifu2",
    "method": "GET",
    "params": [],
    "description": "Random waifu2 anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/waifu2"
  },
  {
    "id": "vynaa_ep_69",
    "label": "Anime - Yotsuba",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/yotsuba",
    "method": "GET",
    "params": [],
    "description": "Random yotsuba anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/yotsuba"
  },
  {
    "id": "vynaa_ep_70",
    "label": "Anime - Yumeko",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/yumeko",
    "method": "GET",
    "params": [],
    "description": "Random yumeko anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/yumeko"
  },
  {
    "id": "vynaa_ep_71",
    "label": "Anime - Yuri",
    "category": "Anime",
    "group": "Anime",
    "endpoint": "/api/anime/yuri",
    "method": "GET",
    "params": [],
    "description": "Random yuri anime image.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/anime/yuri"
  },
  {
    "id": "vynaa_ep_72",
    "label": "Asupan - Anony",
    "category": "Asupan",
    "group": "Asupan",
    "endpoint": "/api/asupan/anony",
    "method": "GET",
    "params": [],
    "description": "Random anony video.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Asupan",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/asupan/anony"
  },
  {
    "id": "vynaa_ep_73",
    "label": "Asupan - Asupan",
    "category": "Asupan",
    "group": "Asupan",
    "endpoint": "/api/asupan/asupan",
    "method": "GET",
    "params": [],
    "description": "Random asupan video.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Asupan",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/asupan/asupan"
  },
  {
    "id": "vynaa_ep_74",
    "label": "Asupan - Bocil",
    "category": "Asupan",
    "group": "Asupan",
    "endpoint": "/api/asupan/bocil",
    "method": "GET",
    "params": [],
    "description": "Random bocil video.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Asupan",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/asupan/bocil"
  },
  {
    "id": "vynaa_ep_75",
    "label": "Asupan - Cecan",
    "category": "Asupan",
    "group": "Asupan",
    "endpoint": "/api/asupan/cecan",
    "method": "GET",
    "params": [],
    "description": "Random cecan image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Asupan",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/asupan/cecan"
  },
  {
    "id": "vynaa_ep_76",
    "label": "Asupan - Douyin",
    "category": "Asupan",
    "group": "Asupan",
    "endpoint": "/api/asupan/douyin",
    "method": "GET",
    "params": [],
    "description": "Random douyin video.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Asupan",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/asupan/douyin"
  },
  {
    "id": "vynaa_ep_77",
    "label": "Asupan - Euni",
    "category": "Asupan",
    "group": "Asupan",
    "endpoint": "/api/asupan/euni",
    "method": "GET",
    "params": [],
    "description": "Random euni video.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Asupan",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/asupan/euni"
  },
  {
    "id": "vynaa_ep_78",
    "label": "Asupan - Gheayubi",
    "category": "Asupan",
    "group": "Asupan",
    "endpoint": "/api/asupan/gheayubi",
    "method": "GET",
    "params": [],
    "description": "Random gheayubi video.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Asupan",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/asupan/gheayubi"
  },
  {
    "id": "vynaa_ep_79",
    "label": "Asupan - Hijaber",
    "category": "Asupan",
    "group": "Asupan",
    "endpoint": "/api/asupan/hijaber",
    "method": "GET",
    "params": [],
    "description": "Random hijaber image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Asupan",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/asupan/hijaber"
  },
  {
    "id": "vynaa_ep_80",
    "label": "Asupan - Natajadeh",
    "category": "Asupan",
    "group": "Asupan",
    "endpoint": "/api/asupan/natajadeh",
    "method": "GET",
    "params": [],
    "description": "Random natajadeh video.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Asupan",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/asupan/natajadeh"
  },
  {
    "id": "vynaa_ep_81",
    "label": "Asupan - Rikagusriani",
    "category": "Asupan",
    "group": "Asupan",
    "endpoint": "/api/asupan/rikagusriani",
    "method": "GET",
    "params": [],
    "description": "Random rikagusriani video.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Asupan",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/asupan/rikagusriani"
  },
  {
    "id": "vynaa_ep_82",
    "label": "Asupan - Santuy",
    "category": "Asupan",
    "group": "Asupan",
    "endpoint": "/api/asupan/santuy",
    "method": "GET",
    "params": [],
    "description": "Random santuy data.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Asupan",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/asupan/santuy"
  },
  {
    "id": "vynaa_ep_83",
    "label": "Asupan - TikTok Search",
    "category": "Asupan",
    "group": "Asupan",
    "endpoint": "/api/asupan/tiktok",
    "method": "GET",
    "params": [
      {
        "name": "query",
        "label": "query",
        "type": "text",
        "required": true
      }
    ],
    "description": "Search TikTok user/video by query (returns JSON).",
    "outputType": "video",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Asupan",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/asupan/tiktok"
  },
  {
    "id": "vynaa_ep_84",
    "label": "Asupan - Ukhty",
    "category": "Asupan",
    "group": "Asupan",
    "endpoint": "/api/asupan/ukhty",
    "method": "GET",
    "params": [],
    "description": "Random ukhty video.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Asupan",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/asupan/ukhty"
  },
  {
    "id": "vynaa_ep_85",
    "label": "Berita - CNBC Indonesia",
    "category": "Berita",
    "group": "Berita",
    "endpoint": "/api/berita/cnbcindonesia",
    "method": "GET",
    "params": [],
    "description": "Get latest news from CNBC Indonesia.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Berita",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/berita/cnbcindonesia"
  },
  {
    "id": "vynaa_ep_86",
    "label": "Berita - Kumparan Latest",
    "category": "Berita",
    "group": "Berita",
    "endpoint": "/api/berita/kumparan",
    "method": "GET",
    "params": [],
    "description": "Ambil berita terbaru dari Kumparan.com.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Berita",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/berita/kumparan"
  },
  {
    "id": "vynaa_ep_87",
    "label": "Berita - Merdeka Kategori",
    "category": "Berita",
    "group": "Berita",
    "endpoint": "/api/berita/merdeka/category",
    "method": "GET",
    "params": [
      {
        "name": "name",
        "label": "name",
        "type": "text",
        "required": true
      }
    ],
    "description": "Ambil berita dari Merdeka.com berdasarkan kategori (otomotif, teknologi, nasional, dll).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Berita",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/berita/merdeka/category"
  },
  {
    "id": "vynaa_ep_88",
    "label": "Berita - Merdeka Latest",
    "category": "Berita",
    "group": "Berita",
    "endpoint": "/api/berita/merdeka",
    "method": "GET",
    "params": [],
    "description": "Ambil berita terbaru dari Merdeka.com.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Berita",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/berita/merdeka"
  },
  {
    "id": "vynaa_ep_89",
    "label": "Berita - Okezone Latest",
    "category": "Berita",
    "group": "Berita",
    "endpoint": "/api/berita/okezone",
    "method": "GET",
    "params": [],
    "description": "Ambil berita terbaru dari Okezone.com.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Berita",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/berita/okezone"
  },
  {
    "id": "vynaa_ep_90",
    "label": "Berita - Sindonews Latest",
    "category": "Berita",
    "group": "Berita",
    "endpoint": "/api/berita/sindonews",
    "method": "GET",
    "params": [],
    "description": "Ambil berita terbaru dari Sindonews.com.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Berita",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/berita/sindonews"
  },
  {
    "id": "vynaa_ep_91",
    "label": "Canvas - Affect",
    "category": "Canvas",
    "group": "Canvas",
    "endpoint": "/api/canvas/affect",
    "method": "GET",
    "params": [
      {
        "name": "image",
        "label": "image",
        "type": "url",
        "required": true
      }
    ],
    "description": "\"This will affect the baby\" meme generator (returns PNG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Canvas",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/canvas/affect"
  },
  {
    "id": "vynaa_ep_92",
    "label": "Canvas - Batslap",
    "category": "Canvas",
    "group": "Canvas",
    "endpoint": "/api/canvas/batslap",
    "method": "GET",
    "params": [
      {
        "name": "image1",
        "label": "image1",
        "type": "url",
        "required": true
      },
      {
        "name": "image2",
        "label": "image2",
        "type": "url",
        "required": true
      }
    ],
    "description": "Classic Batman slapping Robin meme (returns PNG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Canvas",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/canvas/batslap"
  },
  {
    "id": "vynaa_ep_93",
    "label": "Canvas - Beautiful",
    "category": "Canvas",
    "group": "Canvas",
    "endpoint": "/api/canvas/beautiful",
    "method": "GET",
    "params": [
      {
        "name": "image",
        "label": "image",
        "type": "url",
        "required": true
      }
    ],
    "description": "Disney \"She is so beautiful\" meme generator (returns PNG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Canvas",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/canvas/beautiful"
  },
  {
    "id": "vynaa_ep_94",
    "label": "Canvas - Blur",
    "category": "Canvas",
    "group": "Canvas",
    "endpoint": "/api/canvas/blur",
    "method": "GET",
    "params": [
      {
        "name": "image",
        "label": "image",
        "type": "url",
        "required": true
      }
    ],
    "description": "Apply a blur filter to an image (returns PNG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Canvas",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/canvas/blur"
  },
  {
    "id": "vynaa_ep_95",
    "label": "Canvas - Captcha",
    "category": "Canvas",
    "group": "Canvas",
    "endpoint": "/api/canvas/captcha",
    "method": "GET",
    "params": [
      {
        "name": "background",
        "label": "background",
        "type": "url",
        "required": true
      },
      {
        "name": "captchaKey",
        "label": "captchaKey",
        "type": "text",
        "required": true
      },
      {
        "name": "border",
        "label": "border",
        "type": "text",
        "required": false
      },
      {
        "name": "overlayOpacity",
        "label": "overlayOpacity",
        "type": "text",
        "required": false
      }
    ],
    "description": "Generate a custom captcha image (returns PNG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Canvas",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/canvas/captcha"
  },
  {
    "id": "vynaa_ep_96",
    "label": "Canvas - Circle",
    "category": "Canvas",
    "group": "Canvas",
    "endpoint": "/api/canvas/circle",
    "method": "GET",
    "params": [
      {
        "name": "image",
        "label": "image",
        "type": "url",
        "required": true
      }
    ],
    "description": "Crop an image into a circle (returns PNG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Canvas",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/canvas/circle"
  },
  {
    "id": "vynaa_ep_97",
    "label": "Canvas - Darkness",
    "category": "Canvas",
    "group": "Canvas",
    "endpoint": "/api/canvas/darkness",
    "method": "GET",
    "params": [
      {
        "name": "image",
        "label": "image",
        "type": "url",
        "required": true
      },
      {
        "name": "amount",
        "label": "amount",
        "type": "number",
        "required": false
      }
    ],
    "description": "Darken an image by a given amount (returns PNG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Canvas",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/canvas/darkness"
  },
  {
    "id": "vynaa_ep_98",
    "label": "Canvas - Delete",
    "category": "Canvas",
    "group": "Canvas",
    "endpoint": "/api/canvas/delete",
    "method": "GET",
    "params": [
      {
        "name": "image",
        "label": "image",
        "type": "url",
        "required": true
      }
    ],
    "description": "Windows-style \"delete\" pop-up around an avatar (returns PNG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Canvas",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/canvas/delete"
  },
  {
    "id": "vynaa_ep_99",
    "label": "Canvas - E-KTP",
    "category": "Canvas",
    "group": "Canvas",
    "endpoint": "/api/canvas/ektp",
    "method": "GET",
    "params": [
      {
        "name": "provinsi",
        "label": "provinsi",
        "type": "text",
        "required": true
      },
      {
        "name": "kota",
        "label": "kota",
        "type": "text",
        "required": true
      },
      {
        "name": "nik",
        "label": "nik",
        "type": "text",
        "required": true
      },
      {
        "name": "nama",
        "label": "nama",
        "type": "text",
        "required": true
      },
      {
        "name": "ttl",
        "label": "ttl",
        "type": "text",
        "required": true
      },
      {
        "name": "jenis_kelamin",
        "label": "jenis_kelamin",
        "type": "text",
        "required": true
      },
      {
        "name": "golongan_darah",
        "label": "golongan_darah",
        "type": "text",
        "required": true
      },
      {
        "name": "alamat",
        "label": "alamat",
        "type": "text",
        "required": true
      },
      {
        "name": "rt/rw",
        "label": "rt/rw",
        "type": "text",
        "required": true
      },
      {
        "name": "kel/desa",
        "label": "kel/desa",
        "type": "text",
        "required": true
      },
      {
        "name": "kecamatan",
        "label": "kecamatan",
        "type": "text",
        "required": true
      },
      {
        "name": "agama",
        "label": "agama",
        "type": "text",
        "required": true
      },
      {
        "name": "status",
        "label": "status",
        "type": "text",
        "required": true
      },
      {
        "name": "pekerjaan",
        "label": "pekerjaan",
        "type": "text",
        "required": true
      },
      {
        "name": "kewarganegaraan",
        "label": "kewarganegaraan",
        "type": "text",
        "required": true
      },
      {
        "name": "masa_berlaku",
        "label": "masa_berlaku",
        "type": "text",
        "required": true
      },
      {
        "name": "terbuat",
        "label": "terbuat",
        "type": "text",
        "required": true
      },
      {
        "name": "pas_photo",
        "label": "pas_photo",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a fake Indonesian E-KTP (ID card) image (returns PNG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Contains restricted keyword: ktp",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/canvas/ektp"
  },
  {
    "id": "vynaa_ep_100",
    "label": "Canvas - Facepalm",
    "category": "Canvas",
    "group": "Canvas",
    "endpoint": "/api/canvas/facepalm",
    "method": "GET",
    "params": [
      {
        "name": "image",
        "label": "image",
        "type": "url",
        "required": true
      }
    ],
    "description": "Facepalm meme overlay around an image (returns PNG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Canvas",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/canvas/facepalm"
  },
  {
    "id": "vynaa_ep_101",
    "label": "Canvas - Fake XNXX",
    "category": "Canvas",
    "group": "Canvas",
    "endpoint": "/api/canvas/fake-xnxx",
    "method": "GET",
    "params": [
      {
        "name": "name",
        "label": "name",
        "type": "text",
        "required": true
      },
      {
        "name": "quote",
        "label": "quote",
        "type": "text",
        "required": true
      },
      {
        "name": "likes",
        "label": "likes",
        "type": "number",
        "required": false
      },
      {
        "name": "dislikes",
        "label": "dislikes",
        "type": "number",
        "required": false
      }
    ],
    "description": "Generate a fake XNXX-style quote card (returns PNG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Contains restricted keyword: xnxx",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/canvas/fake-xnxx"
  },
  {
    "id": "vynaa_ep_102",
    "label": "Canvas - Gay",
    "category": "Canvas",
    "group": "Canvas",
    "endpoint": "/api/canvas/gay",
    "method": "GET",
    "params": [
      {
        "name": "nama",
        "label": "nama",
        "type": "text",
        "required": true
      },
      {
        "name": "avatar",
        "label": "avatar",
        "type": "url",
        "required": true
      },
      {
        "name": "num",
        "label": "num",
        "type": "text",
        "required": true
      }
    ],
    "description": "Add a \"gay-meter\" gradient overlay on an avatar (returns PNG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Canvas",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/canvas/gay"
  },
  {
    "id": "vynaa_ep_103",
    "label": "Canvas - Goodbye v1",
    "category": "Canvas",
    "group": "Canvas",
    "endpoint": "/api/canvas/goodbyev1",
    "method": "GET",
    "params": [
      {
        "name": "username",
        "label": "username",
        "type": "text",
        "required": true
      },
      {
        "name": "guildName",
        "label": "guildName",
        "type": "text",
        "required": true
      },
      {
        "name": "guildIcon",
        "label": "guildIcon",
        "type": "text",
        "required": true
      },
      {
        "name": "memberCount",
        "label": "memberCount",
        "type": "text",
        "required": true
      },
      {
        "name": "avatar",
        "label": "avatar",
        "type": "url",
        "required": true
      },
      {
        "name": "background",
        "label": "background",
        "type": "url",
        "required": true
      },
      {
        "name": "quality",
        "label": "quality",
        "type": "text",
        "required": false
      }
    ],
    "description": "Goodbye card variant 1 (returns PNG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Canvas",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/canvas/goodbyev1"
  },
  {
    "id": "vynaa_ep_104",
    "label": "Canvas - Goodbye v2",
    "category": "Canvas",
    "group": "Canvas",
    "endpoint": "/api/canvas/goodbyev2",
    "method": "GET",
    "params": [
      {
        "name": "username",
        "label": "username",
        "type": "text",
        "required": true
      },
      {
        "name": "guildName",
        "label": "guildName",
        "type": "text",
        "required": true
      },
      {
        "name": "memberCount",
        "label": "memberCount",
        "type": "text",
        "required": true
      },
      {
        "name": "avatar",
        "label": "avatar",
        "type": "url",
        "required": true
      },
      {
        "name": "background",
        "label": "background",
        "type": "url",
        "required": true
      }
    ],
    "description": "Goodbye card variant 2 (returns PNG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Canvas",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/canvas/goodbyev2"
  },
  {
    "id": "vynaa_ep_105",
    "label": "Canvas - Goodbye v3",
    "category": "Canvas",
    "group": "Canvas",
    "endpoint": "/api/canvas/goodbyev3",
    "method": "GET",
    "params": [
      {
        "name": "username",
        "label": "username",
        "type": "text",
        "required": true
      },
      {
        "name": "avatar",
        "label": "avatar",
        "type": "url",
        "required": true
      }
    ],
    "description": "Goodbye card variant 3 (minimal) (returns PNG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Canvas",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/canvas/goodbyev3"
  },
  {
    "id": "vynaa_ep_106",
    "label": "Canvas - Goodbye v4",
    "category": "Canvas",
    "group": "Canvas",
    "endpoint": "/api/canvas/goodbyev4",
    "method": "GET",
    "params": [
      {
        "name": "avatar",
        "label": "avatar",
        "type": "url",
        "required": true
      },
      {
        "name": "background",
        "label": "background",
        "type": "url",
        "required": true
      },
      {
        "name": "title",
        "label": "title",
        "type": "text",
        "required": true
      },
      {
        "name": "description",
        "label": "description",
        "type": "text",
        "required": true
      },
      {
        "name": "border",
        "label": "border",
        "type": "text",
        "required": false
      },
      {
        "name": "avatarBorder",
        "label": "avatarBorder",
        "type": "url",
        "required": false
      },
      {
        "name": "overlayOpacity",
        "label": "overlayOpacity",
        "type": "text",
        "required": false
      }
    ],
    "description": "Goodbye card variant 4 with custom title & description (returns PNG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Canvas",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/canvas/goodbyev4"
  },
  {
    "id": "vynaa_ep_107",
    "label": "Canvas - Goodbye v5",
    "category": "Canvas",
    "group": "Canvas",
    "endpoint": "/api/canvas/goodbyev5",
    "method": "GET",
    "params": [
      {
        "name": "username",
        "label": "username",
        "type": "text",
        "required": true
      },
      {
        "name": "guildName",
        "label": "guildName",
        "type": "text",
        "required": true
      },
      {
        "name": "memberCount",
        "label": "memberCount",
        "type": "text",
        "required": true
      },
      {
        "name": "avatar",
        "label": "avatar",
        "type": "url",
        "required": true
      },
      {
        "name": "background",
        "label": "background",
        "type": "url",
        "required": true
      },
      {
        "name": "quality",
        "label": "quality",
        "type": "text",
        "required": false
      }
    ],
    "description": "Goodbye card variant 5 (returns PNG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Canvas",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/canvas/goodbyev5"
  },
  {
    "id": "vynaa_ep_108",
    "label": "Canvas - Greyscale",
    "category": "Canvas",
    "group": "Canvas",
    "endpoint": "/api/canvas/greyscale",
    "method": "GET",
    "params": [
      {
        "name": "image",
        "label": "image",
        "type": "url",
        "required": true
      }
    ],
    "description": "Convert an image URL to greyscale.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Canvas",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/canvas/greyscale"
  },
  {
    "id": "vynaa_ep_109",
    "label": "Canvas - Invert",
    "category": "Canvas",
    "group": "Canvas",
    "endpoint": "/api/canvas/invert",
    "method": "GET",
    "params": [
      {
        "name": "image",
        "label": "image",
        "type": "url",
        "required": true
      }
    ],
    "description": "Invert colors of an image (returns PNG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Canvas",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/canvas/invert"
  },
  {
    "id": "vynaa_ep_110",
    "label": "Canvas - Kiss",
    "category": "Canvas",
    "group": "Canvas",
    "endpoint": "/api/canvas/kiss",
    "method": "GET",
    "params": [
      {
        "name": "image1",
        "label": "image1",
        "type": "url",
        "required": true
      },
      {
        "name": "image2",
        "label": "image2",
        "type": "url",
        "required": true
      }
    ],
    "description": "Kiss meme combining two avatars (returns PNG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Canvas",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/canvas/kiss"
  },
  {
    "id": "vynaa_ep_111",
    "label": "Canvas - Level Up",
    "category": "Canvas",
    "group": "Canvas",
    "endpoint": "/api/canvas/level-up",
    "method": "GET",
    "params": [
      {
        "name": "backgroundURL",
        "label": "backgroundURL",
        "type": "url",
        "required": true
      },
      {
        "name": "avatarURL",
        "label": "avatarURL",
        "type": "url",
        "required": true
      },
      {
        "name": "fromLevel",
        "label": "fromLevel",
        "type": "text",
        "required": true
      },
      {
        "name": "toLevel",
        "label": "toLevel",
        "type": "text",
        "required": true
      },
      {
        "name": "name",
        "label": "name",
        "type": "text",
        "required": true
      }
    ],
    "description": "Level-up notification card (returns PNG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Canvas",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/canvas/level-up"
  },
  {
    "id": "vynaa_ep_112",
    "label": "Canvas - Meme Maker",
    "category": "Canvas",
    "group": "Canvas",
    "endpoint": "/api/canvas/meme",
    "method": "POST",
    "params": [
      {
        "name": "imageUrl",
        "label": "Image URL",
        "type": "url",
        "required": true
      },
      {
        "name": "textT",
        "label": "textT",
        "type": "text",
        "required": true
      },
      {
        "name": "textB",
        "label": "textB",
        "type": "text",
        "required": false
      }
    ],
    "description": "Generate a meme image by adding top and bottom text onto any image URL (returns image).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Canvas",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/canvas/meme"
  },
  {
    "id": "vynaa_ep_113",
    "label": "Canvas - Profile",
    "category": "Canvas",
    "group": "Canvas",
    "endpoint": "/api/canvas/profile",
    "method": "GET",
    "params": [
      {
        "name": "backgroundURL",
        "label": "backgroundURL",
        "type": "url",
        "required": true
      },
      {
        "name": "avatarURL",
        "label": "avatarURL",
        "type": "url",
        "required": true
      },
      {
        "name": "rankName",
        "label": "rankName",
        "type": "text",
        "required": true
      },
      {
        "name": "rankId",
        "label": "rankId",
        "type": "text",
        "required": true
      },
      {
        "name": "exp",
        "label": "exp",
        "type": "number",
        "required": true
      },
      {
        "name": "requireExp",
        "label": "requireExp",
        "type": "text",
        "required": true
      },
      {
        "name": "level",
        "label": "level",
        "type": "number",
        "required": true
      },
      {
        "name": "name",
        "label": "name",
        "type": "text",
        "required": true
      }
    ],
    "description": "Discord-style profile / rank card (returns PNG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Canvas",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/canvas/profile"
  },
  {
    "id": "vynaa_ep_114",
    "label": "Canvas - Security",
    "category": "Canvas",
    "group": "Canvas",
    "endpoint": "/api/canvas/security",
    "method": "GET",
    "params": [
      {
        "name": "avatar",
        "label": "avatar",
        "type": "url",
        "required": true
      },
      {
        "name": "background",
        "label": "background",
        "type": "url",
        "required": true
      },
      {
        "name": "createdTimestamp",
        "label": "createdTimestamp",
        "type": "text",
        "required": true
      },
      {
        "name": "suspectTimestamp",
        "label": "suspectTimestamp",
        "type": "text",
        "required": true
      },
      {
        "name": "locale",
        "label": "locale",
        "type": "text",
        "required": false
      }
    ],
    "description": "Discord-style security warning card (returns PNG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Canvas",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/canvas/security"
  },
  {
    "id": "vynaa_ep_115",
    "label": "Canvas - Sertifikat Tolol",
    "category": "Canvas",
    "group": "Canvas",
    "endpoint": "/api/canvas/sertifikat-tolol",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a \"sertifikat tolol\" certificate image (returns PNG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Canvas",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/canvas/sertifikat-tolol"
  },
  {
    "id": "vynaa_ep_116",
    "label": "Canvas - Ship",
    "category": "Canvas",
    "group": "Canvas",
    "endpoint": "/api/canvas/ship",
    "method": "GET",
    "params": [
      {
        "name": "avatar1",
        "label": "avatar1",
        "type": "url",
        "required": true
      },
      {
        "name": "avatar2",
        "label": "avatar2",
        "type": "url",
        "required": true
      },
      {
        "name": "background",
        "label": "background",
        "type": "url",
        "required": true
      },
      {
        "name": "persen",
        "label": "persen",
        "type": "text",
        "required": true
      }
    ],
    "description": "Ship-meter card combining two avatars (returns PNG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Canvas",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/canvas/ship"
  },
  {
    "id": "vynaa_ep_117",
    "label": "Canvas - Spotify",
    "category": "Canvas",
    "group": "Canvas",
    "endpoint": "/api/canvas/spotify",
    "method": "GET",
    "params": [
      {
        "name": "title",
        "label": "title",
        "type": "text",
        "required": true
      },
      {
        "name": "artist",
        "label": "artist",
        "type": "text",
        "required": true
      },
      {
        "name": "start",
        "label": "start",
        "type": "text",
        "required": true
      },
      {
        "name": "end",
        "label": "end",
        "type": "text",
        "required": true
      },
      {
        "name": "image",
        "label": "image",
        "type": "url",
        "required": true
      },
      {
        "name": "border",
        "label": "border",
        "type": "text",
        "required": false
      }
    ],
    "description": "Generate a fake Spotify \"now playing\" card (returns PNG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Canvas",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/canvas/spotify"
  },
  {
    "id": "vynaa_ep_118",
    "label": "Canvas - Tweet",
    "category": "Canvas",
    "group": "Canvas",
    "endpoint": "/api/canvas/tweet",
    "method": "GET",
    "params": [
      {
        "name": "displayName",
        "label": "displayName",
        "type": "text",
        "required": true
      },
      {
        "name": "username",
        "label": "username",
        "type": "text",
        "required": true
      },
      {
        "name": "comment",
        "label": "comment",
        "type": "text",
        "required": true
      },
      {
        "name": "avatar",
        "label": "avatar",
        "type": "url",
        "required": true
      },
      {
        "name": "verified",
        "label": "verified",
        "type": "text",
        "required": false
      },
      {
        "name": "theme",
        "label": "theme",
        "type": "text",
        "required": false
      }
    ],
    "description": "Generate a fake Tweet card image (returns PNG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Canvas",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/canvas/tweet"
  },
  {
    "id": "vynaa_ep_119",
    "label": "Canvas - Welcome v1",
    "category": "Canvas",
    "group": "Canvas",
    "endpoint": "/api/canvas/welcomev1",
    "method": "GET",
    "params": [
      {
        "name": "username",
        "label": "username",
        "type": "text",
        "required": true
      },
      {
        "name": "guildName",
        "label": "guildName",
        "type": "text",
        "required": true
      },
      {
        "name": "guildIcon",
        "label": "guildIcon",
        "type": "text",
        "required": true
      },
      {
        "name": "memberCount",
        "label": "memberCount",
        "type": "text",
        "required": true
      },
      {
        "name": "avatar",
        "label": "avatar",
        "type": "url",
        "required": true
      },
      {
        "name": "background",
        "label": "background",
        "type": "url",
        "required": true
      },
      {
        "name": "quality",
        "label": "quality",
        "type": "text",
        "required": false
      }
    ],
    "description": "Welcome card variant 1 (returns PNG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Canvas",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/canvas/welcomev1"
  },
  {
    "id": "vynaa_ep_120",
    "label": "Canvas - Welcome v2",
    "category": "Canvas",
    "group": "Canvas",
    "endpoint": "/api/canvas/welcomev2",
    "method": "GET",
    "params": [
      {
        "name": "username",
        "label": "username",
        "type": "text",
        "required": true
      },
      {
        "name": "guildName",
        "label": "guildName",
        "type": "text",
        "required": true
      },
      {
        "name": "memberCount",
        "label": "memberCount",
        "type": "text",
        "required": true
      },
      {
        "name": "avatar",
        "label": "avatar",
        "type": "url",
        "required": true
      },
      {
        "name": "background",
        "label": "background",
        "type": "url",
        "required": true
      }
    ],
    "description": "Welcome card variant 2 (returns PNG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Canvas",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/canvas/welcomev2"
  },
  {
    "id": "vynaa_ep_121",
    "label": "Canvas - Welcome v3",
    "category": "Canvas",
    "group": "Canvas",
    "endpoint": "/api/canvas/welcomev3",
    "method": "GET",
    "params": [
      {
        "name": "username",
        "label": "username",
        "type": "text",
        "required": true
      },
      {
        "name": "avatar",
        "label": "avatar",
        "type": "url",
        "required": true
      }
    ],
    "description": "Welcome card variant 3 (minimal) (returns PNG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Canvas",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/canvas/welcomev3"
  },
  {
    "id": "vynaa_ep_122",
    "label": "Canvas - Welcome v4",
    "category": "Canvas",
    "group": "Canvas",
    "endpoint": "/api/canvas/welcomev4",
    "method": "GET",
    "params": [
      {
        "name": "avatar",
        "label": "avatar",
        "type": "url",
        "required": true
      },
      {
        "name": "background",
        "label": "background",
        "type": "url",
        "required": true
      },
      {
        "name": "description",
        "label": "description",
        "type": "text",
        "required": true
      }
    ],
    "description": "Welcome card variant 4 with custom description (returns PNG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Canvas",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/canvas/welcomev4"
  },
  {
    "id": "vynaa_ep_123",
    "label": "Canvas - XNXX",
    "category": "Canvas",
    "group": "Canvas",
    "endpoint": "/api/canvas/xnxx",
    "method": "GET",
    "params": [
      {
        "name": "title",
        "label": "title",
        "type": "text",
        "required": true
      },
      {
        "name": "image",
        "label": "image",
        "type": "url",
        "required": true
      }
    ],
    "description": "Generate a fake XNXX video thumbnail card (returns PNG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Contains restricted keyword: xnxx",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/canvas/xnxx"
  },
  {
    "id": "vynaa_ep_124",
    "label": "Cecan - China",
    "category": "Cecan",
    "group": "Cecan",
    "endpoint": "/api/cecan/china",
    "method": "GET",
    "params": [],
    "description": "Random china cecan image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Cecan",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/cecan/china"
  },
  {
    "id": "vynaa_ep_125",
    "label": "Cecan - Hijaber",
    "category": "Cecan",
    "group": "Cecan",
    "endpoint": "/api/cecan/hijaber",
    "method": "GET",
    "params": [],
    "description": "Random hijaber cecan image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Cecan",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/cecan/hijaber"
  },
  {
    "id": "vynaa_ep_126",
    "label": "Cecan - Indonesia",
    "category": "Cecan",
    "group": "Cecan",
    "endpoint": "/api/cecan/indonesia",
    "method": "GET",
    "params": [],
    "description": "Random indonesia cecan image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Cecan",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/cecan/indonesia"
  },
  {
    "id": "vynaa_ep_127",
    "label": "Cecan - Japan",
    "category": "Cecan",
    "group": "Cecan",
    "endpoint": "/api/cecan/japan",
    "method": "GET",
    "params": [],
    "description": "Random japan cecan image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Cecan",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/cecan/japan"
  },
  {
    "id": "vynaa_ep_128",
    "label": "Cecan - Jeni",
    "category": "Cecan",
    "group": "Cecan",
    "endpoint": "/api/cecan/jeni",
    "method": "GET",
    "params": [],
    "description": "Random jeni cecan image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Cecan",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/cecan/jeni"
  },
  {
    "id": "vynaa_ep_129",
    "label": "Cecan - Jiso",
    "category": "Cecan",
    "group": "Cecan",
    "endpoint": "/api/cecan/jiso",
    "method": "GET",
    "params": [],
    "description": "Random jiso cecan image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Cecan",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/cecan/jiso"
  },
  {
    "id": "vynaa_ep_130",
    "label": "Cecan - Justinaxie",
    "category": "Cecan",
    "group": "Cecan",
    "endpoint": "/api/cecan/justinaxie",
    "method": "GET",
    "params": [],
    "description": "Random justinaxie cecan image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Cecan",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/cecan/justinaxie"
  },
  {
    "id": "vynaa_ep_131",
    "label": "Cecan - Korea",
    "category": "Cecan",
    "group": "Cecan",
    "endpoint": "/api/cecan/korea",
    "method": "GET",
    "params": [],
    "description": "Random korea cecan image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Cecan",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/cecan/korea"
  },
  {
    "id": "vynaa_ep_132",
    "label": "Cecan - Malaysia",
    "category": "Cecan",
    "group": "Cecan",
    "endpoint": "/api/cecan/malaysia",
    "method": "GET",
    "params": [],
    "description": "Random malaysia cecan image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Cecan",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/cecan/malaysia"
  },
  {
    "id": "vynaa_ep_133",
    "label": "Cecan - Rose",
    "category": "Cecan",
    "group": "Cecan",
    "endpoint": "/api/cecan/rose",
    "method": "GET",
    "params": [],
    "description": "Random rose cecan image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Cecan",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/cecan/rose"
  },
  {
    "id": "vynaa_ep_134",
    "label": "Cecan - Ryujin",
    "category": "Cecan",
    "group": "Cecan",
    "endpoint": "/api/cecan/ryujin",
    "method": "GET",
    "params": [],
    "description": "Random ryujin cecan image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Cecan",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/cecan/ryujin"
  },
  {
    "id": "vynaa_ep_135",
    "label": "Cecan - Thailand",
    "category": "Cecan",
    "group": "Cecan",
    "endpoint": "/api/cecan/thailand",
    "method": "GET",
    "params": [],
    "description": "Random thailand cecan image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Cecan",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/cecan/thailand"
  },
  {
    "id": "vynaa_ep_136",
    "label": "Cecan - Vietnam",
    "category": "Cecan",
    "group": "Cecan",
    "endpoint": "/api/cecan/vietnam",
    "method": "GET",
    "params": [],
    "description": "Random vietnam cecan image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Cecan",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/cecan/vietnam"
  },
  {
    "id": "vynaa_ep_137",
    "label": "Download - Allin",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/allin",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "All-in-one social media downloader.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Download",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/allin"
  },
  {
    "id": "vynaa_ep_138",
    "label": "Download - Capcut",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/capcut",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Download a CapCut template.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Download",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/capcut"
  },
  {
    "id": "vynaa_ep_139",
    "label": "Download - Cocofun",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/cocofun",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Download a CocoFun video.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Download",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/cocofun"
  },
  {
    "id": "vynaa_ep_140",
    "label": "Download - Donghua",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/donghua",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Download a Donghua episode.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Download",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/donghua"
  },
  {
    "id": "vynaa_ep_141",
    "label": "Download - Douyin",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/douyin",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Download a Douyin video.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Download",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/douyin"
  },
  {
    "id": "vynaa_ep_142",
    "label": "Download - Douyinslide",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/douyinslide",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Download a Douyin slideshow.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Download",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/douyinslide"
  },
  {
    "id": "vynaa_ep_143",
    "label": "Download - Fbdown",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/fbdown",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Download a Facebook video (v1).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Download",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/fbdown"
  },
  {
    "id": "vynaa_ep_144",
    "label": "Download - Fbdown2",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/fbdown2",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Download a Facebook video (v2).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Download",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/fbdown2"
  },
  {
    "id": "vynaa_ep_145",
    "label": "Download - Fbdown3",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/fbdown3",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Download a Facebook video (v3).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Download",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/fbdown3"
  },
  {
    "id": "vynaa_ep_146",
    "label": "Download - Fbdown4",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/fbdown4",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Download a Facebook video (v4).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Download",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/fbdown4"
  },
  {
    "id": "vynaa_ep_147",
    "label": "Download - Gdrive",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/gdrive",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Download a public Google Drive file.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Download",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/gdrive"
  },
  {
    "id": "vynaa_ep_148",
    "label": "Download - Igdowloader",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/igdowloader",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Download an Instagram post/reel.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Download",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/igdowloader"
  },
  {
    "id": "vynaa_ep_149",
    "label": "Download - Likee",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/likee",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Download a Likee video.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Download",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/likee"
  },
  {
    "id": "vynaa_ep_150",
    "label": "Download - Pastebin",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/pastebin",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Fetch raw content from a Pastebin URL.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Download",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/pastebin"
  },
  {
    "id": "vynaa_ep_151",
    "label": "Download - Pinterest",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/pinterest",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Download a Pinterest pin (image/video).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Download",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/pinterest"
  },
  {
    "id": "vynaa_ep_152",
    "label": "Download - Rednote",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/rednote",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Download from RedNote (Xiaohongshu).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Download",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/rednote"
  },
  {
    "id": "vynaa_ep_153",
    "label": "Download - Scribd",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/scribd",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Download a Scribd document.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Download",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/scribd"
  },
  {
    "id": "vynaa_ep_154",
    "label": "Download - Sfilemobi",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/sfilemobi",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Download from sfile.mobi.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Download",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/sfilemobi"
  },
  {
    "id": "vynaa_ep_155",
    "label": "Download - Slideshare",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/slideshare",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Download a SlideShare deck.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Download",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/slideshare"
  },
  {
    "id": "vynaa_ep_156",
    "label": "Download - Snackvideo",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/snackvideo",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Download a SnackVideo video.",
    "outputType": "video",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Download",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/snackvideo"
  },
  {
    "id": "vynaa_ep_157",
    "label": "Download - Soundcloud",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/soundcloud",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Download a SoundCloud track.",
    "outputType": "audio",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Download",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/soundcloud"
  },
  {
    "id": "vynaa_ep_158",
    "label": "Download - Spotify",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/spotify",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Download a Spotify track (v1).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Download",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/spotify"
  },
  {
    "id": "vynaa_ep_159",
    "label": "Download - Spotify2",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/spotify2",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Download a Spotify track (v2).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Download",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/spotify2"
  },
  {
    "id": "vynaa_ep_160",
    "label": "Download - Storyanime",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/storyanime",
    "method": "GET",
    "params": [],
    "description": "Random anime story video.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Download",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/storyanime"
  },
  {
    "id": "vynaa_ep_161",
    "label": "Download - Telesticker",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/telesticker",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Download a Telegram sticker pack.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Download",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/telesticker"
  },
  {
    "id": "vynaa_ep_162",
    "label": "Download - Threads",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/threads",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Download a Threads post.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Download",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/threads"
  },
  {
    "id": "vynaa_ep_163",
    "label": "Download - Tiktok",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/tiktok",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Download a TikTok video (no watermark).",
    "outputType": "video",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Download",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/tiktok"
  },
  {
    "id": "vynaa_ep_164",
    "label": "Download - Tiktokslide",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/tiktokslide",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Download a TikTok slideshow.",
    "outputType": "video",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Download",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/tiktokslide"
  },
  {
    "id": "vynaa_ep_165",
    "label": "Download - Twitter",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/twitter",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Download a Twitter/X video (v1).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Download",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/twitter"
  },
  {
    "id": "vynaa_ep_166",
    "label": "Download - Twitter2",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/twitter2",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Download a Twitter/X video (v2).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Download",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/twitter2"
  },
  {
    "id": "vynaa_ep_167",
    "label": "Download - Videy",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/videy",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Download a videy.co video.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Download",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/videy"
  },
  {
    "id": "vynaa_ep_168",
    "label": "Download - Xnxxdl",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/xnxxdl",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Download an XNXX video.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Contains restricted keyword: xnxx",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/xnxxdl"
  },
  {
    "id": "vynaa_ep_169",
    "label": "Download - Xvideosdl",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/xvideosdl",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Download an Xvideos video.",
    "outputType": "video",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Contains restricted keyword: xvideos",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/xvideosdl"
  },
  {
    "id": "vynaa_ep_170",
    "label": "Download - Yt",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/yt",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Download a YouTube video/audio.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Download",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/yt"
  },
  {
    "id": "vynaa_ep_171",
    "label": "Download - YouTube Downloader v2",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/ytdlv2",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Download video/audio YouTube dengan semua pilihan kualitas tersedia (audio & video). Input langsung URL YouTube.",
    "outputType": "video",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Download",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/ytdlv2"
  },
  {
    "id": "vynaa_ep_172",
    "label": "Download - YouTube Downloader v5",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/ytdlv5",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Download video/audio YouTube — mengembalikan semua format adaptive (audio & video terpisah) plus info detail metadata.",
    "outputType": "video",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Download",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/ytdlv5"
  },
  {
    "id": "vynaa_ep_173",
    "label": "Download - YT Play (Search & MP3)",
    "category": "Download",
    "group": "Download",
    "endpoint": "/api/download/ytplay",
    "method": "GET",
    "params": [
      {
        "name": "query",
        "label": "query",
        "type": "text",
        "required": true
      }
    ],
    "description": "Cari lagu/video YouTube berdasarkan query, lalu ambil link download audio MP3/M4A-nya secara otomatis.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Download",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/download/ytplay"
  },
  {
    "id": "vynaa_ep_174",
    "label": "Emoji - Apple",
    "category": "Emoji",
    "group": "Emoji",
    "endpoint": "/api/emoji/apple",
    "method": "GET",
    "params": [
      {
        "name": "emoji",
        "label": "emoji",
        "type": "text",
        "required": true
      }
    ],
    "description": "Render an emoji in Apple style (PNG image).",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/emoji/apple"
  },
  {
    "id": "vynaa_ep_175",
    "label": "Emoji - Docomo",
    "category": "Emoji",
    "group": "Emoji",
    "endpoint": "/api/emoji/docomo",
    "method": "GET",
    "params": [
      {
        "name": "emoji",
        "label": "emoji",
        "type": "text",
        "required": true
      }
    ],
    "description": "Render an emoji in Docomo style (PNG image).",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/emoji/docomo"
  },
  {
    "id": "vynaa_ep_176",
    "label": "Emoji - Emojimix",
    "category": "Emoji",
    "group": "Emoji",
    "endpoint": "/api/emoji/emojimix",
    "method": "GET",
    "params": [
      {
        "name": "emoji1",
        "label": "emoji1",
        "type": "text",
        "required": true
      },
      {
        "name": "emoji2",
        "label": "emoji2",
        "type": "text",
        "required": true
      }
    ],
    "description": "Mix two emojis into a new combined emoji (returns JSON with image URL).",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/emoji/emojimix"
  },
  {
    "id": "vynaa_ep_177",
    "label": "Emoji - Emojipedia",
    "category": "Emoji",
    "group": "Emoji",
    "endpoint": "/api/emoji/emojipedia",
    "method": "GET",
    "params": [
      {
        "name": "emoji",
        "label": "emoji",
        "type": "text",
        "required": true
      }
    ],
    "description": "Render an emoji in Emojipedia style (PNG image).",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/emoji/emojipedia"
  },
  {
    "id": "vynaa_ep_178",
    "label": "Emoji - Facebook",
    "category": "Emoji",
    "group": "Emoji",
    "endpoint": "/api/emoji/facebook",
    "method": "GET",
    "params": [
      {
        "name": "emoji",
        "label": "emoji",
        "type": "text",
        "required": true
      }
    ],
    "description": "Render an emoji in Facebook style (PNG image).",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/emoji/facebook"
  },
  {
    "id": "vynaa_ep_179",
    "label": "Emoji - Google",
    "category": "Emoji",
    "group": "Emoji",
    "endpoint": "/api/emoji/google",
    "method": "GET",
    "params": [
      {
        "name": "emoji",
        "label": "emoji",
        "type": "text",
        "required": true
      }
    ],
    "description": "Render an emoji in Google style (PNG image).",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/emoji/google"
  },
  {
    "id": "vynaa_ep_180",
    "label": "Emoji - Htc",
    "category": "Emoji",
    "group": "Emoji",
    "endpoint": "/api/emoji/htc",
    "method": "GET",
    "params": [
      {
        "name": "emoji",
        "label": "emoji",
        "type": "text",
        "required": true
      }
    ],
    "description": "Render an emoji in Htc style (PNG image).",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/emoji/htc"
  },
  {
    "id": "vynaa_ep_181",
    "label": "Emoji - Joypixels",
    "category": "Emoji",
    "group": "Emoji",
    "endpoint": "/api/emoji/joypixels",
    "method": "GET",
    "params": [
      {
        "name": "emoji",
        "label": "emoji",
        "type": "text",
        "required": true
      }
    ],
    "description": "Render an emoji in Joypixels style (PNG image).",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/emoji/joypixels"
  },
  {
    "id": "vynaa_ep_182",
    "label": "Emoji - Kddi",
    "category": "Emoji",
    "group": "Emoji",
    "endpoint": "/api/emoji/kddi",
    "method": "GET",
    "params": [
      {
        "name": "emoji",
        "label": "emoji",
        "type": "text",
        "required": true
      }
    ],
    "description": "Render an emoji in Kddi style (PNG image).",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/emoji/kddi"
  },
  {
    "id": "vynaa_ep_183",
    "label": "Emoji - Lg",
    "category": "Emoji",
    "group": "Emoji",
    "endpoint": "/api/emoji/lg",
    "method": "GET",
    "params": [
      {
        "name": "emoji",
        "label": "emoji",
        "type": "text",
        "required": true
      }
    ],
    "description": "Render an emoji in Lg style (PNG image).",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/emoji/lg"
  },
  {
    "id": "vynaa_ep_184",
    "label": "Emoji - Microsoft",
    "category": "Emoji",
    "group": "Emoji",
    "endpoint": "/api/emoji/microsoft",
    "method": "GET",
    "params": [
      {
        "name": "emoji",
        "label": "emoji",
        "type": "text",
        "required": true
      }
    ],
    "description": "Render an emoji in Microsoft style (PNG image).",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/emoji/microsoft"
  },
  {
    "id": "vynaa_ep_185",
    "label": "Emoji - Mozilla",
    "category": "Emoji",
    "group": "Emoji",
    "endpoint": "/api/emoji/mozilla",
    "method": "GET",
    "params": [
      {
        "name": "emoji",
        "label": "emoji",
        "type": "text",
        "required": true
      }
    ],
    "description": "Render an emoji in Mozilla style (PNG image).",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/emoji/mozilla"
  },
  {
    "id": "vynaa_ep_186",
    "label": "Emoji - Openmoji",
    "category": "Emoji",
    "group": "Emoji",
    "endpoint": "/api/emoji/openmoji",
    "method": "GET",
    "params": [
      {
        "name": "emoji",
        "label": "emoji",
        "type": "text",
        "required": true
      }
    ],
    "description": "Render an emoji in Openmoji style (PNG image).",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/emoji/openmoji"
  },
  {
    "id": "vynaa_ep_187",
    "label": "Emoji - Samsung",
    "category": "Emoji",
    "group": "Emoji",
    "endpoint": "/api/emoji/samsung",
    "method": "GET",
    "params": [
      {
        "name": "emoji",
        "label": "emoji",
        "type": "text",
        "required": true
      }
    ],
    "description": "Render an emoji in Samsung style (PNG image).",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/emoji/samsung"
  },
  {
    "id": "vynaa_ep_188",
    "label": "Emoji - Skype",
    "category": "Emoji",
    "group": "Emoji",
    "endpoint": "/api/emoji/skype",
    "method": "GET",
    "params": [
      {
        "name": "emoji",
        "label": "emoji",
        "type": "text",
        "required": true
      }
    ],
    "description": "Render an emoji in Skype style (PNG image).",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/emoji/skype"
  },
  {
    "id": "vynaa_ep_189",
    "label": "Emoji - Softbank",
    "category": "Emoji",
    "group": "Emoji",
    "endpoint": "/api/emoji/softbank",
    "method": "GET",
    "params": [
      {
        "name": "emoji",
        "label": "emoji",
        "type": "text",
        "required": true
      }
    ],
    "description": "Render an emoji in Softbank style (PNG image).",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/emoji/softbank"
  },
  {
    "id": "vynaa_ep_190",
    "label": "Emoji - Twitter",
    "category": "Emoji",
    "group": "Emoji",
    "endpoint": "/api/emoji/twitter",
    "method": "GET",
    "params": [
      {
        "name": "emoji",
        "label": "emoji",
        "type": "text",
        "required": true
      }
    ],
    "description": "Render an emoji in Twitter style (PNG image).",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/emoji/twitter"
  },
  {
    "id": "vynaa_ep_191",
    "label": "Emoji - Whatsapp",
    "category": "Emoji",
    "group": "Emoji",
    "endpoint": "/api/emoji/whatsapp",
    "method": "GET",
    "params": [
      {
        "name": "emoji",
        "label": "emoji",
        "type": "text",
        "required": true
      }
    ],
    "description": "Render an emoji in Whatsapp style (PNG image).",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/emoji/whatsapp"
  },
  {
    "id": "vynaa_ep_192",
    "label": "Ephoto - Blackpink",
    "category": "Ephoto",
    "group": "Ephoto",
    "endpoint": "/api/ephoto/blackpink",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a blackpink text effect image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Ephoto",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ephoto/blackpink"
  },
  {
    "id": "vynaa_ep_193",
    "label": "Ephoto - Blackpink2",
    "category": "Ephoto",
    "group": "Ephoto",
    "endpoint": "/api/ephoto/blackpink2",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a blackpink2 text effect image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Ephoto",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ephoto/blackpink2"
  },
  {
    "id": "vynaa_ep_194",
    "label": "Ephoto - Blueneon",
    "category": "Ephoto",
    "group": "Ephoto",
    "endpoint": "/api/ephoto/blueneon",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a blueneon text effect image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Ephoto",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ephoto/blueneon"
  },
  {
    "id": "vynaa_ep_195",
    "label": "Ephoto - Cloth",
    "category": "Ephoto",
    "group": "Ephoto",
    "endpoint": "/api/ephoto/cloth",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a cloth text effect image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Ephoto",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ephoto/cloth"
  },
  {
    "id": "vynaa_ep_196",
    "label": "Ephoto - Cloud",
    "category": "Ephoto",
    "group": "Ephoto",
    "endpoint": "/api/ephoto/cloud",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a cloud text effect image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Ephoto",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ephoto/cloud"
  },
  {
    "id": "vynaa_ep_197",
    "label": "Ephoto - Coverpubg",
    "category": "Ephoto",
    "group": "Ephoto",
    "endpoint": "/api/ephoto/coverpubg",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a coverpubg text effect image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Ephoto",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ephoto/coverpubg"
  },
  {
    "id": "vynaa_ep_198",
    "label": "Ephoto - Dragonfire",
    "category": "Ephoto",
    "group": "Ephoto",
    "endpoint": "/api/ephoto/dragonfire",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a dragonfire text effect image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Ephoto",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ephoto/dragonfire"
  },
  {
    "id": "vynaa_ep_199",
    "label": "Ephoto - Eraser",
    "category": "Ephoto",
    "group": "Ephoto",
    "endpoint": "/api/ephoto/eraser",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a eraser text effect image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Ephoto",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ephoto/eraser"
  },
  {
    "id": "vynaa_ep_200",
    "label": "Ephoto - Fbgoldbutton",
    "category": "Ephoto",
    "group": "Ephoto",
    "endpoint": "/api/ephoto/fbgoldbutton",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a fbgoldbutton text effect image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Ephoto",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ephoto/fbgoldbutton"
  },
  {
    "id": "vynaa_ep_201",
    "label": "Ephoto - Fbsilverbutton",
    "category": "Ephoto",
    "group": "Ephoto",
    "endpoint": "/api/ephoto/fbsilverbutton",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a fbsilverbutton text effect image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Ephoto",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ephoto/fbsilverbutton"
  },
  {
    "id": "vynaa_ep_202",
    "label": "Ephoto - Galaxy",
    "category": "Ephoto",
    "group": "Ephoto",
    "endpoint": "/api/ephoto/galaxy",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a galaxy text effect image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Ephoto",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ephoto/galaxy"
  },
  {
    "id": "vynaa_ep_203",
    "label": "Ephoto - Glasses",
    "category": "Ephoto",
    "group": "Ephoto",
    "endpoint": "/api/ephoto/glasses",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a glasses text effect image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Ephoto",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ephoto/glasses"
  },
  {
    "id": "vynaa_ep_204",
    "label": "Ephoto - Grafitti",
    "category": "Ephoto",
    "group": "Ephoto",
    "endpoint": "/api/ephoto/grafitti",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a grafitti text effect image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Ephoto",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ephoto/grafitti"
  },
  {
    "id": "vynaa_ep_205",
    "label": "Ephoto - Greenbrush",
    "category": "Ephoto",
    "group": "Ephoto",
    "endpoint": "/api/ephoto/greenbrush",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a greenbrush text effect image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Ephoto",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ephoto/greenbrush"
  },
  {
    "id": "vynaa_ep_206",
    "label": "Ephoto - Horor",
    "category": "Ephoto",
    "group": "Ephoto",
    "endpoint": "/api/ephoto/horor",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a horor text effect image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Ephoto",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ephoto/horor"
  },
  {
    "id": "vynaa_ep_207",
    "label": "Ephoto - Iggoldbutton",
    "category": "Ephoto",
    "group": "Ephoto",
    "endpoint": "/api/ephoto/iggoldbutton",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a iggoldbutton text effect image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Ephoto",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ephoto/iggoldbutton"
  },
  {
    "id": "vynaa_ep_208",
    "label": "Ephoto - Igsilverbutton",
    "category": "Ephoto",
    "group": "Ephoto",
    "endpoint": "/api/ephoto/igsilverbutton",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a igsilverbutton text effect image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Ephoto",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ephoto/igsilverbutton"
  },
  {
    "id": "vynaa_ep_209",
    "label": "Ephoto - Incandescent",
    "category": "Ephoto",
    "group": "Ephoto",
    "endpoint": "/api/ephoto/incandescent",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a incandescent text effect image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Ephoto",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ephoto/incandescent"
  },
  {
    "id": "vynaa_ep_210",
    "label": "Ephoto - Letters",
    "category": "Ephoto",
    "group": "Ephoto",
    "endpoint": "/api/ephoto/letters",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a letters text effect image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Ephoto",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ephoto/letters"
  },
  {
    "id": "vynaa_ep_211",
    "label": "Ephoto - Nightstars",
    "category": "Ephoto",
    "group": "Ephoto",
    "endpoint": "/api/ephoto/nightstars",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a nightstars text effect image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Ephoto",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ephoto/nightstars"
  },
  {
    "id": "vynaa_ep_212",
    "label": "Ephoto - Papercut",
    "category": "Ephoto",
    "group": "Ephoto",
    "endpoint": "/api/ephoto/papercut",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a papercut text effect image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Ephoto",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ephoto/papercut"
  },
  {
    "id": "vynaa_ep_213",
    "label": "Ephoto - Pig",
    "category": "Ephoto",
    "group": "Ephoto",
    "endpoint": "/api/ephoto/pig",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a pig text effect image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Ephoto",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ephoto/pig"
  },
  {
    "id": "vynaa_ep_214",
    "label": "Ephoto - Sunlight",
    "category": "Ephoto",
    "group": "Ephoto",
    "endpoint": "/api/ephoto/sunlight",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a sunlight text effect image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Ephoto",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ephoto/sunlight"
  },
  {
    "id": "vynaa_ep_215",
    "label": "Ephoto - Televisi",
    "category": "Ephoto",
    "group": "Ephoto",
    "endpoint": "/api/ephoto/televisi",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a televisi text effect image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Ephoto",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ephoto/televisi"
  },
  {
    "id": "vynaa_ep_216",
    "label": "Ephoto - Twtgoldbutton",
    "category": "Ephoto",
    "group": "Ephoto",
    "endpoint": "/api/ephoto/twtgoldbutton",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a twtgoldbutton text effect image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Ephoto",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ephoto/twtgoldbutton"
  },
  {
    "id": "vynaa_ep_217",
    "label": "Ephoto - Twtsilverbutton",
    "category": "Ephoto",
    "group": "Ephoto",
    "endpoint": "/api/ephoto/twtsilverbutton",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a twtsilverbutton text effect image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Ephoto",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ephoto/twtsilverbutton"
  },
  {
    "id": "vynaa_ep_218",
    "label": "Ephoto - Typography",
    "category": "Ephoto",
    "group": "Ephoto",
    "endpoint": "/api/ephoto/typography",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a typography text effect image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Ephoto",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ephoto/typography"
  },
  {
    "id": "vynaa_ep_219",
    "label": "Ephoto - Typography2",
    "category": "Ephoto",
    "group": "Ephoto",
    "endpoint": "/api/ephoto/typography2",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a typography2 text effect image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Ephoto",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ephoto/typography2"
  },
  {
    "id": "vynaa_ep_220",
    "label": "Ephoto - Ytgoldbutton",
    "category": "Ephoto",
    "group": "Ephoto",
    "endpoint": "/api/ephoto/ytgoldbutton",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a ytgoldbutton text effect image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Ephoto",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ephoto/ytgoldbutton"
  },
  {
    "id": "vynaa_ep_221",
    "label": "Ephoto - Ytsilverbutton",
    "category": "Ephoto",
    "group": "Ephoto",
    "endpoint": "/api/ephoto/ytsilverbutton",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a ytsilverbutton text effect image.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Ephoto",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/ephoto/ytsilverbutton"
  },
  {
    "id": "vynaa_ep_222",
    "label": "Game - Asahotak",
    "category": "Game",
    "group": "Game",
    "endpoint": "/api/game/asahotak",
    "method": "GET",
    "params": [],
    "description": "Full dataset of Asahotak game (all questions/items at once). Cached 10 minutes.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Game",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/game/asahotak"
  },
  {
    "id": "vynaa_ep_223",
    "label": "Game - Family100",
    "category": "Game",
    "group": "Game",
    "endpoint": "/api/game/family100",
    "method": "GET",
    "params": [],
    "description": "Full dataset of Family100 game (all questions/items at once). Cached 10 minutes.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Game",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/game/family100"
  },
  {
    "id": "vynaa_ep_224",
    "label": "Game - Family100 2",
    "category": "Game",
    "group": "Game",
    "endpoint": "/api/game/family100-2",
    "method": "GET",
    "params": [],
    "description": "Full dataset of Family100 2 game (all questions/items at once). Cached 10 minutes.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Game",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/game/family100-2"
  },
  {
    "id": "vynaa_ep_225",
    "label": "Game - Kuisislami",
    "category": "Game",
    "group": "Game",
    "endpoint": "/api/game/kuisislami",
    "method": "GET",
    "params": [],
    "description": "Full dataset of Kuisislami game (all questions/items at once). Cached 10 minutes.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Game",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/game/kuisislami"
  },
  {
    "id": "vynaa_ep_226",
    "label": "Game - Kuismerdeka",
    "category": "Game",
    "group": "Game",
    "endpoint": "/api/game/kuismerdeka",
    "method": "GET",
    "params": [],
    "description": "Full dataset of Kuismerdeka game (all questions/items at once). Cached 10 minutes.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Game",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/game/kuismerdeka"
  },
  {
    "id": "vynaa_ep_227",
    "label": "Game - Math",
    "category": "Game",
    "group": "Game",
    "endpoint": "/api/game/math",
    "method": "GET",
    "params": [],
    "description": "Full dataset of Math game (all questions/items at once). Cached 10 minutes.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Game",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/game/math"
  },
  {
    "id": "vynaa_ep_228",
    "label": "Game - Siapakahaku",
    "category": "Game",
    "group": "Game",
    "endpoint": "/api/game/siapakahaku",
    "method": "GET",
    "params": [],
    "description": "Full dataset of Siapakahaku game (all questions/items at once). Cached 10 minutes.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Game",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/game/siapakahaku"
  },
  {
    "id": "vynaa_ep_229",
    "label": "Game - Susunkata",
    "category": "Game",
    "group": "Game",
    "endpoint": "/api/game/susunkata",
    "method": "GET",
    "params": [],
    "description": "Full dataset of Susunkata game (all questions/items at once). Cached 10 minutes.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Game",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/game/susunkata"
  },
  {
    "id": "vynaa_ep_230",
    "label": "Game - Tebakdrakor",
    "category": "Game",
    "group": "Game",
    "endpoint": "/api/game/tebakdrakor",
    "method": "GET",
    "params": [],
    "description": "Full dataset of Tebakdrakor game (all questions/items at once). Cached 10 minutes.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Game",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/game/tebakdrakor"
  },
  {
    "id": "vynaa_ep_231",
    "label": "Game - Tebakemoji",
    "category": "Game",
    "group": "Game",
    "endpoint": "/api/game/tebakemoji",
    "method": "GET",
    "params": [],
    "description": "Full dataset of Tebakemoji game (all questions/items at once). Cached 10 minutes.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Game",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/game/tebakemoji"
  },
  {
    "id": "vynaa_ep_232",
    "label": "Game - Tebakepep",
    "category": "Game",
    "group": "Game",
    "endpoint": "/api/game/tebakepep",
    "method": "GET",
    "params": [],
    "description": "Full dataset of Tebakepep game (all questions/items at once). Cached 10 minutes.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Game",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/game/tebakepep"
  },
  {
    "id": "vynaa_ep_233",
    "label": "Game - Tebakgambar",
    "category": "Game",
    "group": "Game",
    "endpoint": "/api/game/tebakgambar",
    "method": "GET",
    "params": [],
    "description": "Full dataset of Tebakgambar game (all questions/items at once). Cached 10 minutes.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Game",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/game/tebakgambar"
  },
  {
    "id": "vynaa_ep_234",
    "label": "Game - Tebakheroml",
    "category": "Game",
    "group": "Game",
    "endpoint": "/api/game/tebakheroml",
    "method": "GET",
    "params": [],
    "description": "Full dataset of Tebakheroml game (all questions/items at once). Cached 10 minutes.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Game",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/game/tebakheroml"
  },
  {
    "id": "vynaa_ep_235",
    "label": "Game - Tebakjkt48",
    "category": "Game",
    "group": "Game",
    "endpoint": "/api/game/tebakjkt48",
    "method": "GET",
    "params": [],
    "description": "Full dataset of Tebakjkt48 game (all questions/items at once). Cached 10 minutes.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Game",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/game/tebakjkt48"
  },
  {
    "id": "vynaa_ep_236",
    "label": "Game - Tebakkabupaten",
    "category": "Game",
    "group": "Game",
    "endpoint": "/api/game/tebakkabupaten",
    "method": "GET",
    "params": [],
    "description": "Full dataset of Tebakkabupaten game (all questions/items at once). Cached 10 minutes.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Game",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/game/tebakkabupaten"
  },
  {
    "id": "vynaa_ep_237",
    "label": "Game - Tebakkata",
    "category": "Game",
    "group": "Game",
    "endpoint": "/api/game/tebakkata",
    "method": "GET",
    "params": [],
    "description": "Full dataset of Tebakkata game (all questions/items at once). Cached 10 minutes.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Game",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/game/tebakkata"
  },
  {
    "id": "vynaa_ep_238",
    "label": "Game - Tebakkode",
    "category": "Game",
    "group": "Game",
    "endpoint": "/api/game/tebakkode",
    "method": "GET",
    "params": [],
    "description": "Full dataset of Tebakkode game (all questions/items at once). Cached 10 minutes.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Game",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/game/tebakkode"
  },
  {
    "id": "vynaa_ep_239",
    "label": "Game - Tebaklagu",
    "category": "Game",
    "group": "Game",
    "endpoint": "/api/game/tebaklagu",
    "method": "GET",
    "params": [],
    "description": "Full dataset of Tebaklagu game (all questions/items at once). Cached 10 minutes.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Game",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/game/tebaklagu"
  },
  {
    "id": "vynaa_ep_240",
    "label": "Game - Tebakmakanan",
    "category": "Game",
    "group": "Game",
    "endpoint": "/api/game/tebakmakanan",
    "method": "GET",
    "params": [],
    "description": "Full dataset of Tebakmakanan game (all questions/items at once). Cached 10 minutes.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Game",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/game/tebakmakanan"
  },
  {
    "id": "vynaa_ep_241",
    "label": "Game - Tebaknamatokoh",
    "category": "Game",
    "group": "Game",
    "endpoint": "/api/game/tebaknamatokoh",
    "method": "GET",
    "params": [],
    "description": "Full dataset of Tebaknamatokoh game (all questions/items at once). Cached 10 minutes.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Game",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/game/tebaknamatokoh"
  },
  {
    "id": "vynaa_ep_242",
    "label": "Game - Tebakpemainbola",
    "category": "Game",
    "group": "Game",
    "endpoint": "/api/game/tebakpemainbola",
    "method": "GET",
    "params": [],
    "description": "Full dataset of Tebakpemainbola game (all questions/items at once). Cached 10 minutes.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Game",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/game/tebakpemainbola"
  },
  {
    "id": "vynaa_ep_243",
    "label": "Game - Tebakpokemon",
    "category": "Game",
    "group": "Game",
    "endpoint": "/api/game/tebakpokemon",
    "method": "GET",
    "params": [],
    "description": "Full dataset of Tebakpokemon game (all questions/items at once). Cached 10 minutes.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Game",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/game/tebakpokemon"
  },
  {
    "id": "vynaa_ep_244",
    "label": "Game - Tebakpop",
    "category": "Game",
    "group": "Game",
    "endpoint": "/api/game/tebakpop",
    "method": "GET",
    "params": [],
    "description": "Full dataset of Tebakpop game (all questions/items at once). Cached 10 minutes.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Game",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/game/tebakpop"
  },
  {
    "id": "vynaa_ep_245",
    "label": "Game - Tebakpresiden",
    "category": "Game",
    "group": "Game",
    "endpoint": "/api/game/tebakpresiden",
    "method": "GET",
    "params": [],
    "description": "Full dataset of Tebakpresiden game (all questions/items at once). Cached 10 minutes.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Game",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/game/tebakpresiden"
  },
  {
    "id": "vynaa_ep_246",
    "label": "Game - Tebakwallet",
    "category": "Game",
    "group": "Game",
    "endpoint": "/api/game/tebakwallet",
    "method": "GET",
    "params": [],
    "description": "Full dataset of Tebakwallet game (all questions/items at once). Cached 10 minutes.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Game",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/game/tebakwallet"
  },
  {
    "id": "vynaa_ep_247",
    "label": "Game - Tekateki",
    "category": "Game",
    "group": "Game",
    "endpoint": "/api/game/tekateki",
    "method": "GET",
    "params": [],
    "description": "Full dataset of Tekateki game (all questions/items at once). Cached 10 minutes.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Game",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/game/tekateki"
  },
  {
    "id": "vynaa_ep_248",
    "label": "Information - BMKG",
    "category": "Information",
    "group": "Information",
    "endpoint": "/api/info/bmkg",
    "method": "GET",
    "params": [],
    "description": "Latest earthquake info from BMKG Indonesia.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Information",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/info/bmkg"
  },
  {
    "id": "vynaa_ep_249",
    "label": "Islamic - Asmaul Husna",
    "category": "Islamic",
    "group": "Islamic",
    "endpoint": "/api/islamic/asmaulhusna",
    "method": "GET",
    "params": [],
    "description": "Get Asmaul Husna list.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/islamic/asmaulhusna"
  },
  {
    "id": "vynaa_ep_250",
    "label": "Islamic - Bacaan Shalat",
    "category": "Islamic",
    "group": "Islamic",
    "endpoint": "/api/islamic/bacaanshalat",
    "method": "GET",
    "params": [],
    "description": "Bacaan dalam shalat.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/islamic/bacaanshalat"
  },
  {
    "id": "vynaa_ep_251",
    "label": "Islamic - Doa Harian",
    "category": "Islamic",
    "group": "Islamic",
    "endpoint": "/api/islamic/doaharian",
    "method": "GET",
    "params": [],
    "description": "Get daily prayers (doa harian).",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/islamic/doaharian"
  },
  {
    "id": "vynaa_ep_252",
    "label": "Islamic - Kisah Nabi",
    "category": "Islamic",
    "group": "Islamic",
    "endpoint": "/api/islamic/kisahnabi",
    "method": "GET",
    "params": [
      {
        "name": "nabi",
        "label": "nabi",
        "type": "text",
        "required": true
      }
    ],
    "description": "Get a prophet story by name.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/islamic/kisahnabi"
  },
  {
    "id": "vynaa_ep_253",
    "label": "Islamic - Kisah Nabi (List)",
    "category": "Islamic",
    "group": "Islamic",
    "endpoint": "/api/islamic/kisahnabi2",
    "method": "GET",
    "params": [],
    "description": "List of prophet stories.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/islamic/kisahnabi2"
  },
  {
    "id": "vynaa_ep_254",
    "label": "Islamic - Niat Ashar",
    "category": "Islamic",
    "group": "Islamic",
    "endpoint": "/api/islamic/niatashar",
    "method": "GET",
    "params": [],
    "description": "Niat shalat ashar.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/islamic/niatashar"
  },
  {
    "id": "vynaa_ep_255",
    "label": "Islamic - Niat Dzuhur",
    "category": "Islamic",
    "group": "Islamic",
    "endpoint": "/api/islamic/niatdzuhur",
    "method": "GET",
    "params": [],
    "description": "Niat shalat dzuhur.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/islamic/niatdzuhur"
  },
  {
    "id": "vynaa_ep_256",
    "label": "Islamic - Niat Isya",
    "category": "Islamic",
    "group": "Islamic",
    "endpoint": "/api/islamic/niatisya",
    "method": "GET",
    "params": [],
    "description": "Niat shalat isya.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/islamic/niatisya"
  },
  {
    "id": "vynaa_ep_257",
    "label": "Islamic - Niat Maghrib",
    "category": "Islamic",
    "group": "Islamic",
    "endpoint": "/api/islamic/niatmaghrib",
    "method": "GET",
    "params": [],
    "description": "Niat shalat maghrib.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/islamic/niatmaghrib"
  },
  {
    "id": "vynaa_ep_258",
    "label": "Islamic - Niat Shubuh",
    "category": "Islamic",
    "group": "Islamic",
    "endpoint": "/api/islamic/niatshubuh",
    "method": "GET",
    "params": [],
    "description": "Niat shalat shubuh.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/islamic/niatshubuh"
  },
  {
    "id": "vynaa_ep_259",
    "label": "Islamic - Surah",
    "category": "Islamic",
    "group": "Islamic",
    "endpoint": "/api/islamic/surah",
    "method": "GET",
    "params": [
      {
        "name": "no",
        "label": "no",
        "type": "number",
        "required": true
      }
    ],
    "description": "Get a Quran surah by number.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/islamic/surah"
  },
  {
    "id": "vynaa_ep_260",
    "label": "Islamic - Tafsir Surah",
    "category": "Islamic",
    "group": "Islamic",
    "endpoint": "/api/islamic/tafsirsurah",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Get tafsir of a surah by name/keyword.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/islamic/tafsirsurah"
  },
  {
    "id": "vynaa_ep_261",
    "label": "Islamic - Tahlil",
    "category": "Islamic",
    "group": "Islamic",
    "endpoint": "/api/islamic/tahlil",
    "method": "GET",
    "params": [],
    "description": "Get tahlil readings.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/islamic/tahlil"
  },
  {
    "id": "vynaa_ep_262",
    "label": "Islamic - Wirid",
    "category": "Islamic",
    "group": "Islamic",
    "endpoint": "/api/islamic/wirid",
    "method": "GET",
    "params": [],
    "description": "Get wirid readings.",
    "outputType": "json",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/islamic/wirid"
  },
  {
    "id": "vynaa_ep_263",
    "label": "Maker - ATTP",
    "category": "Maker",
    "group": "Maker",
    "endpoint": "/api/maker/attp",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Animated text-to-picture sticker (GIF).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Maker",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/maker/attp"
  },
  {
    "id": "vynaa_ep_264",
    "label": "Maker - Brat Video",
    "category": "Maker",
    "group": "Maker",
    "endpoint": "/api/maker/brat-video",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Brat-style animated text video (MP4).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Maker",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/maker/brat-video"
  },
  {
    "id": "vynaa_ep_265",
    "label": "Maker - Brat",
    "category": "Maker",
    "group": "Maker",
    "endpoint": "/api/maker/brat",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Brat-style text image (PNG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Maker",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/maker/brat"
  },
  {
    "id": "vynaa_ep_266",
    "label": "Maker - Carbon",
    "category": "Maker",
    "group": "Maker",
    "endpoint": "/api/maker/carbon",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a Carbon code snippet image (JSON).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Maker",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/maker/carbon"
  },
  {
    "id": "vynaa_ep_267",
    "label": "Maker - Generate Lirik",
    "category": "Maker",
    "group": "Maker",
    "endpoint": "/api/maker/generateLirik",
    "method": "GET",
    "params": [
      {
        "name": "prompt",
        "label": "prompt",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate song lyrics from a prompt (JSON).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Maker",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/maker/generateLirik"
  },
  {
    "id": "vynaa_ep_268",
    "label": "Maker - IQC",
    "category": "Maker",
    "group": "Maker",
    "endpoint": "/api/maker/iqc",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "IQC text generator (JSON).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Maker",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/maker/iqc"
  },
  {
    "id": "vynaa_ep_269",
    "label": "Maker - Jadi Anime",
    "category": "Maker",
    "group": "Maker",
    "endpoint": "/api/maker/jadianime",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Convert a photo to anime style.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Maker",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/maker/jadianime"
  },
  {
    "id": "vynaa_ep_270",
    "label": "Maker - Jadi Anime 3D",
    "category": "Maker",
    "group": "Maker",
    "endpoint": "/api/maker/jadianime3d",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Convert a photo to 3D anime style.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Maker",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/maker/jadianime3d"
  },
  {
    "id": "vynaa_ep_271",
    "label": "Maker - Jadi Cartoon",
    "category": "Maker",
    "group": "Maker",
    "endpoint": "/api/maker/jadicartoon",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Convert a photo to cartoon style.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Maker",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/maker/jadicartoon"
  },
  {
    "id": "vynaa_ep_272",
    "label": "Maker - Jadi Comic Book",
    "category": "Maker",
    "group": "Maker",
    "endpoint": "/api/maker/jadicomicbook",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Convert a photo to comic book style.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Maker",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/maker/jadicomicbook"
  },
  {
    "id": "vynaa_ep_273",
    "label": "Maker - Jadi Cyberpunk",
    "category": "Maker",
    "group": "Maker",
    "endpoint": "/api/maker/jadicyberpunk",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Convert a photo to cyberpunk style.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Maker",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/maker/jadicyberpunk"
  },
  {
    "id": "vynaa_ep_274",
    "label": "Maker - Jadi Disney",
    "category": "Maker",
    "group": "Maker",
    "endpoint": "/api/maker/jadidisney",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Convert a photo to Disney style.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Maker",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/maker/jadidisney"
  },
  {
    "id": "vynaa_ep_275",
    "label": "Maker - Jadi Ghibli",
    "category": "Maker",
    "group": "Maker",
    "endpoint": "/api/maker/jadighibili",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Convert a photo to Studio Ghibli style.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Maker",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/maker/jadighibili"
  },
  {
    "id": "vynaa_ep_276",
    "label": "Maker - Jadi GTA",
    "category": "Maker",
    "group": "Maker",
    "endpoint": "/api/maker/jadigta",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Convert a photo to GTA art style.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Maker",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/maker/jadigta"
  },
  {
    "id": "vynaa_ep_277",
    "label": "Maker - Jadi Hijab",
    "category": "Maker",
    "group": "Maker",
    "endpoint": "/api/maker/jadihijab",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Add a hijab to a photo.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Maker",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/maker/jadihijab"
  },
  {
    "id": "vynaa_ep_278",
    "label": "Maker - Jadi Hitam",
    "category": "Maker",
    "group": "Maker",
    "endpoint": "/api/maker/jadihitam",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Make a photo darker-skinned style.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Maker",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/maker/jadihitam"
  },
  {
    "id": "vynaa_ep_279",
    "label": "Maker - Jadi Pixar",
    "category": "Maker",
    "group": "Maker",
    "endpoint": "/api/maker/jadipixar",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Convert a photo to Pixar style.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Maker",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/maker/jadipixar"
  },
  {
    "id": "vynaa_ep_280",
    "label": "Maker - Jadi Pixel Art",
    "category": "Maker",
    "group": "Maker",
    "endpoint": "/api/maker/jadipixelart",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Convert a photo to pixel-art style.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Maker",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/maker/jadipixelart"
  },
  {
    "id": "vynaa_ep_281",
    "label": "Maker - Jadi Putih",
    "category": "Maker",
    "group": "Maker",
    "endpoint": "/api/maker/jadiputih",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Make a photo lighter-skinned style.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Maker",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/maker/jadiputih"
  },
  {
    "id": "vynaa_ep_282",
    "label": "Maker - Jadi SDM Tinggi",
    "category": "Maker",
    "group": "Maker",
    "endpoint": "/api/maker/jadisdmtinggi",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Convert a photo to \"high SDM\" style.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Maker",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/maker/jadisdmtinggi"
  },
  {
    "id": "vynaa_ep_283",
    "label": "Maker - Jadi Van Gogh",
    "category": "Maker",
    "group": "Maker",
    "endpoint": "/api/maker/jadivangogh",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Convert a photo to Van Gogh painting style.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Maker",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/maker/jadivangogh"
  },
  {
    "id": "vynaa_ep_284",
    "label": "Maker - Jadi Zombie",
    "category": "Maker",
    "group": "Maker",
    "endpoint": "/api/maker/jadizombie",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Convert a photo to zombie style.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Maker",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/maker/jadizombie"
  },
  {
    "id": "vynaa_ep_285",
    "label": "Maker - Quotes Video",
    "category": "Maker",
    "group": "Maker",
    "endpoint": "/api/maker/quotesvideo",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      },
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Overlay quotes text on a video.",
    "outputType": "video",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Maker",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/maker/quotesvideo"
  },
  {
    "id": "vynaa_ep_286",
    "label": "Maker - Text to Image",
    "category": "Maker",
    "group": "Maker",
    "endpoint": "/api/maker/text2img",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate an image from a text prompt.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Maker",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/maker/text2img"
  },
  {
    "id": "vynaa_ep_287",
    "label": "Maker - Textpro",
    "category": "Maker",
    "group": "Maker",
    "endpoint": "/api/maker/textpro",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      },
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      },
      {
        "name": "text2",
        "label": "text2",
        "type": "text",
        "required": false
      }
    ],
    "description": "Generate text-effect image from textpro.me effect URL.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Maker",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/maker/textpro"
  },
  {
    "id": "vynaa_ep_288",
    "label": "Maker - To Figure",
    "category": "Maker",
    "group": "Maker",
    "endpoint": "/api/maker/tofigure",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Turn a photo into a collectible figure (v1).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Maker",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/maker/tofigure"
  },
  {
    "id": "vynaa_ep_289",
    "label": "Maker - To Figure v2",
    "category": "Maker",
    "group": "Maker",
    "endpoint": "/api/maker/tofigurev2",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Turn a photo into a collectible figure (v2).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Maker",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/maker/tofigurev2"
  },
  {
    "id": "vynaa_ep_290",
    "label": "Maker - To Figure v3",
    "category": "Maker",
    "group": "Maker",
    "endpoint": "/api/maker/tofigurev3",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Turn a photo into a collectible figure (v3).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Maker",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/maker/tofigurev3"
  },
  {
    "id": "vynaa_ep_291",
    "label": "Maker - TTP",
    "category": "Maker",
    "group": "Maker",
    "endpoint": "/api/maker/ttp",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Text-to-picture sticker (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Maker",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/maker/ttp"
  },
  {
    "id": "vynaa_ep_292",
    "label": "News - CNBC",
    "category": "News",
    "group": "News",
    "endpoint": "/api/news/cnbc",
    "method": "GET",
    "params": [],
    "description": "Latest headlines from CNBC (JSON).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: News",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/news/cnbc"
  },
  {
    "id": "vynaa_ep_293",
    "label": "News - CNN",
    "category": "News",
    "group": "News",
    "endpoint": "/api/news/cnn",
    "method": "GET",
    "params": [],
    "description": "Latest headlines from CNN (JSON).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: News",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/news/cnn"
  },
  {
    "id": "vynaa_ep_294",
    "label": "News - Daily",
    "category": "News",
    "group": "News",
    "endpoint": "/api/news/daily",
    "method": "GET",
    "params": [],
    "description": "Latest headlines from Daily (JSON).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: News",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/news/daily"
  },
  {
    "id": "vynaa_ep_295",
    "label": "News - Detik",
    "category": "News",
    "group": "News",
    "endpoint": "/api/news/detik",
    "method": "GET",
    "params": [],
    "description": "Latest headlines from Detik (JSON).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: News",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/news/detik"
  },
  {
    "id": "vynaa_ep_296",
    "label": "News - Indozone",
    "category": "News",
    "group": "News",
    "endpoint": "/api/news/indozone",
    "method": "GET",
    "params": [],
    "description": "Latest headlines from Indozone (JSON).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: News",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/news/indozone"
  },
  {
    "id": "vynaa_ep_297",
    "label": "News - iNews",
    "category": "News",
    "group": "News",
    "endpoint": "/api/news/inews",
    "method": "GET",
    "params": [],
    "description": "Latest headlines from iNews (JSON).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: News",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/news/inews"
  },
  {
    "id": "vynaa_ep_298",
    "label": "News - Kompas",
    "category": "News",
    "group": "News",
    "endpoint": "/api/news/kompas",
    "method": "GET",
    "params": [],
    "description": "Latest headlines from Kompas (JSON).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: News",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/news/kompas"
  },
  {
    "id": "vynaa_ep_299",
    "label": "News - Kontan",
    "category": "News",
    "group": "News",
    "endpoint": "/api/news/kontan",
    "method": "GET",
    "params": [],
    "description": "Latest headlines from Kontan (JSON).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: News",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/news/kontan"
  },
  {
    "id": "vynaa_ep_300",
    "label": "News - Koran Fajar",
    "category": "News",
    "group": "News",
    "endpoint": "/api/news/koranfajar",
    "method": "GET",
    "params": [],
    "description": "Latest headlines from Koran Fajar (JSON).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: News",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/news/koranfajar"
  },
  {
    "id": "vynaa_ep_301",
    "label": "News - Tribun",
    "category": "News",
    "group": "News",
    "endpoint": "/api/news/tribun",
    "method": "GET",
    "params": [],
    "description": "Latest headlines from Tribun (JSON).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: News",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/news/tribun"
  },
  {
    "id": "vynaa_ep_302",
    "label": "NSFW - Ahegao",
    "category": "Nsfw",
    "group": "Nsfw",
    "endpoint": "/api/nsfw/ahegao",
    "method": "GET",
    "params": [],
    "description": "Random NSFW ahegao image (18+).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Nsfw",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/nsfw/ahegao"
  },
  {
    "id": "vynaa_ep_303",
    "label": "NSFW - Ass",
    "category": "Nsfw",
    "group": "Nsfw",
    "endpoint": "/api/nsfw/ass",
    "method": "GET",
    "params": [],
    "description": "Random NSFW ass image (18+).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Nsfw",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/nsfw/ass"
  },
  {
    "id": "vynaa_ep_304",
    "label": "NSFW - Bdsm",
    "category": "Nsfw",
    "group": "Nsfw",
    "endpoint": "/api/nsfw/bdsm",
    "method": "GET",
    "params": [],
    "description": "Random NSFW bdsm image (18+).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Nsfw",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/nsfw/bdsm"
  },
  {
    "id": "vynaa_ep_305",
    "label": "NSFW - Blowjob",
    "category": "Nsfw",
    "group": "Nsfw",
    "endpoint": "/api/nsfw/blowjob",
    "method": "GET",
    "params": [],
    "description": "Random NSFW blowjob image (18+).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Nsfw",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/nsfw/blowjob"
  },
  {
    "id": "vynaa_ep_306",
    "label": "NSFW - Cuckold",
    "category": "Nsfw",
    "group": "Nsfw",
    "endpoint": "/api/nsfw/cuckold",
    "method": "GET",
    "params": [],
    "description": "Random NSFW cuckold image (18+).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Nsfw",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/nsfw/cuckold"
  },
  {
    "id": "vynaa_ep_307",
    "label": "NSFW - Cum",
    "category": "Nsfw",
    "group": "Nsfw",
    "endpoint": "/api/nsfw/cum",
    "method": "GET",
    "params": [],
    "description": "Random NSFW cum image (18+).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Nsfw",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/nsfw/cum"
  },
  {
    "id": "vynaa_ep_308",
    "label": "NSFW - Ero",
    "category": "Nsfw",
    "group": "Nsfw",
    "endpoint": "/api/nsfw/ero",
    "method": "GET",
    "params": [],
    "description": "Random NSFW ero image (18+).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Nsfw",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/nsfw/ero"
  },
  {
    "id": "vynaa_ep_309",
    "label": "NSFW - Femdom",
    "category": "Nsfw",
    "group": "Nsfw",
    "endpoint": "/api/nsfw/femdom",
    "method": "GET",
    "params": [],
    "description": "Random NSFW femdom image (18+).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Nsfw",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/nsfw/femdom"
  },
  {
    "id": "vynaa_ep_310",
    "label": "NSFW - Foot",
    "category": "Nsfw",
    "group": "Nsfw",
    "endpoint": "/api/nsfw/foot",
    "method": "GET",
    "params": [],
    "description": "Random NSFW foot image (18+).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Nsfw",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/nsfw/foot"
  },
  {
    "id": "vynaa_ep_311",
    "label": "NSFW - Gangbang",
    "category": "Nsfw",
    "group": "Nsfw",
    "endpoint": "/api/nsfw/gangbang",
    "method": "GET",
    "params": [],
    "description": "Random NSFW gangbang image (18+).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Nsfw",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/nsfw/gangbang"
  },
  {
    "id": "vynaa_ep_312",
    "label": "NSFW - Gay",
    "category": "Nsfw",
    "group": "Nsfw",
    "endpoint": "/api/nsfw/gay",
    "method": "GET",
    "params": [],
    "description": "Random NSFW gay image (18+).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Nsfw",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/nsfw/gay"
  },
  {
    "id": "vynaa_ep_313",
    "label": "NSFW - Gifs",
    "category": "Nsfw",
    "group": "Nsfw",
    "endpoint": "/api/nsfw/gifs",
    "method": "GET",
    "params": [],
    "description": "Random NSFW gifs image (18+).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Nsfw",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/nsfw/gifs"
  },
  {
    "id": "vynaa_ep_314",
    "label": "NSFW - Glasses",
    "category": "Nsfw",
    "group": "Nsfw",
    "endpoint": "/api/nsfw/glasses",
    "method": "GET",
    "params": [],
    "description": "Random NSFW glasses image (18+).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Nsfw",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/nsfw/glasses"
  },
  {
    "id": "vynaa_ep_315",
    "label": "NSFW - Hentai",
    "category": "Nsfw",
    "group": "Nsfw",
    "endpoint": "/api/nsfw/hentai",
    "method": "GET",
    "params": [],
    "description": "Random NSFW hentai image (18+).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Nsfw",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/nsfw/hentai"
  },
  {
    "id": "vynaa_ep_316",
    "label": "NSFW - Jahy",
    "category": "Nsfw",
    "group": "Nsfw",
    "endpoint": "/api/nsfw/jahy",
    "method": "GET",
    "params": [],
    "description": "Random NSFW jahy image (18+).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Nsfw",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/nsfw/jahy"
  },
  {
    "id": "vynaa_ep_317",
    "label": "NSFW - Manga",
    "category": "Nsfw",
    "group": "Nsfw",
    "endpoint": "/api/nsfw/manga",
    "method": "GET",
    "params": [],
    "description": "Random NSFW manga image (18+).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Nsfw",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/nsfw/manga"
  },
  {
    "id": "vynaa_ep_318",
    "label": "NSFW - Masturbation",
    "category": "Nsfw",
    "group": "Nsfw",
    "endpoint": "/api/nsfw/masturbation",
    "method": "GET",
    "params": [],
    "description": "Random NSFW masturbation image (18+).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Nsfw",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/nsfw/masturbation"
  },
  {
    "id": "vynaa_ep_319",
    "label": "NSFW - Neko",
    "category": "Nsfw",
    "group": "Nsfw",
    "endpoint": "/api/nsfw/neko",
    "method": "GET",
    "params": [],
    "description": "Random NSFW neko image (18+).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Nsfw",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/nsfw/neko"
  },
  {
    "id": "vynaa_ep_320",
    "label": "NSFW - Neko2",
    "category": "Nsfw",
    "group": "Nsfw",
    "endpoint": "/api/nsfw/neko2",
    "method": "GET",
    "params": [],
    "description": "Random NSFW neko2 image (18+).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Nsfw",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/nsfw/neko2"
  },
  {
    "id": "vynaa_ep_321",
    "label": "NSFW - Orgy",
    "category": "Nsfw",
    "group": "Nsfw",
    "endpoint": "/api/nsfw/orgy",
    "method": "GET",
    "params": [],
    "description": "Random NSFW orgy image (18+).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Nsfw",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/nsfw/orgy"
  },
  {
    "id": "vynaa_ep_322",
    "label": "NSFW - Panties",
    "category": "Nsfw",
    "group": "Nsfw",
    "endpoint": "/api/nsfw/panties",
    "method": "GET",
    "params": [],
    "description": "Random NSFW panties image (18+).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Nsfw",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/nsfw/panties"
  },
  {
    "id": "vynaa_ep_323",
    "label": "NSFW - Pussy",
    "category": "Nsfw",
    "group": "Nsfw",
    "endpoint": "/api/nsfw/pussy",
    "method": "GET",
    "params": [],
    "description": "Random NSFW pussy image (18+).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Nsfw",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/nsfw/pussy"
  },
  {
    "id": "vynaa_ep_324",
    "label": "NSFW - Tentacles",
    "category": "Nsfw",
    "group": "Nsfw",
    "endpoint": "/api/nsfw/tentacles",
    "method": "GET",
    "params": [],
    "description": "Random NSFW tentacles image (18+).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Nsfw",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/nsfw/tentacles"
  },
  {
    "id": "vynaa_ep_325",
    "label": "NSFW - Thighs",
    "category": "Nsfw",
    "group": "Nsfw",
    "endpoint": "/api/nsfw/thighs",
    "method": "GET",
    "params": [],
    "description": "Random NSFW thighs image (18+).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Nsfw",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/nsfw/thighs"
  },
  {
    "id": "vynaa_ep_326",
    "label": "NSFW - Yuri",
    "category": "Nsfw",
    "group": "Nsfw",
    "endpoint": "/api/nsfw/yuri",
    "method": "GET",
    "params": [],
    "description": "Random NSFW yuri image (18+).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Nsfw",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/nsfw/yuri"
  },
  {
    "id": "vynaa_ep_327",
    "label": "NSFW - Zettai",
    "category": "Nsfw",
    "group": "Nsfw",
    "endpoint": "/api/nsfw/zettai",
    "method": "GET",
    "params": [],
    "description": "Random NSFW zettai image (18+).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Nsfw",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/nsfw/zettai"
  },
  {
    "id": "vynaa_ep_328",
    "label": "Photooxy - 3d Summer",
    "category": "Photooxy",
    "group": "Photooxy",
    "endpoint": "/api/photooxy/3d-summer",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a 3d Summer text effect image.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Photooxy",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/photooxy/3d-summer"
  },
  {
    "id": "vynaa_ep_329",
    "label": "Photooxy - Bevel Text",
    "category": "Photooxy",
    "group": "Photooxy",
    "endpoint": "/api/photooxy/bevel-text",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a Bevel Text text effect image.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Photooxy",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/photooxy/bevel-text"
  },
  {
    "id": "vynaa_ep_330",
    "label": "Photooxy - Burn Paper",
    "category": "Photooxy",
    "group": "Photooxy",
    "endpoint": "/api/photooxy/burn-paper",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a Burn Paper text effect image.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Photooxy",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/photooxy/burn-paper"
  },
  {
    "id": "vynaa_ep_331",
    "label": "Photooxy - Butterfly",
    "category": "Photooxy",
    "group": "Photooxy",
    "endpoint": "/api/photooxy/butterfly",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      },
      {
        "name": "text2",
        "label": "text2",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a Butterfly text effect image.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Photooxy",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/photooxy/butterfly"
  },
  {
    "id": "vynaa_ep_332",
    "label": "Photooxy - Carved Wood",
    "category": "Photooxy",
    "group": "Photooxy",
    "endpoint": "/api/photooxy/carved-wood",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a Carved Wood text effect image.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Photooxy",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/photooxy/carved-wood"
  },
  {
    "id": "vynaa_ep_333",
    "label": "Photooxy - Coffe Cup",
    "category": "Photooxy",
    "group": "Photooxy",
    "endpoint": "/api/photooxy/coffe-cup",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a Coffe Cup text effect image.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Photooxy",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/photooxy/coffe-cup"
  },
  {
    "id": "vynaa_ep_334",
    "label": "Photooxy - Flaming",
    "category": "Photooxy",
    "group": "Photooxy",
    "endpoint": "/api/photooxy/flaming",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a Flaming text effect image.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Photooxy",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/photooxy/flaming"
  },
  {
    "id": "vynaa_ep_335",
    "label": "Photooxy - Flower Typography",
    "category": "Photooxy",
    "group": "Photooxy",
    "endpoint": "/api/photooxy/flower-typography",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a Flower Typography text effect image.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Photooxy",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/photooxy/flower-typography"
  },
  {
    "id": "vynaa_ep_336",
    "label": "Photooxy - Harry Potter",
    "category": "Photooxy",
    "group": "Photooxy",
    "endpoint": "/api/photooxy/harry-potter",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a Harry Potter text effect image.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Photooxy",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/photooxy/harry-potter"
  },
  {
    "id": "vynaa_ep_337",
    "label": "Photooxy - Hello Kitty",
    "category": "Photooxy",
    "group": "Photooxy",
    "endpoint": "/api/photooxy/hello-kitty",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a Hello Kitty text effect image.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Photooxy",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/photooxy/hello-kitty"
  },
  {
    "id": "vynaa_ep_338",
    "label": "Photooxy - Luxury",
    "category": "Photooxy",
    "group": "Photooxy",
    "endpoint": "/api/photooxy/luxury",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a Luxury text effect image.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Photooxy",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/photooxy/luxury"
  },
  {
    "id": "vynaa_ep_339",
    "label": "Photooxy - Metallic",
    "category": "Photooxy",
    "group": "Photooxy",
    "endpoint": "/api/photooxy/metallic",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a Metallic text effect image.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Photooxy",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/photooxy/metallic"
  },
  {
    "id": "vynaa_ep_340",
    "label": "Photooxy - Metallic2",
    "category": "Photooxy",
    "group": "Photooxy",
    "endpoint": "/api/photooxy/metallic2",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a Metallic2 text effect image.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Photooxy",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/photooxy/metallic2"
  },
  {
    "id": "vynaa_ep_341",
    "label": "Photooxy - Naruto",
    "category": "Photooxy",
    "group": "Photooxy",
    "endpoint": "/api/photooxy/naruto",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a Naruto text effect image.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Photooxy",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/photooxy/naruto"
  },
  {
    "id": "vynaa_ep_342",
    "label": "Photooxy - Night Sky",
    "category": "Photooxy",
    "group": "Photooxy",
    "endpoint": "/api/photooxy/night-sky",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a Night Sky text effect image.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Photooxy",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/photooxy/night-sky"
  },
  {
    "id": "vynaa_ep_343",
    "label": "Photooxy - Picture Of Love",
    "category": "Photooxy",
    "group": "Photooxy",
    "endpoint": "/api/photooxy/picture-of-love",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a Picture Of Love text effect image.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Photooxy",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/photooxy/picture-of-love"
  },
  {
    "id": "vynaa_ep_344",
    "label": "Photooxy - Pubg",
    "category": "Photooxy",
    "group": "Photooxy",
    "endpoint": "/api/photooxy/pubg",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      },
      {
        "name": "text2",
        "label": "text2",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a Pubg text effect image.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Photooxy",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/photooxy/pubg"
  },
  {
    "id": "vynaa_ep_345",
    "label": "Photooxy - Shadow Sky",
    "category": "Photooxy",
    "group": "Photooxy",
    "endpoint": "/api/photooxy/shadow-sky",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a Shadow Sky text effect image.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Photooxy",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/photooxy/shadow-sky"
  },
  {
    "id": "vynaa_ep_346",
    "label": "Photooxy - Smoke",
    "category": "Photooxy",
    "group": "Photooxy",
    "endpoint": "/api/photooxy/smoke",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a Smoke text effect image.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Photooxy",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/photooxy/smoke"
  },
  {
    "id": "vynaa_ep_347",
    "label": "Photooxy - Sweet Candy",
    "category": "Photooxy",
    "group": "Photooxy",
    "endpoint": "/api/photooxy/sweet-candy",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a Sweet Candy text effect image.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Photooxy",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/photooxy/sweet-candy"
  },
  {
    "id": "vynaa_ep_348",
    "label": "Photooxy - Typography",
    "category": "Photooxy",
    "group": "Photooxy",
    "endpoint": "/api/photooxy/typography",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a Typography text effect image.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Photooxy",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/photooxy/typography"
  },
  {
    "id": "vynaa_ep_349",
    "label": "Photooxy - Under Grass",
    "category": "Photooxy",
    "group": "Photooxy",
    "endpoint": "/api/photooxy/under-grass",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a Under Grass text effect image.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Photooxy",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/photooxy/under-grass"
  },
  {
    "id": "vynaa_ep_350",
    "label": "Photooxy - Underwater",
    "category": "Photooxy",
    "group": "Photooxy",
    "endpoint": "/api/photooxy/underwater",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a Underwater text effect image.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Photooxy",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/photooxy/underwater"
  },
  {
    "id": "vynaa_ep_351",
    "label": "Photooxy - Wolf Metal",
    "category": "Photooxy",
    "group": "Photooxy",
    "endpoint": "/api/photooxy/wolf-metal",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate a Wolf Metal text effect image.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Photooxy",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/photooxy/wolf-metal"
  },
  {
    "id": "vynaa_ep_352",
    "label": "Primbon - Arah Rejeki",
    "category": "Primbon",
    "group": "Primbon",
    "endpoint": "/api/primbon/arahrejeki",
    "method": "GET",
    "params": [
      {
        "name": "tanggal",
        "label": "tanggal",
        "type": "number",
        "required": true
      },
      {
        "name": "bulan",
        "label": "bulan",
        "type": "number",
        "required": true
      },
      {
        "name": "tahun",
        "label": "tahun",
        "type": "number",
        "required": true
      }
    ],
    "description": "Petunjuk arah rejeki yang baik berdasarkan tanggal lahir.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Primbon",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/primbon/arahrejeki"
  },
  {
    "id": "vynaa_ep_353",
    "label": "Primbon - Arti Mimpi",
    "category": "Primbon",
    "group": "Primbon",
    "endpoint": "/api/primbon/artimimpi",
    "method": "GET",
    "params": [
      {
        "name": "mimpi",
        "label": "mimpi",
        "type": "text",
        "required": true
      }
    ],
    "description": "Tafsir/arti mimpi berdasarkan kata kunci mimpi.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Primbon",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/primbon/artimimpi"
  },
  {
    "id": "vynaa_ep_354",
    "label": "Primbon - Arti Nama",
    "category": "Primbon",
    "group": "Primbon",
    "endpoint": "/api/primbon/artinama",
    "method": "GET",
    "params": [
      {
        "name": "nama",
        "label": "nama",
        "type": "text",
        "required": true
      }
    ],
    "description": "Numerologi arti dan makna sebuah nama menurut primbon Jawa.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Primbon",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/primbon/artinama"
  },
  {
    "id": "vynaa_ep_355",
    "label": "Primbon - Arti Tarot",
    "category": "Primbon",
    "group": "Primbon",
    "endpoint": "/api/primbon/artitarot",
    "method": "GET",
    "params": [
      {
        "name": "tanggal",
        "label": "tanggal",
        "type": "number",
        "required": true
      },
      {
        "name": "bulan",
        "label": "bulan",
        "type": "number",
        "required": true
      },
      {
        "name": "tahun",
        "label": "tahun",
        "type": "number",
        "required": true
      }
    ],
    "description": "Tafsir kartu tarot berdasarkan tanggal lahir.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Primbon",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/primbon/artitarot"
  },
  {
    "id": "vynaa_ep_356",
    "label": "Primbon - Cek Penyakit",
    "category": "Primbon",
    "group": "Primbon",
    "endpoint": "/api/primbon/cekpenyakit",
    "method": "GET",
    "params": [
      {
        "name": "tanggal",
        "label": "tanggal",
        "type": "number",
        "required": true
      },
      {
        "name": "bulan",
        "label": "bulan",
        "type": "number",
        "required": true
      },
      {
        "name": "tahun",
        "label": "tahun",
        "type": "number",
        "required": true
      }
    ],
    "description": "Ramalan jenis penyakit berdasarkan tanggal lahir menurut primbon.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Primbon",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/primbon/cekpenyakit"
  },
  {
    "id": "vynaa_ep_357",
    "label": "Primbon - Hari Baik",
    "category": "Primbon",
    "group": "Primbon",
    "endpoint": "/api/primbon/haribaik",
    "method": "GET",
    "params": [
      {
        "name": "tanggal",
        "label": "tanggal",
        "type": "number",
        "required": true
      },
      {
        "name": "bulan",
        "label": "bulan",
        "type": "number",
        "required": true
      },
      {
        "name": "tahun",
        "label": "tahun",
        "type": "number",
        "required": true
      }
    ],
    "description": "Cek hari baik untuk hajat tertentu berdasarkan tanggal lahir.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Primbon",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/primbon/haribaik"
  },
  {
    "id": "vynaa_ep_358",
    "label": "Primbon - Hari Naas",
    "category": "Primbon",
    "group": "Primbon",
    "endpoint": "/api/primbon/harinaas",
    "method": "GET",
    "params": [
      {
        "name": "tanggal",
        "label": "tanggal",
        "type": "number",
        "required": true
      },
      {
        "name": "bulan",
        "label": "bulan",
        "type": "number",
        "required": true
      },
      {
        "name": "tahun",
        "label": "tahun",
        "type": "number",
        "required": true
      }
    ],
    "description": "Cek hari naas (sial) berdasarkan tanggal lahir.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Primbon",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/primbon/harinaas"
  },
  {
    "id": "vynaa_ep_359",
    "label": "Primbon - Hari Sangar",
    "category": "Primbon",
    "group": "Primbon",
    "endpoint": "/api/primbon/harisangar",
    "method": "GET",
    "params": [
      {
        "name": "tanggal",
        "label": "tanggal",
        "type": "number",
        "required": true
      },
      {
        "name": "bulan",
        "label": "bulan",
        "type": "number",
        "required": true
      },
      {
        "name": "tahun",
        "label": "tahun",
        "type": "number",
        "required": true
      }
    ],
    "description": "Cek hari sangar (hari pantangan) berdasarkan tanggal lahir.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Primbon",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/primbon/harisangar"
  },
  {
    "id": "vynaa_ep_360",
    "label": "Primbon - Kecocokan Nama",
    "category": "Primbon",
    "group": "Primbon",
    "endpoint": "/api/primbon/kecocokannama",
    "method": "GET",
    "params": [
      {
        "name": "nama",
        "label": "nama",
        "type": "text",
        "required": true
      },
      {
        "name": "tanggal",
        "label": "tanggal",
        "type": "number",
        "required": true
      },
      {
        "name": "bulan",
        "label": "bulan",
        "type": "number",
        "required": true
      },
      {
        "name": "tahun",
        "label": "tahun",
        "type": "number",
        "required": true
      }
    ],
    "description": "Cek keselarasan nama dengan tanggal lahir.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Primbon",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/primbon/kecocokannama"
  },
  {
    "id": "vynaa_ep_361",
    "label": "Primbon - Kecocokan Pasangan",
    "category": "Primbon",
    "group": "Primbon",
    "endpoint": "/api/primbon/kecocokanpasangan",
    "method": "GET",
    "params": [
      {
        "name": "cowo",
        "label": "cowo",
        "type": "text",
        "required": true
      },
      {
        "name": "cewe",
        "label": "cewe",
        "type": "text",
        "required": true
      }
    ],
    "description": "Cek kecocokan pasangan berdasarkan nama cowok dan cewek.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Primbon",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/primbon/kecocokanpasangan"
  },
  {
    "id": "vynaa_ep_362",
    "label": "Primbon - Memancing Ikan",
    "category": "Primbon",
    "group": "Primbon",
    "endpoint": "/api/primbon/memancingikan",
    "method": "GET",
    "params": [
      {
        "name": "tanggal",
        "label": "tanggal",
        "type": "number",
        "required": true
      },
      {
        "name": "bulan",
        "label": "bulan",
        "type": "number",
        "required": true
      },
      {
        "name": "tahun",
        "label": "tahun",
        "type": "number",
        "required": true
      }
    ],
    "description": "Ramalan hari/waktu baik untuk memancing ikan berdasarkan tanggal.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Primbon",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/primbon/memancingikan"
  },
  {
    "id": "vynaa_ep_363",
    "label": "Primbon - Naga Hari",
    "category": "Primbon",
    "group": "Primbon",
    "endpoint": "/api/primbon/nagahari",
    "method": "GET",
    "params": [
      {
        "name": "tanggal",
        "label": "tanggal",
        "type": "number",
        "required": true
      },
      {
        "name": "bulan",
        "label": "bulan",
        "type": "number",
        "required": true
      },
      {
        "name": "tahun",
        "label": "tahun",
        "type": "number",
        "required": true
      }
    ],
    "description": "Posisi naga hari berdasarkan tanggal lahir.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Primbon",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/primbon/nagahari"
  },
  {
    "id": "vynaa_ep_364",
    "label": "Primbon - Nomor Hoki",
    "category": "Primbon",
    "group": "Primbon",
    "endpoint": "/api/primbon/nomerhoki",
    "method": "GET",
    "params": [
      {
        "name": "nomer",
        "label": "nomer",
        "type": "text",
        "required": true
      }
    ],
    "description": "Cek keberuntungan/hoki nomor handphone berdasarkan numerologi.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Primbon",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/primbon/nomerhoki"
  },
  {
    "id": "vynaa_ep_365",
    "label": "Primbon - Pekerjaan Weton Lahir",
    "category": "Primbon",
    "group": "Primbon",
    "endpoint": "/api/primbon/pekerjaanwetonlahir",
    "method": "GET",
    "params": [
      {
        "name": "tanggal",
        "label": "tanggal",
        "type": "number",
        "required": true
      },
      {
        "name": "bulan",
        "label": "bulan",
        "type": "number",
        "required": true
      },
      {
        "name": "tahun",
        "label": "tahun",
        "type": "number",
        "required": true
      }
    ],
    "description": "Ramalan jenis pekerjaan yang cocok berdasarkan weton kelahiran.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Primbon",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/primbon/pekerjaanwetonlahir"
  },
  {
    "id": "vynaa_ep_366",
    "label": "Primbon - Potensi Keberuntungan",
    "category": "Primbon",
    "group": "Primbon",
    "endpoint": "/api/primbon/potensikeberuntungan",
    "method": "GET",
    "params": [
      {
        "name": "nama",
        "label": "nama",
        "type": "text",
        "required": true
      },
      {
        "name": "tanggal",
        "label": "tanggal",
        "type": "number",
        "required": true
      },
      {
        "name": "bulan",
        "label": "bulan",
        "type": "number",
        "required": true
      },
      {
        "name": "tahun",
        "label": "tahun",
        "type": "number",
        "required": true
      }
    ],
    "description": "Potensi keberuntungan berdasarkan nama dan tanggal lahir.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Primbon",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/primbon/potensikeberuntungan"
  },
  {
    "id": "vynaa_ep_367",
    "label": "Primbon - Ramalan Cinta",
    "category": "Primbon",
    "group": "Primbon",
    "endpoint": "/api/primbon/ramalancinta",
    "method": "GET",
    "params": [
      {
        "name": "nama1",
        "label": "nama1",
        "type": "text",
        "required": true
      },
      {
        "name": "tanggal1",
        "label": "tanggal1",
        "type": "text",
        "required": true
      },
      {
        "name": "bulan1",
        "label": "bulan1",
        "type": "text",
        "required": true
      },
      {
        "name": "tahun1",
        "label": "tahun1",
        "type": "text",
        "required": true
      },
      {
        "name": "nama2",
        "label": "nama2",
        "type": "text",
        "required": true
      },
      {
        "name": "tanggal2",
        "label": "tanggal2",
        "type": "text",
        "required": true
      },
      {
        "name": "bulan2",
        "label": "bulan2",
        "type": "text",
        "required": true
      },
      {
        "name": "tahun2",
        "label": "tahun2",
        "type": "text",
        "required": true
      }
    ],
    "description": "Ramalan hubungan cinta dua orang berdasarkan nama dan tanggal lahir.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Primbon",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/primbon/ramalancinta"
  },
  {
    "id": "vynaa_ep_368",
    "label": "Primbon - Ramalan Jodoh",
    "category": "Primbon",
    "group": "Primbon",
    "endpoint": "/api/primbon/ramalanjodoh",
    "method": "GET",
    "params": [
      {
        "name": "nama1",
        "label": "nama1",
        "type": "text",
        "required": true
      },
      {
        "name": "tanggal1",
        "label": "tanggal1",
        "type": "text",
        "required": true
      },
      {
        "name": "bulan1",
        "label": "bulan1",
        "type": "text",
        "required": true
      },
      {
        "name": "tahun1",
        "label": "tahun1",
        "type": "text",
        "required": true
      },
      {
        "name": "nama2",
        "label": "nama2",
        "type": "text",
        "required": true
      },
      {
        "name": "tanggal2",
        "label": "tanggal2",
        "type": "text",
        "required": true
      },
      {
        "name": "bulan2",
        "label": "bulan2",
        "type": "text",
        "required": true
      },
      {
        "name": "tahun2",
        "label": "tahun2",
        "type": "text",
        "required": true
      }
    ],
    "description": "Ramalan kecocokan jodoh dua orang berdasarkan nama dan tanggal lahir.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Primbon",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/primbon/ramalanjodoh"
  },
  {
    "id": "vynaa_ep_369",
    "label": "Primbon - Ramalan Keberuntungan",
    "category": "Primbon",
    "group": "Primbon",
    "endpoint": "/api/primbon/ramalankeberuntungan",
    "method": "GET",
    "params": [
      {
        "name": "tanggal",
        "label": "tanggal",
        "type": "number",
        "required": true
      },
      {
        "name": "bulan",
        "label": "bulan",
        "type": "number",
        "required": true
      },
      {
        "name": "tahun",
        "label": "tahun",
        "type": "number",
        "required": true
      }
    ],
    "description": "Ramalan tingkat keberuntungan berdasarkan tanggal lahir.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Primbon",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/primbon/ramalankeberuntungan"
  },
  {
    "id": "vynaa_ep_370",
    "label": "Primbon - Ramalan Nasib",
    "category": "Primbon",
    "group": "Primbon",
    "endpoint": "/api/primbon/ramalannasib",
    "method": "GET",
    "params": [
      {
        "name": "tanggal",
        "label": "tanggal",
        "type": "number",
        "required": true
      },
      {
        "name": "bulan",
        "label": "bulan",
        "type": "number",
        "required": true
      },
      {
        "name": "tahun",
        "label": "tahun",
        "type": "number",
        "required": true
      }
    ],
    "description": "Ramalan nasib seseorang berdasarkan tanggal lahir.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Primbon",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/primbon/ramalannasib"
  },
  {
    "id": "vynaa_ep_371",
    "label": "Primbon - Rejeki Weton",
    "category": "Primbon",
    "group": "Primbon",
    "endpoint": "/api/primbon/rejekiweton",
    "method": "GET",
    "params": [
      {
        "name": "tanggal",
        "label": "tanggal",
        "type": "number",
        "required": true
      },
      {
        "name": "bulan",
        "label": "bulan",
        "type": "number",
        "required": true
      },
      {
        "name": "tahun",
        "label": "tahun",
        "type": "number",
        "required": true
      }
    ],
    "description": "Ramalan rejeki berdasarkan weton (hari lahir Jawa).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Primbon",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/primbon/rejekiweton"
  },
  {
    "id": "vynaa_ep_372",
    "label": "Primbon - Shio",
    "category": "Primbon",
    "group": "Primbon",
    "endpoint": "/api/primbon/shio",
    "method": "GET",
    "params": [
      {
        "name": "shio",
        "label": "shio",
        "type": "text",
        "required": true
      },
      {
        "name": "tanggal",
        "label": "tanggal",
        "type": "number",
        "required": true
      },
      {
        "name": "bulan",
        "label": "bulan",
        "type": "number",
        "required": true
      },
      {
        "name": "tahun",
        "label": "tahun",
        "type": "number",
        "required": true
      }
    ],
    "description": "Arti shio (zodiak Tionghoa) berdasarkan nama shio dan tanggal lahir.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Primbon",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/primbon/shio"
  },
  {
    "id": "vynaa_ep_373",
    "label": "Primbon - Sifat & Karakter",
    "category": "Primbon",
    "group": "Primbon",
    "endpoint": "/api/primbon/sifatkarakter",
    "method": "GET",
    "params": [
      {
        "name": "nama",
        "label": "nama",
        "type": "text",
        "required": true
      },
      {
        "name": "tanggal",
        "label": "tanggal",
        "type": "number",
        "required": true
      },
      {
        "name": "bulan",
        "label": "bulan",
        "type": "number",
        "required": true
      },
      {
        "name": "tahun",
        "label": "tahun",
        "type": "number",
        "required": true
      }
    ],
    "description": "Analisis sifat dan karakter berdasarkan nama dan tanggal lahir.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Primbon",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/primbon/sifatkarakter"
  },
  {
    "id": "vynaa_ep_374",
    "label": "Primbon - Ramalan Suami Istri",
    "category": "Primbon",
    "group": "Primbon",
    "endpoint": "/api/primbon/suamiistri",
    "method": "GET",
    "params": [
      {
        "name": "nama1",
        "label": "nama1",
        "type": "text",
        "required": true
      },
      {
        "name": "tanggal1",
        "label": "tanggal1",
        "type": "text",
        "required": true
      },
      {
        "name": "bulan1",
        "label": "bulan1",
        "type": "text",
        "required": true
      },
      {
        "name": "tahun1",
        "label": "tahun1",
        "type": "text",
        "required": true
      },
      {
        "name": "nama2",
        "label": "nama2",
        "type": "text",
        "required": true
      },
      {
        "name": "tanggal2",
        "label": "tanggal2",
        "type": "text",
        "required": true
      },
      {
        "name": "bulan2",
        "label": "bulan2",
        "type": "text",
        "required": true
      },
      {
        "name": "tahun2",
        "label": "tahun2",
        "type": "text",
        "required": true
      }
    ],
    "description": "Ramalan kehidupan suami istri berdasarkan data dua pasangan.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Primbon",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/primbon/suamiistri"
  },
  {
    "id": "vynaa_ep_375",
    "label": "Primbon - Tanggal Jadian / Pernikahan",
    "category": "Primbon",
    "group": "Primbon",
    "endpoint": "/api/primbon/tanggaljadianpernikahan",
    "method": "GET",
    "params": [
      {
        "name": "tanggal",
        "label": "tanggal",
        "type": "number",
        "required": true
      },
      {
        "name": "bulan",
        "label": "bulan",
        "type": "number",
        "required": true
      },
      {
        "name": "tahun",
        "label": "tahun",
        "type": "number",
        "required": true
      }
    ],
    "description": "Ramalan tanggal jadian atau pernikahan berdasarkan tanggal yang dipilih.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Primbon",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/primbon/tanggaljadianpernikahan"
  },
  {
    "id": "vynaa_ep_376",
    "label": "Primbon - Weton Jawa",
    "category": "Primbon",
    "group": "Primbon",
    "endpoint": "/api/primbon/wetonjawa",
    "method": "GET",
    "params": [
      {
        "name": "tanggal",
        "label": "tanggal",
        "type": "number",
        "required": true
      },
      {
        "name": "bulan",
        "label": "bulan",
        "type": "number",
        "required": true
      },
      {
        "name": "tahun",
        "label": "tahun",
        "type": "number",
        "required": true
      }
    ],
    "description": "Hitung weton Jawa: neptu, watak hari, naga hari, jam baik, dan watak kelahiran.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Primbon",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/primbon/wetonjawa"
  },
  {
    "id": "vynaa_ep_377",
    "label": "Random - Pepatah Aceh",
    "category": "Random",
    "group": "Random",
    "endpoint": "/api/random/aceh",
    "method": "GET",
    "params": [],
    "description": "pepatah/kata mutiara dalam bahasa Aceh.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Random",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/random/aceh"
  },
  {
    "id": "vynaa_ep_378",
    "label": "Random - Kata Bacot",
    "category": "Random",
    "group": "Random",
    "endpoint": "/api/random/bacot",
    "method": "GET",
    "params": [],
    "description": "kata-kata bacotan random.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Random",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/random/bacot"
  },
  {
    "id": "vynaa_ep_379",
    "label": "Random - Pepatah Batak",
    "category": "Random",
    "group": "Random",
    "endpoint": "/api/random/batak",
    "method": "GET",
    "params": [],
    "description": "pepatah dalam bahasa Batak.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Random",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/random/batak"
  },
  {
    "id": "vynaa_ep_380",
    "label": "Random - Kata Bijak",
    "category": "Random",
    "group": "Random",
    "endpoint": "/api/random/bijak",
    "method": "GET",
    "params": [],
    "description": "kata bijak / quote inspiratif.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Random",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/random/bijak"
  },
  {
    "id": "vynaa_ep_381",
    "label": "Random - Pepatah Bugis",
    "category": "Random",
    "group": "Random",
    "endpoint": "/api/random/bugis",
    "method": "GET",
    "params": [],
    "description": "pepatah dalam bahasa Bugis.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Random",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/random/bugis"
  },
  {
    "id": "vynaa_ep_382",
    "label": "Random - Tebakan Cak Lontong",
    "category": "Random",
    "group": "Random",
    "endpoint": "/api/random/caklontong",
    "method": "GET",
    "params": [],
    "description": "tebak-tebakan ala Cak Lontong (lengkap dengan jawaban & detail).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Random",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/random/caklontong"
  },
  {
    "id": "vynaa_ep_383",
    "label": "Random - Kata Bijak China",
    "category": "Random",
    "group": "Random",
    "endpoint": "/api/random/china",
    "method": "GET",
    "params": [],
    "description": "kata bijak dari budaya China.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Random",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/random/china"
  },
  {
    "id": "vynaa_ep_384",
    "label": "Random - Dare",
    "category": "Random",
    "group": "Random",
    "endpoint": "/api/random/dare",
    "method": "GET",
    "params": [],
    "description": "tantangan untuk permainan Truth or Dare (dare).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Random",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/random/dare"
  },
  {
    "id": "vynaa_ep_385",
    "label": "Random - Fakta Unik",
    "category": "Random",
    "group": "Random",
    "endpoint": "/api/random/fakta",
    "method": "GET",
    "params": [],
    "description": "fakta unik dan menarik.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Random",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/random/fakta"
  },
  {
    "id": "vynaa_ep_386",
    "label": "Random - Kata Fiersa Besari",
    "category": "Random",
    "group": "Random",
    "endpoint": "/api/random/fiersa",
    "method": "GET",
    "params": [],
    "description": "quote dari Fiersa Besari.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Random",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/random/fiersa"
  },
  {
    "id": "vynaa_ep_387",
    "label": "Random - Kata Bucin",
    "category": "Random",
    "group": "Random",
    "endpoint": "/api/random/katabucin",
    "method": "GET",
    "params": [],
    "description": "kata-kata bucin (budak cinta).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Random",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/random/katabucin"
  },
  {
    "id": "vynaa_ep_388",
    "label": "Random - Kata Dilan",
    "category": "Random",
    "group": "Random",
    "endpoint": "/api/random/katadilan",
    "method": "GET",
    "params": [],
    "description": "kata-kata khas Dilan.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Random",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/random/katadilan"
  },
  {
    "id": "vynaa_ep_389",
    "label": "Random - Kata Ilham",
    "category": "Random",
    "group": "Random",
    "endpoint": "/api/random/katailham",
    "method": "GET",
    "params": [],
    "description": "kata-kata yang memberi ilham/inspirasi.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Random",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/random/katailham"
  },
  {
    "id": "vynaa_ep_390",
    "label": "Random - Kata Senja",
    "category": "Random",
    "group": "Random",
    "endpoint": "/api/random/katasenja",
    "method": "GET",
    "params": [],
    "description": "kata-kata bertema senja.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Random",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/random/katasenja"
  },
  {
    "id": "vynaa_ep_391",
    "label": "Random - Pepatah Madura",
    "category": "Random",
    "group": "Random",
    "endpoint": "/api/random/madura",
    "method": "GET",
    "params": [],
    "description": "pepatah dalam bahasa Madura.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Random",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/random/madura"
  },
  {
    "id": "vynaa_ep_392",
    "label": "Random - Pepatah Melayu",
    "category": "Random",
    "group": "Random",
    "endpoint": "/api/random/melayu",
    "method": "GET",
    "params": [],
    "description": "pepatah dalam bahasa Melayu.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Random",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/random/melayu"
  },
  {
    "id": "vynaa_ep_393",
    "label": "Random - Pepatah Minangkabau",
    "category": "Random",
    "group": "Random",
    "endpoint": "/api/random/minangkabau",
    "method": "GET",
    "params": [],
    "description": "pepatah dalam bahasa Minangkabau.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Random",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/random/minangkabau"
  },
  {
    "id": "vynaa_ep_394",
    "label": "Random - Kata Motivasi",
    "category": "Random",
    "group": "Random",
    "endpoint": "/api/random/motivasi",
    "method": "GET",
    "params": [],
    "description": "kata-kata motivasi.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Random",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/random/motivasi"
  },
  {
    "id": "vynaa_ep_395",
    "label": "Random - Kata Ngawur",
    "category": "Random",
    "group": "Random",
    "endpoint": "/api/random/ngawur",
    "method": "GET",
    "params": [],
    "description": "kata-kata ngawur / nyeleneh.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Random",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/random/ngawur"
  },
  {
    "id": "vynaa_ep_396",
    "label": "Random - Kata Nyindir",
    "category": "Random",
    "group": "Random",
    "endpoint": "/api/random/nyindir",
    "method": "GET",
    "params": [],
    "description": "kata-kata sindiran.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Random",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/random/nyindir"
  },
  {
    "id": "vynaa_ep_397",
    "label": "Random - Quotes",
    "category": "Random",
    "group": "Random",
    "endpoint": "/api/random/quotes",
    "method": "GET",
    "params": [],
    "description": "quotes umum dari berbagai tokoh.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Random",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/random/quotes"
  },
  {
    "id": "vynaa_ep_398",
    "label": "Random - Quotes Anime",
    "category": "Random",
    "group": "Random",
    "endpoint": "/api/random/quotesanime",
    "method": "GET",
    "params": [],
    "description": "quotes dari berbagai anime.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Random",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/random/quotesanime"
  },
  {
    "id": "vynaa_ep_399",
    "label": "Random - Quotes Jawa",
    "category": "Random",
    "group": "Random",
    "endpoint": "/api/random/quotesjawa",
    "method": "GET",
    "params": [],
    "description": "quotes dalam bahasa Jawa.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Random",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/random/quotesjawa"
  },
  {
    "id": "vynaa_ep_400",
    "label": "Random - Pepatah Sunda",
    "category": "Random",
    "group": "Random",
    "endpoint": "/api/random/sunda",
    "method": "GET",
    "params": [],
    "description": "pepatah dalam bahasa Sunda.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Random",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/random/sunda"
  },
  {
    "id": "vynaa_ep_401",
    "label": "Random - Tau Gasih",
    "category": "Random",
    "group": "Random",
    "endpoint": "/api/random/taugasih",
    "method": "GET",
    "params": [],
    "description": "kata-kata tau gasih / receh.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Random",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/random/taugasih"
  },
  {
    "id": "vynaa_ep_402",
    "label": "Random - Truth",
    "category": "Random",
    "group": "Random",
    "endpoint": "/api/random/truth",
    "method": "GET",
    "params": [],
    "description": "pertanyaan untuk permainan Truth or Dare (truth).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Random",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/random/truth"
  },
  {
    "id": "vynaa_ep_403",
    "label": "Search - Age Detect",
    "category": "Search",
    "group": "Search",
    "endpoint": "/api/search/agedetect",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Deteksi umur dari URL gambar wajah.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Search",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/search/agedetect"
  },
  {
    "id": "vynaa_ep_404",
    "label": "Search - Bard AI",
    "category": "Search",
    "group": "Search",
    "endpoint": "/api/search/bard-ai",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Chat dengan Google Bard.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Search",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/search/bard-ai"
  },
  {
    "id": "vynaa_ep_405",
    "label": "Search - Bard (Audio Q&A)",
    "category": "Search",
    "group": "Search",
    "endpoint": "/api/search/bard-audio",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      },
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Tanya Bard tentang sebuah audio.",
    "outputType": "audio",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Search",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/search/bard-audio"
  },
  {
    "id": "vynaa_ep_406",
    "label": "Search - Bard (Image Q&A)",
    "category": "Search",
    "group": "Search",
    "endpoint": "/api/search/bard-img",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      },
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Tanya Bard tentang sebuah gambar.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Search",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/search/bard-img"
  },
  {
    "id": "vynaa_ep_407",
    "label": "Search - Bard (Video Q&A)",
    "category": "Search",
    "group": "Search",
    "endpoint": "/api/search/bard-video",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      },
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Tanya Bard tentang sebuah video.",
    "outputType": "video",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Search",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/search/bard-video"
  },
  {
    "id": "vynaa_ep_408",
    "label": "Search - Bing Chat",
    "category": "Search",
    "group": "Search",
    "endpoint": "/api/search/bing-chat",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Chat dengan Bing AI.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Search",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/search/bing-chat"
  },
  {
    "id": "vynaa_ep_409",
    "label": "Search - Bing Image",
    "category": "Search",
    "group": "Search",
    "endpoint": "/api/search/bing-img",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Cari gambar via Bing Image.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Search",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/search/bing-img"
  },
  {
    "id": "vynaa_ep_410",
    "label": "Search - Blackbox Chat",
    "category": "Search",
    "group": "Search",
    "endpoint": "/api/search/blackbox-chat",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Chat dengan Blackbox AI (cocok untuk coding).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Search",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/search/blackbox-chat"
  },
  {
    "id": "vynaa_ep_411",
    "label": "Search - Character AI",
    "category": "Search",
    "group": "Search",
    "endpoint": "/api/search/c-ai",
    "method": "GET",
    "params": [
      {
        "name": "prompt",
        "label": "prompt",
        "type": "text",
        "required": true
      },
      {
        "name": "char",
        "label": "char",
        "type": "text",
        "required": true
      }
    ],
    "description": "Chat dengan karakter di Character AI.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Search",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/search/c-ai"
  },
  {
    "id": "vynaa_ep_412",
    "label": "Search - Chord Lagu",
    "category": "Search",
    "group": "Search",
    "endpoint": "/api/search/chord",
    "method": "GET",
    "params": [
      {
        "name": "song",
        "label": "song",
        "type": "text",
        "required": true
      }
    ],
    "description": "Cari chord lagu berdasarkan judul.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Search",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/search/chord"
  },
  {
    "id": "vynaa_ep_413",
    "label": "Search - Gempa Terkini",
    "category": "Search",
    "group": "Search",
    "endpoint": "/api/search/gempa",
    "method": "GET",
    "params": [],
    "description": "Info gempa terkini dari BMKG.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Search",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/search/gempa"
  },
  {
    "id": "vynaa_ep_414",
    "label": "Search - Google Web",
    "category": "Search",
    "group": "Search",
    "endpoint": "/api/search/google",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Cari hasil web Google.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Search",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/search/google"
  },
  {
    "id": "vynaa_ep_415",
    "label": "Search - Google Image",
    "category": "Search",
    "group": "Search",
    "endpoint": "/api/search/googleimage",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Cari gambar via Google Images.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Search",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/search/googleimage"
  },
  {
    "id": "vynaa_ep_416",
    "label": "Search - GPT",
    "category": "Search",
    "group": "Search",
    "endpoint": "/api/search/gpt",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Chat dengan model GPT.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Search",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/search/gpt"
  },
  {
    "id": "vynaa_ep_417",
    "label": "Search - HappyMod",
    "category": "Search",
    "group": "Search",
    "endpoint": "/api/search/happymod",
    "method": "GET",
    "params": [
      {
        "name": "query",
        "label": "query",
        "type": "text",
        "required": true
      }
    ],
    "description": "Cari aplikasi/game mod di HappyMod.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Search",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/search/happymod"
  },
  {
    "id": "vynaa_ep_418",
    "label": "Search - Hero Mobile Legends",
    "category": "Search",
    "group": "Search",
    "endpoint": "/api/search/heroml",
    "method": "GET",
    "params": [
      {
        "name": "hero",
        "label": "hero",
        "type": "text",
        "required": true
      }
    ],
    "description": "Cari info hero Mobile Legends.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Search",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/search/heroml"
  },
  {
    "id": "vynaa_ep_419",
    "label": "Search - Jarak Kota",
    "category": "Search",
    "group": "Search",
    "endpoint": "/api/search/jarak",
    "method": "GET",
    "params": [
      {
        "name": "from",
        "label": "from",
        "type": "text",
        "required": true
      },
      {
        "name": "to",
        "label": "to",
        "type": "text",
        "required": true
      }
    ],
    "description": "Hitung jarak antar dua kota.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Search",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/search/jarak"
  },
  {
    "id": "vynaa_ep_420",
    "label": "Search - KBBI",
    "category": "Search",
    "group": "Search",
    "endpoint": "/api/search/kbbi",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Cari arti kata di Kamus Besar Bahasa Indonesia.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Search",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/search/kbbi"
  },
  {
    "id": "vynaa_ep_421",
    "label": "Search - Kode Pos",
    "category": "Search",
    "group": "Search",
    "endpoint": "/api/search/kodepos",
    "method": "GET",
    "params": [
      {
        "name": "query",
        "label": "query",
        "type": "text",
        "required": true
      }
    ],
    "description": "Cari kode pos berdasarkan nama wilayah.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Search",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/search/kodepos"
  },
  {
    "id": "vynaa_ep_422",
    "label": "Search - Lepton AI",
    "category": "Search",
    "group": "Search",
    "endpoint": "/api/search/lepton-ai",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Chat with Lepton AI.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Search",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/search/lepton-ai"
  },
  {
    "id": "vynaa_ep_423",
    "label": "Search - Link Group WA",
    "category": "Search",
    "group": "Search",
    "endpoint": "/api/search/linkgroupwa",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Cari link grup WhatsApp.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Search",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/search/linkgroupwa"
  },
  {
    "id": "vynaa_ep_424",
    "label": "Search - Lirik Lagu",
    "category": "Search",
    "group": "Search",
    "endpoint": "/api/search/lirik",
    "method": "GET",
    "params": [
      {
        "name": "lirik",
        "label": "lirik",
        "type": "text",
        "required": true
      }
    ],
    "description": "Cari lirik lagu berdasarkan potongan kata.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Search",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/search/lirik"
  },
  {
    "id": "vynaa_ep_425",
    "label": "Search - OpenAI Chat",
    "category": "Search",
    "group": "Search",
    "endpoint": "/api/search/openai-chat",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Chat dengan OpenAI ChatGPT.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Search",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/search/openai-chat"
  },
  {
    "id": "vynaa_ep_426",
    "label": "Search - OpenAI Image Generator",
    "category": "Search",
    "group": "Search",
    "endpoint": "/api/search/openai-image",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar pakai OpenAI (raw image PNG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Search",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/search/openai-image"
  },
  {
    "id": "vynaa_ep_427",
    "label": "Search - Pinterest",
    "category": "Search",
    "group": "Search",
    "endpoint": "/api/search/pinterest",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Cari pin di Pinterest.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Search",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/search/pinterest"
  },
  {
    "id": "vynaa_ep_428",
    "label": "Search - Play Store",
    "category": "Search",
    "group": "Search",
    "endpoint": "/api/search/playstore",
    "method": "GET",
    "params": [
      {
        "name": "app",
        "label": "app",
        "type": "text",
        "required": true
      }
    ],
    "description": "Cari aplikasi di Google Play Store.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Search",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/search/playstore"
  },
  {
    "id": "vynaa_ep_429",
    "label": "Search - Ringtone",
    "category": "Search",
    "group": "Search",
    "endpoint": "/api/search/ringtone",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Cari ringtone.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Search",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/search/ringtone"
  },
  {
    "id": "vynaa_ep_430",
    "label": "Search - SFile",
    "category": "Search",
    "group": "Search",
    "endpoint": "/api/search/sfile",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Cari file di SFile.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Search",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/search/sfile"
  },
  {
    "id": "vynaa_ep_431",
    "label": "Search - SFile Mobi",
    "category": "Search",
    "group": "Search",
    "endpoint": "/api/search/sfilemobi",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Cari aplikasi/file di sfile.mobi.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Search",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/search/sfilemobi"
  },
  {
    "id": "vynaa_ep_432",
    "label": "Search - Spotify",
    "category": "Search",
    "group": "Search",
    "endpoint": "/api/search/spotify",
    "method": "GET",
    "params": [
      {
        "name": "query",
        "label": "query",
        "type": "text",
        "required": true
      }
    ],
    "description": "Cari lagu di Spotify.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Search",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/search/spotify"
  },
  {
    "id": "vynaa_ep_433",
    "label": "Search - Stable Diffusion",
    "category": "Search",
    "group": "Search",
    "endpoint": "/api/search/stablediffusion",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar pakai Stable Diffusion (raw image PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Search",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/search/stablediffusion"
  },
  {
    "id": "vynaa_ep_434",
    "label": "Search - Sticker",
    "category": "Search",
    "group": "Search",
    "endpoint": "/api/search/sticker",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Cari stiker.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Search",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/search/sticker"
  },
  {
    "id": "vynaa_ep_435",
    "label": "Search - TikTok Search",
    "category": "Search",
    "group": "Search",
    "endpoint": "/api/search/tiktoks",
    "method": "GET",
    "params": [
      {
        "name": "query",
        "label": "query",
        "type": "text",
        "required": true
      }
    ],
    "description": "Cari video TikTok.",
    "outputType": "video",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Search",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/search/tiktoks"
  },
  {
    "id": "vynaa_ep_436",
    "label": "Search - Wikimedia",
    "category": "Search",
    "group": "Search",
    "endpoint": "/api/search/wikimedia",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Cari di Wikimedia.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Search",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/search/wikimedia"
  },
  {
    "id": "vynaa_ep_437",
    "label": "Search - Wikipedia",
    "category": "Search",
    "group": "Search",
    "endpoint": "/api/search/wikipedia",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Cari artikel Wikipedia.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Search",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/search/wikipedia"
  },
  {
    "id": "vynaa_ep_438",
    "label": "Search - YouTube Search",
    "category": "Search",
    "group": "Search",
    "endpoint": "/api/search/yts",
    "method": "GET",
    "params": [
      {
        "name": "query",
        "label": "query",
        "type": "text",
        "required": true
      }
    ],
    "description": "Cari video YouTube.",
    "outputType": "video",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Search",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/search/yts"
  },
  {
    "id": "vynaa_ep_439",
    "label": "Stalk - Free Fire",
    "category": "Stalk",
    "group": "Stalk",
    "endpoint": "/api/stalk/ff",
    "method": "GET",
    "params": [
      {
        "name": "id",
        "label": "id",
        "type": "text",
        "required": true
      }
    ],
    "description": "Get Free Fire account info by user ID.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Contains restricted keyword: stalk",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/stalk/ff"
  },
  {
    "id": "vynaa_ep_440",
    "label": "Stalk - Genshin Impact",
    "category": "Stalk",
    "group": "Stalk",
    "endpoint": "/api/stalk/genshin",
    "method": "GET",
    "params": [
      {
        "name": "id",
        "label": "id",
        "type": "text",
        "required": true
      }
    ],
    "description": "Get Genshin Impact account info by user ID.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Contains restricted keyword: stalk",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/stalk/genshin"
  },
  {
    "id": "vynaa_ep_441",
    "label": "Stalk - GitHub User",
    "category": "Stalk",
    "group": "Stalk",
    "endpoint": "/api/stalk/github",
    "method": "GET",
    "params": [
      {
        "name": "username",
        "label": "username",
        "type": "text",
        "required": true
      }
    ],
    "description": "Get GitHub user profile info by username.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Contains restricted keyword: stalk",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/stalk/github"
  },
  {
    "id": "vynaa_ep_442",
    "label": "Stalk - Honor of Kings",
    "category": "Stalk",
    "group": "Stalk",
    "endpoint": "/api/stalk/hok",
    "method": "GET",
    "params": [
      {
        "name": "id",
        "label": "id",
        "type": "text",
        "required": true
      }
    ],
    "description": "Get Honor of Kings account info by user ID.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Contains restricted keyword: stalk",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/stalk/hok"
  },
  {
    "id": "vynaa_ep_443",
    "label": "Stalk - Instagram",
    "category": "Stalk",
    "group": "Stalk",
    "endpoint": "/api/stalk/ig",
    "method": "GET",
    "params": [
      {
        "name": "username",
        "label": "username",
        "type": "text",
        "required": true
      }
    ],
    "description": "Get Instagram profile info (followers, bio, etc.) by username.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Contains restricted keyword: stalk",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/stalk/ig"
  },
  {
    "id": "vynaa_ep_444",
    "label": "Stalk - Mobile Legends V2",
    "category": "Stalk",
    "group": "Stalk",
    "endpoint": "/api/stalk/ml-v2",
    "method": "GET",
    "params": [
      {
        "name": "id",
        "label": "id",
        "type": "text",
        "required": true
      },
      {
        "name": "server",
        "label": "server",
        "type": "text",
        "required": true
      }
    ],
    "description": "Get Mobile Legends account info (V2 source) by user ID and server (zone) ID.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Contains restricted keyword: stalk",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/stalk/ml-v2"
  },
  {
    "id": "vynaa_ep_445",
    "label": "Stalk - Mobile Legends",
    "category": "Stalk",
    "group": "Stalk",
    "endpoint": "/api/stalk/ml",
    "method": "GET",
    "params": [
      {
        "name": "id",
        "label": "id",
        "type": "text",
        "required": true
      },
      {
        "name": "server",
        "label": "server",
        "type": "text",
        "required": true
      }
    ],
    "description": "Get Mobile Legends account info by user ID and server (zone) ID.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Contains restricted keyword: stalk",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/stalk/ml"
  },
  {
    "id": "vynaa_ep_446",
    "label": "Stalk - NPM Package",
    "category": "Stalk",
    "group": "Stalk",
    "endpoint": "/api/stalk/npm",
    "method": "GET",
    "params": [
      {
        "name": "name",
        "label": "name",
        "type": "text",
        "required": true
      }
    ],
    "description": "Get full info of an NPM package by name.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Contains restricted keyword: stalk",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/stalk/npm"
  },
  {
    "id": "vynaa_ep_447",
    "label": "Stalk - GitHub Repo Search",
    "category": "Stalk",
    "group": "Stalk",
    "endpoint": "/api/stalk/repo",
    "method": "GET",
    "params": [
      {
        "name": "repo",
        "label": "repo",
        "type": "text",
        "required": true
      }
    ],
    "description": "Search GitHub repositories by query/name.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Contains restricted keyword: stalk",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/stalk/repo"
  },
  {
    "id": "vynaa_ep_448",
    "label": "Stalk - Roblox",
    "category": "Stalk",
    "group": "Stalk",
    "endpoint": "/api/stalk/roblox",
    "method": "GET",
    "params": [
      {
        "name": "username",
        "label": "username",
        "type": "text",
        "required": true
      }
    ],
    "description": "Get Roblox profile info by username.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Contains restricted keyword: stalk",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/stalk/roblox"
  },
  {
    "id": "vynaa_ep_449",
    "label": "Stalk - SnackVideo",
    "category": "Stalk",
    "group": "Stalk",
    "endpoint": "/api/stalk/snackvideo",
    "method": "GET",
    "params": [
      {
        "name": "username",
        "label": "username",
        "type": "text",
        "required": true
      }
    ],
    "description": "Get SnackVideo profile info by username.",
    "outputType": "video",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Contains restricted keyword: stalk",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/stalk/snackvideo"
  },
  {
    "id": "vynaa_ep_450",
    "label": "Stalk - Super Sus",
    "category": "Stalk",
    "group": "Stalk",
    "endpoint": "/api/stalk/supersus",
    "method": "GET",
    "params": [
      {
        "name": "id",
        "label": "id",
        "type": "text",
        "required": true
      }
    ],
    "description": "Get Super Sus account info by user ID.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Contains restricted keyword: stalk",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/stalk/supersus"
  },
  {
    "id": "vynaa_ep_451",
    "label": "Stalk - TikTok",
    "category": "Stalk",
    "group": "Stalk",
    "endpoint": "/api/stalk/tt",
    "method": "GET",
    "params": [
      {
        "name": "username",
        "label": "username",
        "type": "text",
        "required": true
      }
    ],
    "description": "Get TikTok profile info (followers, likes, etc.) by username.",
    "outputType": "video",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Contains restricted keyword: stalk",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/stalk/tt"
  },
  {
    "id": "vynaa_ep_452",
    "label": "Stalk - Twitter / X",
    "category": "Stalk",
    "group": "Stalk",
    "endpoint": "/api/stalk/twitter",
    "method": "GET",
    "params": [
      {
        "name": "username",
        "label": "username",
        "type": "text",
        "required": true
      }
    ],
    "description": "Get Twitter (X) profile info by username.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Contains restricted keyword: stalk",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/stalk/twitter"
  },
  {
    "id": "vynaa_ep_453",
    "label": "Stalk - YouTube",
    "category": "Stalk",
    "group": "Stalk",
    "endpoint": "/api/stalk/yt",
    "method": "GET",
    "params": [
      {
        "name": "username",
        "label": "username",
        "type": "text",
        "required": true
      }
    ],
    "description": "Get YouTube channel info (subscriber, views, etc.) by username.",
    "outputType": "video",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Contains restricted keyword: stalk",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/stalk/yt"
  },
  {
    "id": "vynaa_ep_454",
    "label": "Sticker - Among Us",
    "category": "Sticker",
    "group": "Sticker",
    "endpoint": "/api/sticker/among",
    "method": "GET",
    "params": [],
    "description": "Random sticker bertema Among Us (gif).",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/sticker/among"
  },
  {
    "id": "vynaa_ep_455",
    "label": "Sticker - Anime",
    "category": "Sticker",
    "group": "Sticker",
    "endpoint": "/api/sticker/anime",
    "method": "GET",
    "params": [],
    "description": "Random sticker anime.",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/sticker/anime"
  },
  {
    "id": "vynaa_ep_456",
    "label": "Sticker - Anime GIF",
    "category": "Sticker",
    "group": "Sticker",
    "endpoint": "/api/sticker/animegif",
    "method": "GET",
    "params": [],
    "description": "Random sticker anime dalam format GIF.",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/sticker/animegif"
  },
  {
    "id": "vynaa_ep_457",
    "label": "Sticker - Bucin",
    "category": "Sticker",
    "group": "Sticker",
    "endpoint": "/api/sticker/bucin",
    "method": "GET",
    "params": [],
    "description": "Random sticker bertema bucin (budak cinta).",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/sticker/bucin"
  },
  {
    "id": "vynaa_ep_458",
    "label": "Sticker - Chat",
    "category": "Sticker",
    "group": "Sticker",
    "endpoint": "/api/sticker/chat",
    "method": "GET",
    "params": [],
    "description": "Random sticker bertema chat.",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/sticker/chat"
  },
  {
    "id": "vynaa_ep_459",
    "label": "Sticker - Dadu",
    "category": "Sticker",
    "group": "Sticker",
    "endpoint": "/api/sticker/dadu",
    "method": "GET",
    "params": [],
    "description": "Random sticker dadu.",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/sticker/dadu"
  },
  {
    "id": "vynaa_ep_460",
    "label": "Sticker - Dino Kuning",
    "category": "Sticker",
    "group": "Sticker",
    "endpoint": "/api/sticker/dinokuning",
    "method": "GET",
    "params": [],
    "description": "Random sticker dino kuning.",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/sticker/dinokuning"
  },
  {
    "id": "vynaa_ep_461",
    "label": "Sticker - Doge",
    "category": "Sticker",
    "group": "Sticker",
    "endpoint": "/api/sticker/doge",
    "method": "GET",
    "params": [],
    "description": "Random sticker meme Doge.",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/sticker/doge"
  },
  {
    "id": "vynaa_ep_462",
    "label": "Sticker - Gojo Satoru",
    "category": "Sticker",
    "group": "Sticker",
    "endpoint": "/api/sticker/gojosatoru",
    "method": "GET",
    "params": [],
    "description": "Random sticker Gojo Satoru (Jujutsu Kaisen).",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/sticker/gojosatoru"
  },
  {
    "id": "vynaa_ep_463",
    "label": "Sticker - Gura",
    "category": "Sticker",
    "group": "Sticker",
    "endpoint": "/api/sticker/gura",
    "method": "GET",
    "params": [],
    "description": "Random sticker Gawr Gura (Hololive).",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/sticker/gura"
  },
  {
    "id": "vynaa_ep_464",
    "label": "Sticker - Kawan SpongeBob",
    "category": "Sticker",
    "group": "Sticker",
    "endpoint": "/api/sticker/kawanspongebob",
    "method": "GET",
    "params": [],
    "description": "Random sticker kawan-kawan SpongeBob.",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/sticker/kawanspongebob"
  },
  {
    "id": "vynaa_ep_465",
    "label": "Sticker - Manusia Lidi",
    "category": "Sticker",
    "group": "Sticker",
    "endpoint": "/api/sticker/manusialidi",
    "method": "GET",
    "params": [],
    "description": "Random sticker meme manusia lidi.",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/sticker/manusialidi"
  },
  {
    "id": "vynaa_ep_466",
    "label": "Sticker - Muka Lu",
    "category": "Sticker",
    "group": "Sticker",
    "endpoint": "/api/sticker/mukalu",
    "method": "GET",
    "params": [],
    "description": "Random sticker meme muka lu.",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/sticker/mukalu"
  },
  {
    "id": "vynaa_ep_467",
    "label": "Sticker - Paimon",
    "category": "Sticker",
    "group": "Sticker",
    "endpoint": "/api/sticker/paimon",
    "method": "GET",
    "params": [],
    "description": "Random sticker Paimon (Genshin Impact).",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/sticker/paimon"
  },
  {
    "id": "vynaa_ep_468",
    "label": "Sticker - Patrick",
    "category": "Sticker",
    "group": "Sticker",
    "endpoint": "/api/sticker/patrick",
    "method": "GET",
    "params": [],
    "description": "Random sticker Patrick Star.",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/sticker/patrick"
  },
  {
    "id": "vynaa_ep_469",
    "label": "Sticker - Patrick GIF",
    "category": "Sticker",
    "group": "Sticker",
    "endpoint": "/api/sticker/patrickgif",
    "method": "GET",
    "params": [],
    "description": "Random sticker Patrick Star format GIF.",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/sticker/patrickgif"
  },
  {
    "id": "vynaa_ep_470",
    "label": "Sticker - Pentol",
    "category": "Sticker",
    "group": "Sticker",
    "endpoint": "/api/sticker/pentol",
    "method": "GET",
    "params": [],
    "description": "Random sticker karakter Pentol.",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/sticker/pentol"
  },
  {
    "id": "vynaa_ep_471",
    "label": "Sticker - Rabbit",
    "category": "Sticker",
    "group": "Sticker",
    "endpoint": "/api/sticker/rabbit",
    "method": "GET",
    "params": [],
    "description": "Random sticker kelinci.",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/sticker/rabbit"
  },
  {
    "id": "vynaa_ep_472",
    "label": "Sticker - Random",
    "category": "Sticker",
    "group": "Sticker",
    "endpoint": "/api/sticker/random",
    "method": "GET",
    "params": [],
    "description": "Random sticker dari berbagai kategori.",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/sticker/random"
  },
  {
    "id": "vynaa_ep_473",
    "label": "Sticker - SpongeBob",
    "category": "Sticker",
    "group": "Sticker",
    "endpoint": "/api/sticker/spongebob",
    "method": "GET",
    "params": [],
    "description": "Random sticker SpongeBob.",
    "outputType": "image",
    "plan": "free",
    "safe": true,
    "enabledByDefault": true,
    "tags": [],
    "rawUrl": "https://api.vtech.biz.id/api/sticker/spongebob"
  },
  {
    "id": "vynaa_ep_474",
    "label": "Story - Cerpen Anak",
    "category": "Story",
    "group": "Story",
    "endpoint": "/api/story/cerpen-anak",
    "method": "GET",
    "params": [],
    "description": "Random cerpen bertema anak.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Story",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/story/cerpen-anak"
  },
  {
    "id": "vynaa_ep_475",
    "label": "Story - Cerpen Budaya",
    "category": "Story",
    "group": "Story",
    "endpoint": "/api/story/cerpen-budaya",
    "method": "GET",
    "params": [],
    "description": "Random cerpen bertema budaya.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Story",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/story/cerpen-budaya"
  },
  {
    "id": "vynaa_ep_476",
    "label": "Story - Cerpen Cinta",
    "category": "Story",
    "group": "Story",
    "endpoint": "/api/story/cerpen-cinta",
    "method": "GET",
    "params": [],
    "description": "Random cerpen bertema cinta.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Story",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/story/cerpen-cinta"
  },
  {
    "id": "vynaa_ep_477",
    "label": "Story - Cerpen Galau",
    "category": "Story",
    "group": "Story",
    "endpoint": "/api/story/cerpen-galau",
    "method": "GET",
    "params": [],
    "description": "Random cerpen bertema galau.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Story",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/story/cerpen-galau"
  },
  {
    "id": "vynaa_ep_478",
    "label": "Story - Cerpen Gokil",
    "category": "Story",
    "group": "Story",
    "endpoint": "/api/story/cerpen-gokil",
    "method": "GET",
    "params": [],
    "description": "Random cerpen bertema gokil.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Story",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/story/cerpen-gokil"
  },
  {
    "id": "vynaa_ep_479",
    "label": "Story - Cerpen Inspiratif",
    "category": "Story",
    "group": "Story",
    "endpoint": "/api/story/cerpen-inspiratif",
    "method": "GET",
    "params": [],
    "description": "Random cerpen bertema inspiratif.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Story",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/story/cerpen-inspiratif"
  },
  {
    "id": "vynaa_ep_480",
    "label": "Story - Cerpen Jepang",
    "category": "Story",
    "group": "Story",
    "endpoint": "/api/story/cerpen-jepang",
    "method": "GET",
    "params": [],
    "description": "Random cerpen bertema jepang.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Story",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/story/cerpen-jepang"
  },
  {
    "id": "vynaa_ep_481",
    "label": "Story - Cerpen Kehidupan",
    "category": "Story",
    "group": "Story",
    "endpoint": "/api/story/cerpen-kehidupan",
    "method": "GET",
    "params": [],
    "description": "Random cerpen bertema kehidupan.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Story",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/story/cerpen-kehidupan"
  },
  {
    "id": "vynaa_ep_482",
    "label": "Story - Cerpen Keluarga",
    "category": "Story",
    "group": "Story",
    "endpoint": "/api/story/cerpen-keluarga",
    "method": "GET",
    "params": [],
    "description": "Random cerpen bertema keluarga.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Story",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/story/cerpen-keluarga"
  },
  {
    "id": "vynaa_ep_483",
    "label": "Story - Cerpen Korea",
    "category": "Story",
    "group": "Story",
    "endpoint": "/api/story/cerpen-korea",
    "method": "GET",
    "params": [],
    "description": "Random cerpen bertema korea.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Story",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/story/cerpen-korea"
  },
  {
    "id": "vynaa_ep_484",
    "label": "Story - Cerpen Kristen",
    "category": "Story",
    "group": "Story",
    "endpoint": "/api/story/cerpen-kristen",
    "method": "GET",
    "params": [],
    "description": "Random cerpen bertema kristen.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Story",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/story/cerpen-kristen"
  },
  {
    "id": "vynaa_ep_485",
    "label": "Story - Cerpen Liburan",
    "category": "Story",
    "group": "Story",
    "endpoint": "/api/story/cerpen-liburan",
    "method": "GET",
    "params": [],
    "description": "Random cerpen bertema liburan.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Story",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/story/cerpen-liburan"
  },
  {
    "id": "vynaa_ep_486",
    "label": "Story - Cerpen Lingkungan",
    "category": "Story",
    "group": "Story",
    "endpoint": "/api/story/cerpen-lingkungan",
    "method": "GET",
    "params": [],
    "description": "Random cerpen bertema lingkungan.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Story",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/story/cerpen-lingkungan"
  },
  {
    "id": "vynaa_ep_487",
    "label": "Story - Cerpen Mengharukan",
    "category": "Story",
    "group": "Story",
    "endpoint": "/api/story/cerpen-mengharukan",
    "method": "GET",
    "params": [],
    "description": "Random cerpen bertema mengharukan.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Story",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/story/cerpen-mengharukan"
  },
  {
    "id": "vynaa_ep_488",
    "label": "Story - Cerpen Misteri",
    "category": "Story",
    "group": "Story",
    "endpoint": "/api/story/cerpen-misteri",
    "method": "GET",
    "params": [],
    "description": "Random cerpen bertema misteri.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Story",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/story/cerpen-misteri"
  },
  {
    "id": "vynaa_ep_489",
    "label": "Story - Cerpen Motivasi",
    "category": "Story",
    "group": "Story",
    "endpoint": "/api/story/cerpen-motivasi",
    "method": "GET",
    "params": [],
    "description": "Random cerpen bertema motivasi.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Story",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/story/cerpen-motivasi"
  },
  {
    "id": "vynaa_ep_490",
    "label": "Story - Cerpen Nasihat",
    "category": "Story",
    "group": "Story",
    "endpoint": "/api/story/cerpen-nasihat",
    "method": "GET",
    "params": [],
    "description": "Random cerpen bertema nasihat.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Story",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/story/cerpen-nasihat"
  },
  {
    "id": "vynaa_ep_491",
    "label": "Story - Cerpen Pendidikan",
    "category": "Story",
    "group": "Story",
    "endpoint": "/api/story/cerpen-pendidikan",
    "method": "GET",
    "params": [],
    "description": "Random cerpen bertema pendidikan.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Story",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/story/cerpen-pendidikan"
  },
  {
    "id": "vynaa_ep_492",
    "label": "Story - Cerpen Perjuangan",
    "category": "Story",
    "group": "Story",
    "endpoint": "/api/story/cerpen-perjuangan",
    "method": "GET",
    "params": [],
    "description": "Random cerpen bertema perjuangan.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Story",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/story/cerpen-perjuangan"
  },
  {
    "id": "vynaa_ep_493",
    "label": "Story - Cerpen Persahabatan",
    "category": "Story",
    "group": "Story",
    "endpoint": "/api/story/cerpen-persahabatan",
    "method": "GET",
    "params": [],
    "description": "Random cerpen bertema persahabatan.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Story",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/story/cerpen-persahabatan"
  },
  {
    "id": "vynaa_ep_494",
    "label": "Story - Cerpen Petualangan",
    "category": "Story",
    "group": "Story",
    "endpoint": "/api/story/cerpen-petualangan",
    "method": "GET",
    "params": [],
    "description": "Random cerpen bertema petualangan.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Story",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/story/cerpen-petualangan"
  },
  {
    "id": "vynaa_ep_495",
    "label": "Story - Cerpen Ramadhan",
    "category": "Story",
    "group": "Story",
    "endpoint": "/api/story/cerpen-ramadhan",
    "method": "GET",
    "params": [],
    "description": "Random cerpen bertema ramadhan.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Story",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/story/cerpen-ramadhan"
  },
  {
    "id": "vynaa_ep_496",
    "label": "Story - Cerpen Remaja",
    "category": "Story",
    "group": "Story",
    "endpoint": "/api/story/cerpen-remaja",
    "method": "GET",
    "params": [],
    "description": "Random cerpen bertema remaja.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Story",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/story/cerpen-remaja"
  },
  {
    "id": "vynaa_ep_497",
    "label": "Story - Cerpen Romantis",
    "category": "Story",
    "group": "Story",
    "endpoint": "/api/story/cerpen-romantis",
    "method": "GET",
    "params": [],
    "description": "Random cerpen bertema romantis.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Story",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/story/cerpen-romantis"
  },
  {
    "id": "vynaa_ep_498",
    "label": "Story - Cerpen Sastra",
    "category": "Story",
    "group": "Story",
    "endpoint": "/api/story/cerpen-sastra",
    "method": "GET",
    "params": [],
    "description": "Random cerpen bertema sastra.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Story",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/story/cerpen-sastra"
  },
  {
    "id": "vynaa_ep_499",
    "label": "TextToSound - German",
    "category": "Text To Sound",
    "group": "Text To Sound",
    "endpoint": "/api/sound/tts-de",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Text-to-Speech German (de-DE). Mengembalikan JSON berisi URL MP3.",
    "outputType": "audio",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Text To Sound",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/sound/tts-de"
  },
  {
    "id": "vynaa_ep_500",
    "label": "TextToSound - English (US)",
    "category": "Text To Sound",
    "group": "Text To Sound",
    "endpoint": "/api/sound/tts-en",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Text-to-Speech English (US) (en-US). Mengembalikan JSON berisi URL MP3.",
    "outputType": "audio",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Text To Sound",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/sound/tts-en"
  },
  {
    "id": "vynaa_ep_501",
    "label": "TextToSound - Filipino",
    "category": "Text To Sound",
    "group": "Text To Sound",
    "endpoint": "/api/sound/tts-fil",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Text-to-Speech Filipino (fil-PH). Mengembalikan JSON berisi URL MP3.",
    "outputType": "audio",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Text To Sound",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/sound/tts-fil"
  },
  {
    "id": "vynaa_ep_502",
    "label": "TextToSound - French",
    "category": "Text To Sound",
    "group": "Text To Sound",
    "endpoint": "/api/sound/tts-fr",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Text-to-Speech French (fr-FR). Mengembalikan JSON berisi URL MP3.",
    "outputType": "audio",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Text To Sound",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/sound/tts-fr"
  },
  {
    "id": "vynaa_ep_503",
    "label": "TextToSound - Hindi",
    "category": "Text To Sound",
    "group": "Text To Sound",
    "endpoint": "/api/sound/tts-hi",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Text-to-Speech Hindi (hi-IN). Mengembalikan JSON berisi URL MP3.",
    "outputType": "audio",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Text To Sound",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/sound/tts-hi"
  },
  {
    "id": "vynaa_ep_504",
    "label": "TextToSound - Indonesian",
    "category": "Text To Sound",
    "group": "Text To Sound",
    "endpoint": "/api/sound/tts-id",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Text-to-Speech Indonesian (id-ID). Mengembalikan JSON berisi URL MP3.",
    "outputType": "audio",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Text To Sound",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/sound/tts-id"
  },
  {
    "id": "vynaa_ep_505",
    "label": "TextToSound - Italian",
    "category": "Text To Sound",
    "group": "Text To Sound",
    "endpoint": "/api/sound/tts-it",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Text-to-Speech Italian (it-IT). Mengembalikan JSON berisi URL MP3.",
    "outputType": "audio",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Text To Sound",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/sound/tts-it"
  },
  {
    "id": "vynaa_ep_506",
    "label": "TextToSound - Japanese",
    "category": "Text To Sound",
    "group": "Text To Sound",
    "endpoint": "/api/sound/tts-ja",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Text-to-Speech Japanese (ja-JP). Mengembalikan JSON berisi URL MP3.",
    "outputType": "audio",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Text To Sound",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/sound/tts-ja"
  },
  {
    "id": "vynaa_ep_507",
    "label": "TextToSound - Korean",
    "category": "Text To Sound",
    "group": "Text To Sound",
    "endpoint": "/api/sound/tts-ko",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Text-to-Speech Korean (ko-KR). Mengembalikan JSON berisi URL MP3.",
    "outputType": "audio",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Text To Sound",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/sound/tts-ko"
  },
  {
    "id": "vynaa_ep_508",
    "label": "TextToSound - Burmese / Malay",
    "category": "Text To Sound",
    "group": "Text To Sound",
    "endpoint": "/api/sound/tts-my",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Text-to-Speech Burmese / Malay (my). Mengembalikan JSON berisi URL MP3.",
    "outputType": "audio",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Text To Sound",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/sound/tts-my"
  },
  {
    "id": "vynaa_ep_509",
    "label": "TextToSound - Russian",
    "category": "Text To Sound",
    "group": "Text To Sound",
    "endpoint": "/api/sound/tts-ru",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Text-to-Speech Russian (ru-RU). Mengembalikan JSON berisi URL MP3.",
    "outputType": "audio",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Text To Sound",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/sound/tts-ru"
  },
  {
    "id": "vynaa_ep_510",
    "label": "TextToSound - Thai",
    "category": "Text To Sound",
    "group": "Text To Sound",
    "endpoint": "/api/sound/tts-th",
    "method": "GET",
    "params": [
      {
        "name": "text1",
        "label": "text1",
        "type": "text",
        "required": true
      }
    ],
    "description": "Text-to-Speech Thai (th-TH). Mengembalikan JSON berisi URL MP3.",
    "outputType": "audio",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Text To Sound",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/sound/tts-th"
  },
  {
    "id": "vynaa_ep_511",
    "label": "TextPro - 1917",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/1917",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect 1917 (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/1917"
  },
  {
    "id": "vynaa_ep_512",
    "label": "TextPro - 3D Gradient",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/3d-gradient",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect 3D Gradient (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/3d-gradient"
  },
  {
    "id": "vynaa_ep_513",
    "label": "TextPro - 3D Stone",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/3dstone",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect 3D Stone (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/3dstone"
  },
  {
    "id": "vynaa_ep_514",
    "label": "TextPro - Art Paper",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/art-papper",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Art Paper (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/art-papper"
  },
  {
    "id": "vynaa_ep_515",
    "label": "TextPro - A-Stone",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/astone",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect A-Stone (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/astone"
  },
  {
    "id": "vynaa_ep_516",
    "label": "TextPro - Avengers Logo",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/avengers-logo",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      },
      {
        "name": "text2",
        "label": "text2",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Avengers Logo (PNG, 2 baris teks).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/avengers-logo"
  },
  {
    "id": "vynaa_ep_517",
    "label": "TextPro - Batman Logo",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/batman-logo",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Batman Logo (PNG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/batman-logo"
  },
  {
    "id": "vynaa_ep_518",
    "label": "TextPro - Black Pink",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/black-pink",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Black Pink (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/black-pink"
  },
  {
    "id": "vynaa_ep_519",
    "label": "TextPro - Black Pink 2",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/black-pink2",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Black Pink 2 (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/black-pink2"
  },
  {
    "id": "vynaa_ep_520",
    "label": "TextPro - Blood",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/blood",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Blood (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/blood"
  },
  {
    "id": "vynaa_ep_521",
    "label": "TextPro - Bread",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/bread",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Bread (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/bread"
  },
  {
    "id": "vynaa_ep_522",
    "label": "TextPro - Broken Glass",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/broken-glass",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Broken Glass (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/broken-glass"
  },
  {
    "id": "vynaa_ep_523",
    "label": "TextPro - Captain",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/captain",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Captain (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/captain"
  },
  {
    "id": "vynaa_ep_524",
    "label": "TextPro - Christmas",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/christmas",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Christmas (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/christmas"
  },
  {
    "id": "vynaa_ep_525",
    "label": "TextPro - Deluxe Silver",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/deluxe-silver",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Deluxe Silver (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/deluxe-silver"
  },
  {
    "id": "vynaa_ep_526",
    "label": "TextPro - Drop Water",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/drop-water",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Drop Water (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/drop-water"
  },
  {
    "id": "vynaa_ep_527",
    "label": "TextPro - Engraved",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/engraved",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Engraved (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/engraved"
  },
  {
    "id": "vynaa_ep_528",
    "label": "TextPro - Fabric",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/fabric",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Fabric (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/fabric"
  },
  {
    "id": "vynaa_ep_529",
    "label": "TextPro - Giraffe",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/giraffe",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Giraffe (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/giraffe"
  },
  {
    "id": "vynaa_ep_530",
    "label": "TextPro - Glitch",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/glitch",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      },
      {
        "name": "text2",
        "label": "text2",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Glitch (PNG, 2 baris teks).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/glitch"
  },
  {
    "id": "vynaa_ep_531",
    "label": "TextPro - Glitch 2",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/glitch2",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      },
      {
        "name": "text2",
        "label": "text2",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Glitch 2 (PNG, 2 baris teks).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/glitch2"
  },
  {
    "id": "vynaa_ep_532",
    "label": "TextPro - Glitch 3",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/glitch3",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Glitch 3 (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/glitch3"
  },
  {
    "id": "vynaa_ep_533",
    "label": "TextPro - Glossy",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/glossy",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Glossy (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/glossy"
  },
  {
    "id": "vynaa_ep_534",
    "label": "TextPro - Glue Text",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/glue-text",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Glue Text (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/glue-text"
  },
  {
    "id": "vynaa_ep_535",
    "label": "TextPro - Grafity Text",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/grafity-text",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Grafity Text (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/grafity-text"
  },
  {
    "id": "vynaa_ep_536",
    "label": "TextPro - Grafity Text 2",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/grafity-text2",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      },
      {
        "name": "text2",
        "label": "text2",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Grafity Text 2 (PNG, 2 baris teks).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/grafity-text2"
  },
  {
    "id": "vynaa_ep_537",
    "label": "TextPro - Halloween Text",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/hallowen-text",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Halloween Text (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/hallowen-text"
  },
  {
    "id": "vynaa_ep_538",
    "label": "TextPro - Halloween",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/hallowen",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Halloween (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/hallowen"
  },
  {
    "id": "vynaa_ep_539",
    "label": "TextPro - Harry Potter",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/harry-potter",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Harry Potter (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/harry-potter"
  },
  {
    "id": "vynaa_ep_540",
    "label": "TextPro - Holographic",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/holograpic",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Holographic (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/holograpic"
  },
  {
    "id": "vynaa_ep_541",
    "label": "TextPro - Honey",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/honey",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Honey (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/honey"
  },
  {
    "id": "vynaa_ep_542",
    "label": "TextPro - Horror Blood",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/horor-blood",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Horror Blood (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/horor-blood"
  },
  {
    "id": "vynaa_ep_543",
    "label": "TextPro - Ice",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/ice",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Ice (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/ice"
  },
  {
    "id": "vynaa_ep_544",
    "label": "TextPro - Joker Logo",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/joker-logo",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Joker Logo (PNG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/joker-logo"
  },
  {
    "id": "vynaa_ep_545",
    "label": "TextPro - Koi",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/koi",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Koi (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/koi"
  },
  {
    "id": "vynaa_ep_546",
    "label": "TextPro - Larva",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/larva",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Larva (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/larva"
  },
  {
    "id": "vynaa_ep_547",
    "label": "TextPro - Lion Logo",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/lion-logo",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      },
      {
        "name": "text2",
        "label": "text2",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Lion Logo (PNG, 2 baris teks).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/lion-logo"
  },
  {
    "id": "vynaa_ep_548",
    "label": "TextPro - Wolf Logo",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/logo-wolf",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      },
      {
        "name": "text2",
        "label": "text2",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Wolf Logo (PNG, 2 baris teks).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/logo-wolf"
  },
  {
    "id": "vynaa_ep_549",
    "label": "TextPro - Wolf Logo 2",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/logo-wolf2",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      },
      {
        "name": "text2",
        "label": "text2",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Wolf Logo 2 (PNG, 2 baris teks).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/logo-wolf2"
  },
  {
    "id": "vynaa_ep_550",
    "label": "TextPro - Magma",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/magma",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Magma (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/magma"
  },
  {
    "id": "vynaa_ep_551",
    "label": "TextPro - Marvel Logo 2",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/marvel-logo2",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      },
      {
        "name": "text2",
        "label": "text2",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Marvel Logo 2 (PNG, 2 baris teks).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/marvel-logo2"
  },
  {
    "id": "vynaa_ep_552",
    "label": "TextPro - Marvel Logo 3",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/marvel-logo3",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      },
      {
        "name": "text2",
        "label": "text2",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Marvel Logo 3 (PNG, 2 baris teks).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/marvel-logo3"
  },
  {
    "id": "vynaa_ep_553",
    "label": "TextPro - Multi Color",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/multi-color",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Multi Color (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/multi-color"
  },
  {
    "id": "vynaa_ep_554",
    "label": "TextPro - Natural Leaves",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/natural-leaves",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Natural Leaves (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/natural-leaves"
  },
  {
    "id": "vynaa_ep_555",
    "label": "TextPro - Neon Devil",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/neon-devil",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Neon Devil (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/neon-devil"
  },
  {
    "id": "vynaa_ep_556",
    "label": "TextPro - Neon Galaxy",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/neon-galaxy",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Neon Galaxy (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/neon-galaxy"
  },
  {
    "id": "vynaa_ep_557",
    "label": "TextPro - Neon Green",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/neon-green",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Neon Green (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/neon-green"
  },
  {
    "id": "vynaa_ep_558",
    "label": "TextPro - Neon Light",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/neon-light",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Neon Light (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/neon-light"
  },
  {
    "id": "vynaa_ep_559",
    "label": "TextPro - Neon Online",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/neon-online",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Neon Online (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/neon-online"
  },
  {
    "id": "vynaa_ep_560",
    "label": "TextPro - Ninja Logo",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/ninja-logo",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      },
      {
        "name": "text2",
        "label": "text2",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Ninja Logo (PNG, 2 baris teks).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/ninja-logo"
  },
  {
    "id": "vynaa_ep_561",
    "label": "TextPro - PornHub Logo",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/pornhub",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      },
      {
        "name": "text2",
        "label": "text2",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect PornHub Logo (PNG, 2 baris teks).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Contains restricted keyword: porn",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/pornhub"
  },
  {
    "id": "vynaa_ep_562",
    "label": "TextPro - Robot",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/robot",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Robot (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/robot"
  },
  {
    "id": "vynaa_ep_563",
    "label": "TextPro - Rusty",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/rusty",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Rusty (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/rusty"
  },
  {
    "id": "vynaa_ep_564",
    "label": "TextPro - Sci-Fi",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/scifi",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Sci-Fi (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/scifi"
  },
  {
    "id": "vynaa_ep_565",
    "label": "TextPro - Sky Text",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/sky-text",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Sky Text (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/sky-text"
  },
  {
    "id": "vynaa_ep_566",
    "label": "TextPro - Space",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/space",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      },
      {
        "name": "text2",
        "label": "text2",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Space (PNG, 2 baris teks).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/space"
  },
  {
    "id": "vynaa_ep_567",
    "label": "TextPro - Stroberi",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/stroberi",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Stroberi (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/stroberi"
  },
  {
    "id": "vynaa_ep_568",
    "label": "TextPro - Thunder 2",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/thunder2",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Thunder 2 (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/thunder2"
  },
  {
    "id": "vynaa_ep_569",
    "label": "TextPro - Toxic Bokeh",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/toxic-bokeh",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Toxic Bokeh (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/toxic-bokeh"
  },
  {
    "id": "vynaa_ep_570",
    "label": "TextPro - Valentine",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/valentine",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Valentine (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/valentine"
  },
  {
    "id": "vynaa_ep_571",
    "label": "TextPro - Valentine 2",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/valentine2",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Valentine 2 (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/valentine2"
  },
  {
    "id": "vynaa_ep_572",
    "label": "TextPro - Vintage",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/vintage",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      },
      {
        "name": "text2",
        "label": "text2",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Vintage (PNG, 2 baris teks).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/vintage"
  },
  {
    "id": "vynaa_ep_573",
    "label": "TextPro - Water Color",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/water-color",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Water Color (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/water-color"
  },
  {
    "id": "vynaa_ep_574",
    "label": "TextPro - Wicker",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/wicker",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Wicker (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/wicker"
  },
  {
    "id": "vynaa_ep_575",
    "label": "TextPro - Writing",
    "category": "TextPro",
    "group": "TextPro",
    "endpoint": "/api/textpro/writing",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate gambar text effect Writing (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: TextPro",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/textpro/writing"
  },
  {
    "id": "vynaa_ep_576",
    "label": "Tools - 2FA Code Generator",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/2fa",
    "method": "GET",
    "params": [
      {
        "name": "token",
        "label": "token",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate 6-digit 2FA code dari secret token TOTP.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/2fa"
  },
  {
    "id": "vynaa_ep_577",
    "label": "Tools - Audio to Video",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/audio2video",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Konversi audio ke video.",
    "outputType": "audio",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/audio2video"
  },
  {
    "id": "vynaa_ep_578",
    "label": "Tools - Base Encode/Decode",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/base",
    "method": "GET",
    "params": [
      {
        "name": "encode",
        "label": "encode",
        "type": "text",
        "required": false
      },
      {
        "name": "decode",
        "label": "decode",
        "type": "text",
        "required": false
      },
      {
        "name": "type",
        "label": "type",
        "type": "text",
        "required": true
      }
    ],
    "description": "Encode atau decode string menggunakan base32/base64.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/base"
  },
  {
    "id": "vynaa_ep_579",
    "label": "Tools - Bitly",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/linkshort/bitly",
    "method": "GET",
    "params": [
      {
        "name": "link",
        "label": "link",
        "type": "text",
        "required": true
      }
    ],
    "description": "Persingkat URL via Bitly.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/linkshort/bitly"
  },
  {
    "id": "vynaa_ep_580",
    "label": "Tools - Bypass City",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/bypasscity",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Bypass shortener via shrtfly/cityads/etc.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/bypasscity"
  },
  {
    "id": "vynaa_ep_581",
    "label": "Tools - Cek E-Wallet",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/cek-ewallet",
    "method": "GET",
    "params": [
      {
        "name": "wallet",
        "label": "wallet",
        "type": "text",
        "required": true
      },
      {
        "name": "nomer",
        "label": "nomer",
        "type": "text",
        "required": true
      }
    ],
    "description": "Cek nama pemilik nomor e-wallet (DANA/OVO/GoPay/dll).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/cek-ewallet"
  },
  {
    "id": "vynaa_ep_582",
    "label": "Tools - Cek Pesan Temp Mail",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/cek-msg-tmp-mail",
    "method": "GET",
    "params": [
      {
        "name": "email",
        "label": "email",
        "type": "text",
        "required": true
      }
    ],
    "description": "Cek inbox temp mail.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/cek-msg-tmp-mail"
  },
  {
    "id": "vynaa_ep_583",
    "label": "Tools - Cek Bill PLN",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/cekbillpln",
    "method": "GET",
    "params": [
      {
        "name": "id",
        "label": "id",
        "type": "text",
        "required": true
      }
    ],
    "description": "Cek tagihan listrik PLN.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/cekbillpln"
  },
  {
    "id": "vynaa_ep_584",
    "label": "Tools - Cek Redirect",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/cekredirect",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Cek tujuan akhir sebuah link (resolve redirect).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/cekredirect"
  },
  {
    "id": "vynaa_ep_585",
    "label": "Tools - Countdown",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/countdown",
    "method": "GET",
    "params": [
      {
        "name": "tanggal",
        "label": "tanggal",
        "type": "number",
        "required": true
      },
      {
        "name": "bulan",
        "label": "bulan",
        "type": "number",
        "required": true
      },
      {
        "name": "tahun",
        "label": "tahun",
        "type": "number",
        "required": true
      }
    ],
    "description": "Hitung mundur ke tanggal tertentu.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/countdown"
  },
  {
    "id": "vynaa_ep_586",
    "label": "Tools - Create Subdomain",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/create-subdo",
    "method": "GET",
    "params": [
      {
        "name": "subdomain",
        "label": "subdomain",
        "type": "text",
        "required": true
      },
      {
        "name": "domain",
        "label": "domain",
        "type": "text",
        "required": true
      },
      {
        "name": "type",
        "label": "type",
        "type": "text",
        "required": true
      },
      {
        "name": "content",
        "label": "content",
        "type": "text",
        "required": true
      },
      {
        "name": "proxied",
        "label": "proxied",
        "type": "text",
        "required": true
      }
    ],
    "description": "Buat subdomain Cloudflare baru.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/create-subdo"
  },
  {
    "id": "vynaa_ep_587",
    "label": "Tools - Create Temp Mail",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/create-temp-mail",
    "method": "GET",
    "params": [],
    "description": "Buat alamat email sementara baru.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/create-temp-mail"
  },
  {
    "id": "vynaa_ep_588",
    "label": "Tools - Cuaca",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/cuaca",
    "method": "GET",
    "params": [
      {
        "name": "query",
        "label": "query",
        "type": "text",
        "required": true
      }
    ],
    "description": "Cek info cuaca berdasarkan kota.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/cuaca"
  },
  {
    "id": "vynaa_ep_589",
    "label": "Tools - Cuttly",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/linkshort/cuttly",
    "method": "GET",
    "params": [
      {
        "name": "link",
        "label": "link",
        "type": "text",
        "required": true
      }
    ],
    "description": "Persingkat URL via Cuttly.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/linkshort/cuttly"
  },
  {
    "id": "vynaa_ep_590",
    "label": "Tools - Konversi Mata Uang",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/cvuang",
    "method": "GET",
    "params": [
      {
        "name": "from",
        "label": "from",
        "type": "text",
        "required": true
      },
      {
        "name": "to",
        "label": "to",
        "type": "text",
        "required": true
      },
      {
        "name": "jumlah",
        "label": "jumlah",
        "type": "number",
        "required": true
      }
    ],
    "description": "Konversi nilai mata uang antar negara.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/cvuang"
  },
  {
    "id": "vynaa_ep_591",
    "label": "Tools - Ephoto Radio",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/ephoto-radio",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Generate gambar dari URL ephoto360 generator.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/ephoto-radio"
  },
  {
    "id": "vynaa_ep_592",
    "label": "Tools - Free Proxy List",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/free-proxy",
    "method": "GET",
    "params": [],
    "description": "Dapatkan daftar proxy gratis (IP, port, country, anonymity level) yang tersedia saat ini.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/free-proxy"
  },
  {
    "id": "vynaa_ep_593",
    "label": "Tools - HD Video",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/hdvideo",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Tingkatkan kualitas video ke HD.",
    "outputType": "video",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/hdvideo"
  },
  {
    "id": "vynaa_ep_594",
    "label": "Tools - Image to Prompt",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/img2prompt",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Konversi gambar ke prompt teks (untuk AI image gen).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/img2prompt"
  },
  {
    "id": "vynaa_ep_595",
    "label": "Tools - Jadwal Shalat",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/jadwalshalat",
    "method": "GET",
    "params": [
      {
        "name": "kota",
        "label": "kota",
        "type": "text",
        "required": true
      }
    ],
    "description": "Jadwal shalat harian per kota.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/jadwalshalat"
  },
  {
    "id": "vynaa_ep_596",
    "label": "Tools - Jadwal Shalat V2",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/jadwalshalatv2",
    "method": "GET",
    "params": [
      {
        "name": "kota",
        "label": "kota",
        "type": "text",
        "required": true
      }
    ],
    "description": "Jadwal shalat (sumber V2).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/jadwalshalatv2"
  },
  {
    "id": "vynaa_ep_597",
    "label": "Tools - NSFW Detect",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/nsfw-detect",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Deteksi konten NSFW pada gambar.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/nsfw-detect"
  },
  {
    "id": "vynaa_ep_598",
    "label": "Tools - Random Address",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/random-address",
    "method": "GET",
    "params": [
      {
        "name": "country",
        "label": "country",
        "type": "text",
        "required": false
      }
    ],
    "description": "Generate random alamat (opsional per negara).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/random-address"
  },
  {
    "id": "vynaa_ep_599",
    "label": "Tools - Recolor (Colorize)",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/recolor",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Pewarnaan ulang foto hitam putih.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/recolor"
  },
  {
    "id": "vynaa_ep_600",
    "label": "Tools - Remini V2",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/remini-v2",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Remini upscaler versi 2.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/remini-v2"
  },
  {
    "id": "vynaa_ep_601",
    "label": "Tools - Remini V3",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/remini-v3",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      },
      {
        "name": "resolusi",
        "label": "resolusi",
        "type": "number",
        "required": true
      }
    ],
    "description": "Remini upscaler versi 3 (pilih resolusi).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/remini-v3"
  },
  {
    "id": "vynaa_ep_602",
    "label": "Tools - Remini V4",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/remini-v4",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      },
      {
        "name": "resolusi",
        "label": "resolusi",
        "type": "number",
        "required": true
      }
    ],
    "description": "Remini upscaler versi 4 (pilih resolusi).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/remini-v4"
  },
  {
    "id": "vynaa_ep_603",
    "label": "Tools - Remini",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/remini",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Tingkatkan resolusi/detil gambar (Remini v1).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/remini"
  },
  {
    "id": "vynaa_ep_604",
    "label": "Tools - Remove Background",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/removebg",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Hapus background gambar otomatis.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/removebg"
  },
  {
    "id": "vynaa_ep_605",
    "label": "Tools - VCC Generator v2",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/vcc-generator",
    "method": "GET",
    "params": [
      {
        "name": "type",
        "label": "type",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate Virtual Credit Card dummy berdasarkan jenis kartu (visa, mastercard, american-express, dll).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/vcc-generator"
  },
  {
    "id": "vynaa_ep_606",
    "label": "Tools - Web to ZIP v2",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/web2zip-v2",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Download seluruh halaman website ke file ZIP dan dapatkan link download-nya.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/web2zip-v2"
  },
  {
    "id": "vynaa_ep_607",
    "label": "Tools - Screenshot to Code",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/ss2code",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Konversi screenshot UI menjadi kode HTML/CSS.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/ss2code"
  },
  {
    "id": "vynaa_ep_608",
    "label": "Tools - Screenshot Web (HP)",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/sshp",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Screenshot website ukuran handphone (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/sshp"
  },
  {
    "id": "vynaa_ep_609",
    "label": "Tools - Screenshot Web (Tablet)",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/sstablet",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Screenshot website ukuran tablet (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/sstablet"
  },
  {
    "id": "vynaa_ep_610",
    "label": "Tools - Screenshot Web (Desktop)",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/ssweb",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Screenshot website ukuran desktop (PNG).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/ssweb"
  },
  {
    "id": "vynaa_ep_611",
    "label": "Tools - Style Text",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/styletext",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Generate berbagai variasi gaya unicode dari teks.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/styletext"
  },
  {
    "id": "vynaa_ep_612",
    "label": "Tools - Subdomain Finder",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/subdomain-finder",
    "method": "GET",
    "params": [
      {
        "name": "query",
        "label": "query",
        "type": "text",
        "required": true
      }
    ],
    "description": "Cari subdomain dari sebuah domain.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/subdomain-finder"
  },
  {
    "id": "vynaa_ep_613",
    "label": "Tools - Temp Mail v1 (Buat)",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/tempmail/v1/create",
    "method": "GET",
    "params": [],
    "description": "Buat email sementara baru (v1). Simpan sessionId untuk cek inbox.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/tempmail/v1/create"
  },
  {
    "id": "vynaa_ep_614",
    "label": "Tools - Temp Mail v1 (Inbox)",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/tempmail/v1/inbox",
    "method": "GET",
    "params": [
      {
        "name": "id",
        "label": "id",
        "type": "text",
        "required": true
      }
    ],
    "description": "Cek inbox email sementara v1 menggunakan sessionId yang didapat saat membuat email.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/tempmail/v1/inbox"
  },
  {
    "id": "vynaa_ep_615",
    "label": "Tools - Temp Mail v2 (Buat)",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/tempmail/v2/create",
    "method": "GET",
    "params": [],
    "description": "Buat email sementara baru (v2). Simpan alamat email untuk cek inbox.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/tempmail/v2/create"
  },
  {
    "id": "vynaa_ep_616",
    "label": "Tools - Temp Mail v2 (Inbox)",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/tempmail/v2/inbox",
    "method": "GET",
    "params": [
      {
        "name": "email",
        "label": "email",
        "type": "text",
        "required": true
      }
    ],
    "description": "Cek inbox email sementara v2 menggunakan alamat email yang sudah dibuat.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/tempmail/v2/inbox"
  },
  {
    "id": "vynaa_ep_617",
    "label": "Tools - TinyURL",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/linkshort/tinyurl",
    "method": "GET",
    "params": [
      {
        "name": "link",
        "label": "link",
        "type": "text",
        "required": true
      }
    ],
    "description": "Persingkat URL via TinyURL.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/linkshort/tinyurl"
  },
  {
    "id": "vynaa_ep_618",
    "label": "Tools - TinyURL With Alias",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/linkshort/tinyurlwithalias",
    "method": "GET",
    "params": [
      {
        "name": "link",
        "label": "link",
        "type": "text",
        "required": true
      },
      {
        "name": "alias",
        "label": "alias",
        "type": "text",
        "required": true
      }
    ],
    "description": "TinyURL dengan custom alias.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/linkshort/tinyurlwithalias"
  },
  {
    "id": "vynaa_ep_619",
    "label": "Tools - Translate",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/translate",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      },
      {
        "name": "lang",
        "label": "lang",
        "type": "text",
        "required": true
      }
    ],
    "description": "Terjemahkan teks ke bahasa lain.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/translate"
  },
  {
    "id": "vynaa_ep_620",
    "label": "Tools - VCC Generator",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/vccgen",
    "method": "GET",
    "params": [
      {
        "name": "jumlah",
        "label": "jumlah",
        "type": "number",
        "required": true
      }
    ],
    "description": "Generate dummy Virtual Credit Card numbers (untuk testing).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/vccgen"
  },
  {
    "id": "vynaa_ep_621",
    "label": "Tools - Video to Audio",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/video2audio",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Konversi video ke audio.",
    "outputType": "audio",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/video2audio"
  },
  {
    "id": "vynaa_ep_622",
    "label": "Tools - Voice Remover",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/voiceremover",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Hapus suara vokal dari audio (karaoke).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/voiceremover"
  },
  {
    "id": "vynaa_ep_623",
    "label": "Tools - Web to Zip",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/web2zip",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Download seluruh website ke file ZIP.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/web2zip"
  },
  {
    "id": "vynaa_ep_624",
    "label": "Tools - WebP to MP4",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/webp2mp4",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Konversi WebP animasi ke MP4.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/webp2mp4"
  },
  {
    "id": "vynaa_ep_625",
    "label": "Tools - WebP to PNG",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/webp2png",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Konversi WebP ke PNG.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/webp2png"
  },
  {
    "id": "vynaa_ep_626",
    "label": "Tools - WhatMusic (Shazam)",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/whatmusic",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Identifikasi judul lagu dari URL audio/video.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/whatmusic"
  },
  {
    "id": "vynaa_ep_627",
    "label": "Tools - Whois Subdomain",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/whois-subdo",
    "method": "GET",
    "params": [
      {
        "name": "subdomain",
        "label": "subdomain",
        "type": "text",
        "required": true
      },
      {
        "name": "domain",
        "label": "domain",
        "type": "text",
        "required": true
      }
    ],
    "description": "Lookup info subdomain.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/whois-subdo"
  },
  {
    "id": "vynaa_ep_628",
    "label": "Tools - YouTube Transcript",
    "category": "Tools",
    "group": "Tools",
    "endpoint": "/api/tools/yt-transcript",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      }
    ],
    "description": "Ambil transcript otomatis dari video YouTube.",
    "outputType": "video",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Tools",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/tools/yt-transcript"
  },
  {
    "id": "vynaa_ep_629",
    "label": "VIP - Bypass reCAPTCHA v3",
    "category": "VIP",
    "group": "VIP",
    "endpoint": "/api/vip/bypassrecaptcha",
    "method": "GET",
    "params": [
      {
        "name": "url",
        "label": "URL",
        "type": "url",
        "required": true
      },
      {
        "name": "siteKey",
        "label": "siteKey",
        "type": "text",
        "required": true
      }
    ],
    "description": "Bypass Google reCAPTCHA v3 dengan menghasilkan token valid berdasarkan URL & site key target. VIP only.",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: VIP",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/vip/bypassrecaptcha"
  },
  {
    "id": "vynaa_ep_630",
    "label": "Vokal - HALAH",
    "category": "Vokal",
    "group": "Vokal",
    "endpoint": "/api/vokal/halah",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Ubah seluruh huruf vokal pada teks menjadi pola \"halah\".",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Vokal",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/vokal/halah"
  },
  {
    "id": "vynaa_ep_631",
    "label": "Vokal - HELEH",
    "category": "Vokal",
    "group": "Vokal",
    "endpoint": "/api/vokal/heleh",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Ubah seluruh huruf vokal pada teks menjadi pola \"heleh\".",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Vokal",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/vokal/heleh"
  },
  {
    "id": "vynaa_ep_632",
    "label": "Vokal - HILIH",
    "category": "Vokal",
    "group": "Vokal",
    "endpoint": "/api/vokal/hilih",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Ubah seluruh huruf vokal pada teks menjadi pola \"hilih\".",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Vokal",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/vokal/hilih"
  },
  {
    "id": "vynaa_ep_633",
    "label": "Vokal - HOLOH",
    "category": "Vokal",
    "group": "Vokal",
    "endpoint": "/api/vokal/holoh",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Ubah seluruh huruf vokal pada teks menjadi pola \"holoh\".",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Vokal",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/vokal/holoh"
  },
  {
    "id": "vynaa_ep_634",
    "label": "Vokal - HULUH",
    "category": "Vokal",
    "group": "Vokal",
    "endpoint": "/api/vokal/huluh",
    "method": "GET",
    "params": [
      {
        "name": "text",
        "label": "text",
        "type": "text",
        "required": true
      }
    ],
    "description": "Ubah seluruh huruf vokal pada teks menjadi pola \"huluh\".",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Vokal",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/vokal/huluh"
  },
  {
    "id": "vynaa_ep_635",
    "label": "Wallpaper - Aesthetic",
    "category": "Wallpaper",
    "group": "Wallpaper",
    "endpoint": "/api/wallpaper/aesthetic",
    "method": "GET",
    "params": [],
    "description": "Random wallpaper aesthetic.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Wallpaper",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/wallpaper/aesthetic"
  },
  {
    "id": "vynaa_ep_636",
    "label": "Wallpaper - Anjing",
    "category": "Wallpaper",
    "group": "Wallpaper",
    "endpoint": "/api/wallpaper/anjing",
    "method": "GET",
    "params": [],
    "description": "Random wallpaper anjing.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Wallpaper",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/wallpaper/anjing"
  },
  {
    "id": "vynaa_ep_637",
    "label": "Wallpaper - Boneka Chucky",
    "category": "Wallpaper",
    "group": "Wallpaper",
    "endpoint": "/api/wallpaper/boneka-chucky",
    "method": "GET",
    "params": [],
    "description": "Random wallpaper boneka Chucky.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Wallpaper",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/wallpaper/boneka-chucky"
  },
  {
    "id": "vynaa_ep_638",
    "label": "Wallpaper - Cecan",
    "category": "Wallpaper",
    "group": "Wallpaper",
    "endpoint": "/api/wallpaper/cecan",
    "method": "GET",
    "params": [],
    "description": "Random wallpaper cewek cantik.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Wallpaper",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/wallpaper/cecan"
  },
  {
    "id": "vynaa_ep_639",
    "label": "Wallpaper - Cecan V2",
    "category": "Wallpaper",
    "group": "Wallpaper",
    "endpoint": "/api/wallpaper/cecan2",
    "method": "GET",
    "params": [],
    "description": "Random wallpaper cewek cantik (V2).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Wallpaper",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/wallpaper/cecan2"
  },
  {
    "id": "vynaa_ep_640",
    "label": "Wallpaper - Cogan",
    "category": "Wallpaper",
    "group": "Wallpaper",
    "endpoint": "/api/wallpaper/cogan",
    "method": "GET",
    "params": [],
    "description": "Random wallpaper cowok ganteng.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Wallpaper",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/wallpaper/cogan"
  },
  {
    "id": "vynaa_ep_641",
    "label": "Wallpaper - Cogan V2",
    "category": "Wallpaper",
    "group": "Wallpaper",
    "endpoint": "/api/wallpaper/cogan2",
    "method": "GET",
    "params": [],
    "description": "Random wallpaper cowok ganteng (V2).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Wallpaper",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/wallpaper/cogan2"
  },
  {
    "id": "vynaa_ep_642",
    "label": "Wallpaper - Cosplay",
    "category": "Wallpaper",
    "group": "Wallpaper",
    "endpoint": "/api/wallpaper/cosplay",
    "method": "GET",
    "params": [],
    "description": "Random gambar cosplay (JPEG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Wallpaper",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/wallpaper/cosplay"
  },
  {
    "id": "vynaa_ep_643",
    "label": "Wallpaper - Couple PP",
    "category": "Wallpaper",
    "group": "Wallpaper",
    "endpoint": "/api/randomgambar/couplepp",
    "method": "GET",
    "params": [],
    "description": "Random foto profil pasangan (cowok & cewek). Balas JSON berisi 2 URL.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Wallpaper",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/randomgambar/couplepp"
  },
  {
    "id": "vynaa_ep_644",
    "label": "Wallpaper - Cyberspace",
    "category": "Wallpaper",
    "group": "Wallpaper",
    "endpoint": "/api/wallpaper/cyberspace",
    "method": "GET",
    "params": [],
    "description": "Random wallpaper cyberspace.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Wallpaper",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/wallpaper/cyberspace"
  },
  {
    "id": "vynaa_ep_645",
    "label": "Wallpaper - Dark Jokes",
    "category": "Wallpaper",
    "group": "Wallpaper",
    "endpoint": "/api/random/darkjokes",
    "method": "GET",
    "params": [],
    "description": "Random gambar dark jokes (JPEG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Wallpaper",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/random/darkjokes"
  },
  {
    "id": "vynaa_ep_646",
    "label": "Wallpaper - Gaming",
    "category": "Wallpaper",
    "group": "Wallpaper",
    "endpoint": "/api/wallpaper/gaming",
    "method": "GET",
    "params": [],
    "description": "Random wallpaper gaming.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Wallpaper",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/wallpaper/gaming"
  },
  {
    "id": "vynaa_ep_647",
    "label": "Wallpaper - Hacker",
    "category": "Wallpaper",
    "group": "Wallpaper",
    "endpoint": "/api/wallpaper/hacker",
    "method": "GET",
    "params": [],
    "description": "Random wallpaper bertema hacker.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Wallpaper",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/wallpaper/hacker"
  },
  {
    "id": "vynaa_ep_648",
    "label": "Wallpaper - Islami",
    "category": "Wallpaper",
    "group": "Wallpaper",
    "endpoint": "/api/wallpaper/islami",
    "method": "GET",
    "params": [],
    "description": "Random wallpaper Islami.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Wallpaper",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/wallpaper/islami"
  },
  {
    "id": "vynaa_ep_649",
    "label": "Wallpaper - Justina",
    "category": "Wallpaper",
    "group": "Wallpaper",
    "endpoint": "/api/wallpaper/justina",
    "method": "GET",
    "params": [],
    "description": "Random wallpaper Justina.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Wallpaper",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/wallpaper/justina"
  },
  {
    "id": "vynaa_ep_650",
    "label": "Wallpaper - Kartun",
    "category": "Wallpaper",
    "group": "Wallpaper",
    "endpoint": "/api/wallpaper/kartun",
    "method": "GET",
    "params": [],
    "description": "Random wallpaper kartun.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Wallpaper",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/wallpaper/kartun"
  },
  {
    "id": "vynaa_ep_651",
    "label": "Wallpaper - Kata-kata",
    "category": "Wallpaper",
    "group": "Wallpaper",
    "endpoint": "/api/wallpaper/katakata",
    "method": "GET",
    "params": [],
    "description": "Random wallpaper bertema kata-kata/quotes.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Wallpaper",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/wallpaper/katakata"
  },
  {
    "id": "vynaa_ep_652",
    "label": "Wallpaper - K-Pop",
    "category": "Wallpaper",
    "group": "Wallpaper",
    "endpoint": "/api/wallpaper/kpop",
    "method": "GET",
    "params": [],
    "description": "Random wallpaper artis K-Pop.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Wallpaper",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/wallpaper/kpop"
  },
  {
    "id": "vynaa_ep_653",
    "label": "Wallpaper - Kucing",
    "category": "Wallpaper",
    "group": "Wallpaper",
    "endpoint": "/api/wallpaper/kucing",
    "method": "GET",
    "params": [],
    "description": "Random wallpaper kucing.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Wallpaper",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/wallpaper/kucing"
  },
  {
    "id": "vynaa_ep_654",
    "label": "Wallpaper - Meme",
    "category": "Wallpaper",
    "group": "Wallpaper",
    "endpoint": "/api/random/meme",
    "method": "GET",
    "params": [],
    "description": "Random gambar meme (JPEG/PNG).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Wallpaper",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/random/meme"
  },
  {
    "id": "vynaa_ep_655",
    "label": "Wallpaper - Mobil",
    "category": "Wallpaper",
    "group": "Wallpaper",
    "endpoint": "/api/wallpaper/mobil",
    "method": "GET",
    "params": [],
    "description": "Random wallpaper mobil.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Wallpaper",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/wallpaper/mobil"
  },
  {
    "id": "vynaa_ep_656",
    "label": "Wallpaper - Motor",
    "category": "Wallpaper",
    "group": "Wallpaper",
    "endpoint": "/api/wallpaper/motor",
    "method": "GET",
    "params": [],
    "description": "Random wallpaper motor.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Wallpaper",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/wallpaper/motor"
  },
  {
    "id": "vynaa_ep_657",
    "label": "Wallpaper - Mountain",
    "category": "Wallpaper",
    "group": "Wallpaper",
    "endpoint": "/api/wallpaper/mountain",
    "method": "GET",
    "params": [],
    "description": "Random wallpaper pemandangan gunung.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Wallpaper",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/wallpaper/mountain"
  },
  {
    "id": "vynaa_ep_658",
    "label": "Wallpaper - Programing",
    "category": "Wallpaper",
    "group": "Wallpaper",
    "endpoint": "/api/wallpaper/programing",
    "method": "GET",
    "params": [],
    "description": "Random wallpaper bertema coding/programming.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Wallpaper",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/wallpaper/programing"
  },
  {
    "id": "vynaa_ep_659",
    "label": "Wallpaper - PUBG",
    "category": "Wallpaper",
    "group": "Wallpaper",
    "endpoint": "/api/wallpaper/pubg",
    "method": "GET",
    "params": [],
    "description": "Random wallpaper PUBG.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Wallpaper",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/wallpaper/pubg"
  },
  {
    "id": "vynaa_ep_660",
    "label": "Wallpaper - Tata Surya",
    "category": "Wallpaper",
    "group": "Wallpaper",
    "endpoint": "/api/wallpaper/tatasurya",
    "method": "GET",
    "params": [],
    "description": "Random wallpaper tata surya / antariksa.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Wallpaper",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/wallpaper/tatasurya"
  },
  {
    "id": "vynaa_ep_661",
    "label": "Wallpaper - Teknologi",
    "category": "Wallpaper",
    "group": "Wallpaper",
    "endpoint": "/api/wallpaper/teknologi",
    "method": "GET",
    "params": [],
    "description": "Random wallpaper teknologi.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Wallpaper",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/wallpaper/teknologi"
  },
  {
    "id": "vynaa_ep_662",
    "label": "Wallpaper - HP",
    "category": "Wallpaper",
    "group": "Wallpaper",
    "endpoint": "/api/wallpaper/wallhp",
    "method": "GET",
    "params": [],
    "description": "Random wallpaper untuk handphone.",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Wallpaper",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/wallpaper/wallhp"
  },
  {
    "id": "vynaa_ep_663",
    "label": "Wallpaper - HP V2",
    "category": "Wallpaper",
    "group": "Wallpaper",
    "endpoint": "/api/wallpaper/wallhp2",
    "method": "GET",
    "params": [],
    "description": "Random wallpaper untuk handphone (V2).",
    "outputType": "image",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Wallpaper",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/wallpaper/wallhp2"
  },
  {
    "id": "vynaa_ep_664",
    "label": "Webzone - Gore",
    "category": "Webzone",
    "group": "Webzone",
    "endpoint": "/api/webzone/gore",
    "method": "GET",
    "params": [],
    "description": "Random gore site list (JSON).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Contains restricted keyword: gore",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/webzone/gore"
  },
  {
    "id": "vynaa_ep_665",
    "label": "Webzone - Grow & Garden Stock",
    "category": "Webzone",
    "group": "Webzone",
    "endpoint": "/api/webzone/grow-and-garden-stock",
    "method": "GET",
    "params": [],
    "description": "Current Grow A Garden stock (JSON).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Webzone",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/webzone/grow-and-garden-stock"
  },
  {
    "id": "vynaa_ep_666",
    "label": "Webzone - Grow & Garden Weather",
    "category": "Webzone",
    "group": "Webzone",
    "endpoint": "/api/webzone/grow-and-garden-weather",
    "method": "GET",
    "params": [],
    "description": "Current Grow A Garden weather (JSON).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Webzone",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/webzone/grow-and-garden-weather"
  },
  {
    "id": "vynaa_ep_667",
    "label": "Webzone - GSMArena",
    "category": "Webzone",
    "group": "Webzone",
    "endpoint": "/api/webzone/gsmarena",
    "method": "GET",
    "params": [
      {
        "name": "query",
        "label": "query",
        "type": "text",
        "required": true
      }
    ],
    "description": "Search phone specs on GSMArena (JSON).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Webzone",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/webzone/gsmarena"
  },
  {
    "id": "vynaa_ep_668",
    "label": "Webzone - Nhentai Detail",
    "category": "Webzone",
    "group": "Webzone",
    "endpoint": "/api/webzone/nhentai-detail",
    "method": "GET",
    "params": [
      {
        "name": "query",
        "label": "query",
        "type": "text",
        "required": true
      }
    ],
    "description": "Get nhentai detail by ID (JSON).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Contains restricted keyword: nhentai",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/webzone/nhentai-detail"
  },
  {
    "id": "vynaa_ep_669",
    "label": "Webzone - Nhentai Search",
    "category": "Webzone",
    "group": "Webzone",
    "endpoint": "/api/webzone/nhentai-search",
    "method": "GET",
    "params": [
      {
        "name": "query",
        "label": "query",
        "type": "text",
        "required": true
      }
    ],
    "description": "Search nhentai by keyword (JSON).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Contains restricted keyword: nhentai",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/webzone/nhentai-search"
  },
  {
    "id": "vynaa_ep_670",
    "label": "Webzone - WhatAnime",
    "category": "Webzone",
    "group": "Webzone",
    "endpoint": "/api/webzone/whatanime",
    "method": "GET",
    "params": [
      {
        "name": "query",
        "label": "query",
        "type": "text",
        "required": true
      }
    ],
    "description": "Identify an anime from an image URL (JSON).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Webzone",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/webzone/whatanime"
  },
  {
    "id": "vynaa_ep_671",
    "label": "Webzone - Whois",
    "category": "Webzone",
    "group": "Webzone",
    "endpoint": "/api/webzone/whois",
    "method": "GET",
    "params": [
      {
        "name": "query",
        "label": "query",
        "type": "text",
        "required": true
      }
    ],
    "description": "Lookup WHOIS info for a domain (JSON).",
    "outputType": "json",
    "plan": "free",
    "safe": false,
    "enabledByDefault": false,
    "sensitiveReason": "Unrecognized category: Webzone",
    "tags": [
      "unsafe",
      "sensitive"
    ],
    "rawUrl": "https://api.vtech.biz.id/api/webzone/whois"
  }
];