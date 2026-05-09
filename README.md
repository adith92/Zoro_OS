<div align="center">

# 🐱🚀 Zoro_OS

### 🌌 Soft Spaceship Cockpit OS untuk AI, Vynaa Tools, SumoPod Chat, Image Lab, Islamic Corner, Downloader Galaxy, Games, News, Search, dan Tools Lab

**Zoro_OS** adalah dashboard multiverse berbasis React + Vite yang dibuat untuk jadi cockpit AI pribadi: ada chat assistant bernama Zoro, registry tool Vynaa, SumoPod AI Gateway, visual 3D spaceship, theme engine, voice/personality system, endpoint history, dan modul-modul utilitas yang bisa dikembangkan lanjut di Google AI Studio. Bayangkan terminal luar angkasa, kucing hologram, dan toolbox AI masuk ke satu layar. 🛰️✨

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-3D%20Cockpit-000000?logo=threedotjs&logoColor=white)](https://threejs.org/)
[![Google AI Studio](https://img.shields.io/badge/Built%20with-Google%20AI%20Studio-4285F4?logo=google&logoColor=white)](https://ai.studio/)

</div>

---

## 📌 GitHub About / Description siap pakai

> **Zoro_OS 🐱🚀 Soft Spaceship Cockpit OS berbasis React + Vite + TypeScript, lengkap dengan Zoro AI Chat, Vynaa Tool Registry, SumoPod AI Gateway, Image Lab, Islamic Corner, Downloader Galaxy, Games, News, Search, Tools Lab, 3D universe canvas, theme engine, voice/personality system, dan endpoint history.**

**Versi pendek:**

> **Zoro_OS 🐱🚀 AI multiverse cockpit dengan Zoro Chat, Vynaa tools, SumoPod, 3D spaceship UI, theme engine, voice mascot, dan modular tool hub.**

**Topics rekomendasi:**

`zoro-os` `ai-dashboard` `vynaa-api` `sumopod` `react` `vite` `typescript` `threejs` `react-three-fiber` `zustand` `tailwindcss` `google-ai-studio` `tool-registry` `ai-cockpit`

---

## 🌟 Ringkasan Project

**Zoro_OS** adalah aplikasi cockpit modular untuk menjalankan banyak fungsi AI dan utility dari satu UI bertema spaceship. App ini punya dua lapisan besar:

- 🧠 **AI Assistant Layer**: chat dengan Zoro memakai Vynaa, SumoPod, atau mode provider lain.
- 🧰 **Universal Tool Layer**: modul tool berbasis registry endpoint, lengkap dengan form otomatis, output viewer, toast, dan endpoint history.

Zoro bukan cuma tampilan lucu. Di dalam store, Zoro punya mood, voice, personality, contextual remarks, action history, current route context, dan mascot state. Jadi project ini punya fondasi untuk tumbuh jadi AI cockpit yang terasa hidup. 🐱⚙️

---

## 🧩 Fitur Utama

| Area | Fitur |
|---|---|
| 🏠 **Dashboard** | Hero Zoro_OS, system status, provider aktif, API status, recent activity |
| 💬 **Zoro AI Chat** | Chat assistant dengan Vynaa SimSimi atau SumoPod model, Markdown render, voice input/output |
| 🧠 **AI Hub** | Tool AI dari registry Vynaa: Claude, GPT, Copilot, Pollinations, DeepImg, dan lainnya |
| 🖼️ **Image Lab** | Generator/utility gambar: code image, brat text, quote bubble, QR/image tools, upscaler |
| 📥 **Downloader Galaxy** | Modul downloader berbasis endpoint Vynaa, untuk penggunaan legal dan authorized content |
| 🕌 **Islamic Corner** | Surah, tafsir, Asmaul Husna, doa harian, bacaan shalat, niat sholat, kisah nabi |
| 🎮 **Games & Quiz** | Asah Otak, Family 100, Kuis Islami, Math Quiz, Siapakah Aku, Tebak Gambar |
| 📰 **News Deck** | CNBC, CNN, Detik, Kompas, dan news endpoint lain dari registry |
| 🔎 **Search Utility** | Google Search, image search, Wikipedia, Playstore, wallpaper, GitHub user status |
| 🧪 **Tools Lab** | URL shortener, screenshot website desktop/mobile, QR Code Generator |
| 🌌 **3D Spaceship Canvas** | React Three Fiber background dengan stars, particles, hologram core, bloom, glitch, noise |
| 🎨 **Theme Engine** | Preset warna, custom hex, bloom, glitch, scanline, star density, motion, glass blur |
| 🔊 **Zoro Voice** | Browser TTS / Vynaa TTS setting, volume, pitch, rate, voice preview |
| 🐱 **Zoro Personality** | Mood, humor, insight, sass, contextual remarks, mascot state |
| 🧾 **Endpoint History** | Log tool execution, status success/failed, route/tool action tracking |
| 🔐 **API Settings** | Vynaa API key, SumoPod API key, model selection, proxy mode, developer toggles |

---

## 🧭 App Routes / Modul Navigasi

Zoro_OS memakai `react-router-dom` dengan layout utama dan nested routes.

| Route | Modul |
|---|---|
| `/` | Dashboard / Home |
| `/chat` | Zoro AI Chat |
| `/hub` | AI Hub |
| `/image` | Image Lab |
| `/downloader` | Downloader Galaxy |
| `/games` | Zoro Adventures |
| `/gamesquiz` | Games & Quiz |
| `/islamic` | Islamic Corner |
| `/news` | News Deck |
| `/search` | Search Utility |
| `/tools` | Tools Lab |
| `/settings` | System Configuration |
| `*` | 404 Dimension Not Found |

Sidebar sudah mobile-friendly dengan overlay menu dan provider switcher. 🛸

---

## 🏠 Dashboard Detail

Dashboard menampilkan identitas utama Zoro_OS:

- 🐱 Logo/mascot Zoro
- 🚀 CTA ke Chat dan Multiverse Hub
- 📊 Stats: Multiverse Tools, AI Models, Response Speed
- ⚙️ Core System Status
- 🔑 Current Provider: Vynaa / SumoPod / Dual
- 🧪 Vynaa API Engine status
- 🧠 Neural Network Sync placeholder
- 🔊 Voice Synthesis status
- 🧾 Recent endpoint activity dari `endpointHistory`

---

## 💬 Zoro AI Chat

Chat adalah ruang komunikasi utama dengan Zoro.

Fitur:

- Markdown rendering via `react-markdown`
- Provider selector dari sidebar
- Voice input memakai Web Speech Recognition helper
- Voice output memakai `speakAsZoro`
- Mascot state: idle, listening, thinking, speaking, excited, sleepy, error
- Contextual system prompt untuk SumoPod
- Route/tool/action history ikut masuk ke personality context
- Error fallback dengan pesan gangguan komunikasi antar galaksi 🛰️

### Provider Chat

| Provider | Cara kerja |
|---|---|
| `sumopod` | Chat completions ke SumoPod `/v1/chat/completions` dengan selected model |
| `vynaa` | Vynaa SimSimi endpoint dengan prompt berperan sebagai Zoro |
| `dual` | Placeholder / maintenance mode |

### SumoPod model list awal

- `gpt-3.5-turbo`
- `gpt-4`
- `gpt-4o`
- `claude-3-opus-20240229`
- `claude-3-sonnet-20240229`
- `gemini-1.5-pro-latest`

---

## 🧰 Universal Tool Engine

Mayoritas modul Zoro_OS memakai satu komponen reusable:

```txt
src/components/modules/UniversalToolPage.tsx
```

Cara kerjanya:

```txt
1. Ambil endpoint dari VYNAA_ENDPOINTS
2. Filter berdasarkan category
3. Tampilkan daftar tool di panel kiri
4. User pilih tool
5. EndpointForm membuat form dari params endpoint
6. callVynaaEndpoint menjalankan request
7. ToolResultViewer menampilkan JSON/image/audio/video/text
8. Endpoint history dan Zoro action log diperbarui
```

Komponen penting:

| Komponen | Fungsi |
|---|---|
| `UniversalToolPage` | Page generik untuk semua kategori tool |
| `EndpointForm` | Auto-generate form dari metadata endpoint |
| `ToolResultViewer` | Render output JSON, text, image, audio, atau video |
| `callVynaaEndpoint` | Builder URL + fetch + output parser |
| `VYNAA_ENDPOINTS` | Registry gabungan generated + fallback endpoints |

---

## 🗂️ Vynaa Registry System

Registry endpoint disusun dari dua sumber:

1. `vynaaEndpoints.generated.ts`  
   Hasil sync otomatis dari dokumentasi Vynaa.

2. `vynaaEndpoints.fallback.ts`  
   Daftar fallback manual yang aman dan enabled by default.

File penggabung:

```txt
src/data/vynaaRegistry.ts
```

Fungsi registry:

- Merge generated + fallback endpoints
- Fix missing field seperti `group` dan `tags`
- Deduplicate berdasarkan endpoint + label
- Sort by category dan label
- Filter safe/enabled endpoints
- Search endpoint berdasarkan label, path, atau description

---

## 🧯 Endpoint Safety & Governance

Zoro_OS punya safety classifier untuk endpoint hasil sync:

```txt
src/api/vynaaSafety.ts
```

Fungsinya:

- Menandai endpoint aman/tidak aman
- Menonaktifkan endpoint sensitif secara default
- Memberi `sensitiveReason` dan `tags`
- Mengizinkan safe categories seperti AI, image generator, Islamic, games, news, search, status, tools, sticker/emoji, dan media utility

Catatan penting: jangan asal enable semua endpoint dari docs. Pertahankan filtering `safe && enabledByDefault` untuk UI publik. 🛡️

---

## 🤖 AI Hub

AI Hub memakai category:

```txt
ai
```

Contoh tool fallback:

- Claude
- SimSimi
- ChatGPT 3.5
- ChatGPT 4
- Copilot
- Pollinations Text
- Pollinations Image
- Pollinations TTS
- DeepImg

Output bisa berupa JSON, image, audio, atau text sesuai endpoint.

---

## 🖼️ Image Lab

Image Lab memakai category:

```txt
image
```

Contoh tool:

- Carbon Code image
- Brat Text image
- Quote Chat Bubble
- Image Upscaler dari URL
- QR/image maker via Tools Lab registry

Ide lanjut:

- Drag & drop image URL
- Image preview grid
- Save output locally
- Batch prompt runner
- Prompt history

---

## 📥 Downloader Galaxy

Downloader Galaxy memakai category:

```txt
downloader
```

Contoh endpoint fallback:

- YouTube audio/search utility
- YouTube MP4 utility
- TikTok media utility
- Facebook media utility
- Instagram media utility
- SoundCloud utility
- MediaFire utility

⚠️ Gunakan hanya untuk konten yang kamu miliki, konten publik yang memang diizinkan, atau penggunaan yang sesuai hukum/platform. Untuk production, tambahkan policy notice dan rate limit.

---

## 🕌 Islamic Corner

Islamic Corner memakai category:

```txt
islamic
```

Contoh tool:

- Surah Reader
- Tafsir Surah
- Asmaul Husna
- Doa Harian
- Bacaan Shalat
- Niat Sholat
- Kisah Nabi

Catatan pengembangan: untuk fitur edukasi Islam, validasi sumber dan tampilkan referensi bila data dipakai untuk publik. 🌙

---

## 🎮 Games & Quiz

Games & Quiz memakai category:

```txt
games
```

Contoh tool:

- Asah Otak
- Family 100
- Kuis Islami
- Math Quiz
- Siapakah Aku
- Tebak Gambar

Ide lanjut:

- Score system lokal
- Timer
- Leaderboard
- Streak harian
- Mode anak-anak

---

## 📰 News Deck

News Deck memakai category:

```txt
news
```

Contoh tool:

- CNBC News
- CNN News
- Detik News
- Kompas News

Ide lanjut:

- Card renderer khusus artikel
- Filter kategori berita
- Bookmark lokal
- Summarize with SumoPod
- News refresh timestamp

---

## 🔎 Search Utility

Search Utility memakai category:

```txt
search
```

Contoh tool:

- Google Search
- Google Image Search
- Wikipedia
- Playstore
- Wallpaper Search
- GitHub user status

Ide lanjut:

- Unified result cards
- Copy result link
- Search history
- Export result JSON

---

## 🧪 Tools Lab

Tools Lab memakai category:

```txt
tools
```

Contoh tool:

- URL Shortener
- Website Screenshot Desktop
- Website Screenshot Mobile
- QR Code Generator

Ide lanjut:

- Color picker for QR
- Screenshot viewport presets
- Download button for generated images
- Tool favorites

---

## 🌌 3D Spaceship Universe Canvas

Background cockpit memakai:

- `@react-three/fiber`
- `@react-three/drei`
- `@react-three/postprocessing`
- `three`

Fitur visual:

- Stars field
- Soft particles
- Hologram shader sphere
- Orbit ring
- Mouse/touch reactive motion
- Scroll reactive motion
- Bloom postprocessing
- Glitch postprocessing
- Noise layer
- Error boundary fallback
- Theme color sync dari Zustand store

File utama:

```txt
src/components/canvas/SpaceshipUniverseCanvas.tsx
```

---

## 🎨 Theme Engine

Theme system memakai Zustand persist dan CSS variables.

Preset:

- 🐱 Zoro Classic
- 🌌 Deep Space
- 🍬 Nebula Candy
- 🟢 Emerald Orbit
- ☀️ Solar Cat
- 🎛️ Custom Hex

Config visual:

- Primary color
- Secondary color
- Accent color
- Bloom intensity
- Glitch intensity
- Scanline intensity
- Star density
- Motion intensity
- Glass blur

Ada tombol **Reduce For Mobile** untuk menurunkan efek agar performa HP lebih ringan.

---

## 🔊 Zoro Voice System

Voice settings:

- Enable/disable voice output
- Provider: Browser TTS atau Vynaa Neural TTS
- Volume
- Pitch
- Rate
- Vocalizations toggle
- Voice input toggle placeholder
- Preview voice button

Komponen/utility terkait:

```txt
src/lib/zoroVoice.ts
src/lib/zoroSpeechRecognition.ts
src/components/mascot/ZoroMascot.tsx
src/components/mascot/ZoroAssistantDock.tsx
```

---

## 🐱 Zoro Personality System

Personality settings:

- Contextual remarks enabled
- Humor level 0-10
- Insight level 0-10
- Sass level 0-10
- Mood: calm, curious, excited, sleepy, captain

Context yang dipakai:

- Current route
- Current tool
- Recent actions
- Theme mood/palette
- Chat/tool activity

Ini fondasi kuat untuk membuat Zoro terasa seperti companion, bukan tombol UI biasa. 🐾

---

## 💾 Persisted State

Store utama:

```txt
src/store/useStore.ts
```

Persist key:

```txt
zoro-os-settings
```

Data yang disimpan:

- API keys lokal
- Selected provider
- Selected model
- Selected Vynaa category
- Theme settings
- Voice settings
- Personality settings
- Mascot state/context
- Developer mode/proxy flags

Catatan: `vynaaApiStatus` dan `endpointHistory` tidak dipersist penuh melalui partialize filter tertentu.

---

## 🔐 API Configuration

### Vynaa

- Base URL default: `https://vynaa.web.id`
- API key dimasukkan di Settings
- Request builder otomatis menambahkan `apikey`
- Optional proxy mode tersedia: `/api/vynaa-proxy/...`

### SumoPod

- Base URL default: `https://ai.sumopod.com/v1`
- API key dimasukkan di Settings
- Chat completions memakai Bearer token
- Model dipilih dari Settings

⚠️ Untuk production publik, jangan simpan API key sensitif di client. Buat backend proxy dengan session/auth/rate limit.

---

## 🔁 Sync Vynaa Docs

Script:

```bash
npm run sync:vynaa
```

File:

```txt
scripts/sync-vynaa-docs.ts
```

Fungsi:

- Fetch dokumentasi Vynaa
- Parse HTML dengan Cheerio
- Extract endpoint URL dan params
- Infer output type
- Classify safety
- Generate `vynaaEndpoints.generated.ts`
- Generate sync metadata

Catatan: setelah sync, review hasil generated endpoint sebelum dirilis. Jangan auto-enable endpoint yang belum jelas aman.

---

## 🛠️ Tech Stack

| Bagian | Teknologi |
|---|---|
| UI | React 19 |
| Build Tool | Vite 6 |
| Bahasa | TypeScript |
| Routing | react-router-dom 7 |
| Styling | Tailwind CSS 4 |
| State | Zustand + Persist |
| Async/Cache | TanStack React Query |
| Animasi | motion/react |
| 3D | three, @react-three/fiber, @react-three/drei |
| Postprocessing | @react-three/postprocessing |
| UI Primitive | Radix Dialog / Slot |
| Markdown | react-markdown |
| Toast | sonner |
| Icons | lucide-react |
| AI SDK | @google/genai |
| Docs Sync | cheerio + tsx |
| Server Support | express, @vercel/node |

---

## 📁 Struktur Penting

```txt
Zoro_OS/
├── README.md
├── package.json
├── vite.config.ts
├── scripts/
│   └── sync-vynaa-docs.ts
└── src/
    ├── App.tsx
    ├── pages/
    │   ├── Home.tsx
    │   ├── Chat.tsx
    │   ├── Settings.tsx
    │   ├── AIHub.tsx
    │   ├── ImageLab.tsx
    │   ├── DownloaderGalaxy.tsx
    │   ├── IslamicCorner.tsx
    │   ├── GamesQuiz.tsx
    │   ├── NewsDeck.tsx
    │   ├── SearchUtility.tsx
    │   └── ToolsLab.tsx
    ├── components/
    │   ├── layout/
    │   ├── modules/
    │   ├── ui/
    │   ├── canvas/
    │   ├── mascot/
    │   └── theme/
    ├── api/
    │   ├── universalVynaa.ts
    │   ├── sumopod.ts
    │   ├── vynaaSafety.ts
    │   └── vynaaOutput.ts
    ├── data/
    │   ├── vynaaRegistry.ts
    │   ├── vynaaEndpoints.fallback.ts
    │   └── vynaaEndpoints.generated.ts
    ├── lib/
    ├── store/
    │   └── useStore.ts
    └── types/
        └── vynaa.ts
```

---

## 🚀 Jalankan Lokal

### 1. Install dependency

```bash
npm install
```

### 2. Jalankan dev server

```bash
npm run dev
```

Default:

```txt
http://localhost:3000
```

### 3. Build production

```bash
npm run build
```

### 4. Preview build

```bash
npm run preview
```

### 5. Type-check

```bash
npm run lint
```

### 6. Sync Vynaa docs

```bash
npm run sync:vynaa
```

---

## 🔑 Setup API Keys

Buka halaman:

```txt
/settings
```

Lalu isi:

- Vynaa API Key
- SumoPod API Key
- Selected model
- Optional proxy mode

Catatan keamanan:

- Jangan commit API key
- Jangan taruh key di README
- Jangan hardcode credential di source
- Untuk production, pindahkan API call ke backend proxy
- Gunakan environment secret manager bila deploy ke Vercel/hosting lain

---

## 🧠 Cara Kerja Singkat

```txt
1. User pilih provider di sidebar
2. User masuk modul: AI, Image, Downloader, Islamic, Games, News, Search, Tools
3. UniversalToolPage membaca endpoint berdasarkan category
4. EndpointForm membuat input otomatis dari params
5. callVynaaEndpoint membuat URL dan fetch ke Vynaa/proxy
6. ToolResultViewer menampilkan output sesuai tipe
7. endpointHistory dan zoroRecentActions diperbarui
8. Zoro mascot memberi state/remark sesuai aksi
```

---

## 🧩 Panduan Pengembangan Lanjutan

### ➕ Tambah halaman tool baru

1. Tambah route di `src/App.tsx`
2. Tambah nav item di `src/components/layout/Sidebar.tsx`
3. Buat page wrapper seperti:

```tsx
<UniversalToolPage category="nama_category" title="Nama Modul" icon={Icon} />
```

4. Tambahkan endpoint category di registry/fallback.

### ➕ Tambah endpoint manual

Edit:

```txt
src/data/vynaaEndpoints.fallback.ts
```

Format umum:

```ts
{
  id: "unique_id",
  label: "Tool Label",
  category: "tools",
  endpoint: "/path/to/endpoint",
  method: "GET",
  params: [{ name: "text", label: "Text", type: "text", required: true }],
  description: "Short description",
  outputType: "json",
  safe: true,
  enabledByDefault: true
}
```

### ➕ Tambah output renderer baru

Edit:

```txt
src/components/ui/ToolResultViewer.tsx
```

Contoh output yang bisa ditambah:

- file download cards
- table viewer
- article cards
- gallery cards
- structured Islamic content cards
- news cards

### ➕ Tambah parameter type baru

Edit:

```txt
src/components/ui/EndpointForm.tsx
src/types/vynaa.ts
```

Ide param type:

- number
- select
- textarea
- url
- color
- file
- boolean

### ➕ Backend proxy production

Buat endpoint server:

```txt
/api/vynaa-proxy/*
/api/sumopod/chat
```

Tujuan:

- API key tidak bocor
- Bisa rate limit
- Bisa audit log
- Bisa filter endpoint server-side
- Bisa enforce safety classifier

### ➕ Zoro personality upgrade

Area kerja:

```txt
src/lib/zoroPersonality.ts
src/lib/zoroContext.ts
src/store/useStore.ts
src/components/mascot/
```

Ide:

- Per-route greeting
- Per-tool warning/suggestion
- Memory ringkas lokal
- Mood berubah berdasarkan error/success
- Zoro tips saat user membuka settings/tool

---

## ✅ Checklist Sebelum Rilis

- [ ] Test Vynaa API key save/test
- [ ] Test SumoPod API key save/test
- [ ] Test chat Vynaa
- [ ] Test chat SumoPod
- [ ] Test voice output browser TTS
- [ ] Test voice input browser support
- [ ] Test semua category UniversalToolPage
- [ ] Test image/audio/video/json result viewer
- [ ] Test endpoint history
- [ ] Test theme presets
- [ ] Test custom hex theme
- [ ] Test Reduce For Mobile effects
- [ ] Test mobile sidebar
- [ ] Test 3D canvas performance di desktop dan mobile
- [ ] Review generated Vynaa endpoints setelah sync
- [ ] Pastikan unsafe/sensitive endpoints tidak enabled by default
- [ ] Pastikan API keys tidak masuk commit

---

## 🧪 Roadmap Pengembangan

### 🎯 Prioritas Cepat

- [ ] Rapikan Settings API test agar benar-benar ping endpoint
- [ ] Tambah copy result button di ToolResultViewer
- [ ] Tambah download button untuk image/audio/video output
- [ ] Tambah search/filter tool di UniversalToolPage
- [ ] Tambah favorite tools lokal
- [ ] Tambah clear endpoint history
- [ ] Tambah import/export settings JSON
- [ ] Tambah UI untuk selected Vynaa category

### 🚀 Prioritas Menengah

- [ ] Backend proxy untuk Vynaa dan SumoPod
- [ ] Better card renderer untuk News Deck
- [ ] Better card renderer untuk Islamic Corner
- [ ] Better media viewer untuk Downloader Galaxy
- [ ] Tool usage analytics lokal
- [ ] Zoro memory summaries
- [ ] Per-tool help prompt
- [ ] PWA installable mode

### 🪄 Prioritas AI Studio

- [ ] Zoro auto-suggest tool berdasarkan prompt user
- [ ] AI endpoint mapper dari docs Vynaa
- [ ] AI safety review untuk generated endpoints
- [ ] AI summarizer untuk JSON result panjang
- [ ] AI prompt enhancer untuk Image Lab
- [ ] AI answer composer dari Search/News results
- [ ] AI route assistant untuk menjelaskan modul aktif

### ☁️ Prioritas Production

- [ ] Server-side key storage
- [ ] User auth
- [ ] Usage limits per user
- [ ] Endpoint allowlist server-side
- [ ] Error monitoring
- [ ] Rate limit
- [ ] Audit logs
- [ ] Deployment notes for Vercel

---

## 🤖 Prompt Lanjutan untuk Google AI Studio

```txt
Lanjutkan project Zoro_OS tanpa mengubah struktur besar yang sudah ada.
Jangan hapus fitur existing: AppLayout, Sidebar, Dashboard, Chat, Settings, UniversalToolPage, EndpointForm, ToolResultViewer, Vynaa registry, SumoPod chat, Zoro mascot, Zoro voice, theme engine, 3D SpaceshipUniverseCanvas, endpoint history, dan route modules.
Pertahankan React + TypeScript + Vite + Tailwind CSS + Zustand + React Router + Three.js + motion/react.
Buat perubahan kecil, modular, dan aman.
Jangan hardcode API key atau credential rahasia di source code.
Jika menambah endpoint Vynaa, pastikan safe=true hanya untuk endpoint yang jelas aman dan sesuai policy.
Jika menambah generated endpoints, review safety classifier dulu sebelum enabledByDefault.
Jika menambah fitur production, prioritaskan backend proxy untuk Vynaa/SumoPod agar API key tidak bocor ke client.
Jika menambah UI result viewer, dukung JSON, text, image, audio, video, dan error state dengan rapi.
Jaga gaya visual soft spaceship cockpit, neon glass, Zoro mascot, dan mobile-friendly layout.
Jelaskan file mana yang diubah dan alasan perubahannya.
```

---

## 🧹 Script NPM

| Script | Fungsi |
|---|---|
| `npm run dev` | Menjalankan Vite dev server di port 3000 |
| `npm run build` | Build production |
| `npm run preview` | Preview build |
| `npm run clean` | Menghapus folder `dist` |
| `npm run lint` | Type-check dengan `tsc --noEmit` |
| `npm run sync:vynaa` | Sync dokumentasi Vynaa menjadi generated endpoint registry |

---

## 🧯 Known Notes

- `dual` provider di Chat masih maintenance/placeholder.
- Settings test API saat ini terlihat sederhana dan perlu diperkuat agar benar-benar call endpoint.
- Beberapa modul hanya wrapper category dari `UniversalToolPage`, jadi kualitas UX tergantung registry endpoint dan renderer.
- Downloader tools harus dipakai hanya untuk konten yang legal/authorized.
- Production publik perlu backend proxy supaya API key tidak terekspos di browser.
- Generated endpoint sync wajib direview sebelum dipakai luas.

---

## 🧭 Roadmap Mini

```txt
v0.1 ✅ Cockpit layout + Zoro dashboard
v0.2 ✅ Zoro AI Chat + provider switcher
v0.3 ✅ Universal Vynaa Tool Registry
v0.4 ✅ Theme engine + voice/personality + 3D universe canvas
v0.5 🔜 Tool search, favorites, better result cards
v0.6 🔜 Backend proxy + production-safe API flow
v0.7 🔜 Zoro auto-tool routing + AI result summarizer
```

---

<div align="center">

## 🐱🚀 Zoro_OS

**A soft spaceship cockpit for AI tools, neon utilities, and one very opinionated starship cat.**  
Bangun, pilih modul, jalankan tool, biarkan Zoro mengeong dari orbit. 🌌⚔️✨

</div>
