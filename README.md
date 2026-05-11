# 🌌 Zoro Universe 🐾✨

Zoro Universe adalah AI cockpit/dashboard berbasis VTECH API untuk chat, AI tools, image tools, downloader, search, news, games, utility tools, dan modul lain dalam satu dashboard futuristik.

## 🚀 Apa itu Zoro Universe?
Zoro Universe adalah platform all-in-one yang menghubungkan ratusan fungsi dari **VTECH API**. Kamu bisa berinteraksi dengan Zoro (asisten AI kucing kosmik), memainkan game, mengunduh video, atau memakai tools AI terbaru langsung dari browser. Semua dirancang dengan antarmuka luar angkasa yang elegan.

## ⚡ Fitur Utama
- **VTECH-only API system**: Seluruh tulang punggung aplikasi ini ditenagai murni oleh VTECH API yang super cepat.
- **Zoro Universe Chat**: Ngobrol bebas dengan Zoro atau model AI lainnya.
- **LLM Router**: Otomatis menangani fallback model jika model AI pilihanmu sedang tidak tersedia.
- **AI model selector**: Pilih dari puluhan model AI VTECH terbaru (Groq, DeepSeek, Gemma, dll).
- **VTECH AI Hub**: Portal untuk mengeksplorasi berbagai endpoint berbasis AI.
- **Universal Tool Page**: Satu halaman dinamis yang bisa me-render UI untuk ratusan tool berbeda.
- **Berbagai Modul**: Image tools, Downloader tools, Search tools, News tools, Games tools, dan Islamic tools.
- **Prompt presets**: Template chat kilat untuk berbagai keperluan.
- **Favorite tools**: Simpan endpoint VTECH favoritmu agar cepat diakses.
- **Recent Missions**: Lacak historis penggunaan endpoint-mu.
- **API Health Card**: Cek status koneksi VTECH API-mu kapan pun.
- **Developer Debug Panel aman**: Untuk troubleshooting cepat.
- **Browser localStorage API key**: Key tersimpan aman secara lokal di browser, tidak masuk ke database eksternal.

## 🤖 VTECH AI Chat
Zoro Universe Chat adalah modul utama di mana kamu bisa ngobrol santai atau melakukan tanya jawab dengan berbagai LLM dari VTECH. Model default utamanya adalah **Groq Compound** / **AI4Chat**, namun model dapat diubah kapan pun!

## 🧠 LLM Router
Jangan takut error 404! LLM Router di Zoro Universe akan mendeteksi ketika suatu AI path berubah atau obsolete, lalu otomatis melakukan pengalihan (fallback) ke model alternatif yang aman tanpa mengganggu kenyamanan chat.

## 🧰 VTECH Tools Hub
Akses ratusan alat siap pakai seperti downloader YouTube/TikTok, generator gambar (text-to-image), cek berita, cek resi, game tebak-tebakan, Al-Qur'an digital, dsb yang diambil langsung dari registry VTECH. 

## 🔐 Cara Isi VTECH API Key
Agar dapat memakai Zoro Universe dengan optimal, siapkan VTECH API Key dan ikuti langkah berikut:
1. Buka menu **Settings** (ikon gerigi).
2. Masukkan VTECH API Key kamu ke kolom yang disediakan.
3. Klik tombol **Save** 💾.
4. Klik **Test Connection** untuk mengecek internet & validitas API Key.
5. Key akan tersimpan secara eksklusif di localStorage browse-mu!
*(Catatan: Key akan hilang jika browser data di-clear. Jangan commit API key-mu ke GitHub!)*

## 🛠️ Cara Run Local
1. Clone repo ini: `git clone [URL_REPO]`
2. Masuk ke folder repo: `cd zoro-universe`
3. Install dependencies: `npm install`
4. Jalankan dev server Vite: `npm run dev`
5. Buka `localhost:3000` di beranda browsermu.

## 🌐 Deploy ke Vercel
1. Upload repo ke akun GitHub-mu.
2. Login ke **Vercel**, klik **Add New > Project**.
3. Hubungkan dengan repo GitHub Zoro Universe.
4. Vercel akan otomatis mengenali Vite. Gunakan default build command (`npm run build`) dan output directory (`dist`).
5. Klik **Deploy**.
6. (Opsional) Jika mengalami masalah CORS dari VTECH API, pastikan opsi **Proxy Mode** aktif di halaman Settings.
7. Setelah deploy selesai, buka Settings dan lakukan **Test Connection**.

## 📦 Scripts
- `npm run dev`: Menjalankan server development lokal.
- `npm run build`: Mem-build aplikasi untuk production.
- `npm run lint`: Mengecek error dan style guideline Typescript.

## 🧭 Struktur Folder
```text
/src
 ├── /api        (Call API logic & Universal VTECH Router)
 ├── /components (UI Reusable, Layout NavBar & Sidebar)
 ├── /data       (VTECH API Registry: generated + fallback)
 ├── /lib        (Utility formatters & voice lib)
 ├── /pages      (Pages: Chat, Home, Hub, Settings, UniversalToolPage dll)
 ├── /store      (Zustand state management)
 └── /types      (TypeScript definition/interfaces)
```

## 🧪 Testing Manual
- Cek tab **Settings** > input placeholder key (`YOUR_VTECH_API_KEY`) > *Test Connection* -> Pastikan pesan error jelas jika key salah.
- Cek tab **Chat** -> Pastikan bukan Claude Legacy yang muncul awal, melainkan Groq atau AI4Chat.
- Buka **AI Hub** -> Cek ketersediaan model AI VTECH terbaru.
- Coba ganti Theme dari **Settings** -> Tampilan akan berubah sesuai *palette* kosmik pilihanmu.

## 🐛 Troubleshooting

### 1. Error 404 model VTECH
* **Penyebab**: Endpoint AI model sudah lama (legacy), path berubah, atau registry belum tersinkronisasi.
* **Solusi**: Pilih model lain (seperti Groq Compound, Gemma, dll) dari **AI Hub**. Pastikan model baru memiliki awalan `/api/ai/...`.

### 2. API key kosong
* **Solusi**: Buka tab **Settings**, tuang VTECH API Key ke dalam input box, lalu klik **Save**.

### 3. API key ditolak
* **Solusi**: Pastikan tidak ada *typo*. Cek plan akun VTECH kamu di official dashboard mereka atau limit kuota harian.

### 4. CORS / Failed to fetch
* **Solusi**: Cek koneksi internetmu. Jika tetap fetch error, coba aktifkan mode proxy di **Settings**. (Atau deploy ke *host* yang menangani proxy dengan lebih baik).

### 5. Model tidak muncul di Dropdown
* **Solusi**: Pastikan normalisasi registry VTECH berjalan. Category `AI` uppercase harus difilter sebagai `ai` di `src/data/vtechRegistry.ts`.

### 6. Build gagal
* **Solusi**: Jalankan `npm install` kembali, lalu cek jika ada error ketidaksesuaian strictness TypeScript `npm run lint`.  

## 🛡️ Keamanan API Key
Zoro Universe secara default akan memakai **client-side storage** (localStorage). Kelebihannya, API Keymu tidak pernah mampir ke backend perantara lain melainkan langsung terhubung menuju API VTECH dari browsermu. Karena itu JANGAN memberikan *screenshot* halaman Settings yang berisi API key asli.

## 🗺️ Roadmap
- [ ] VTECH Endpoint Auto-Sync from remote (Dynamic fetch)
- [ ] Advance Custom Characters
- [ ] Local Sandbox execution (WASM) 
- [ ] Social Features / Sharable Links

## 📜 Changelog Singkat
- **v0.1.0** — Initial Alpha Release 🚀. Fitur: Universal Tools UI, Zoro Chat, LLM Router, Fallback mechanism, Settings dashboard, 6 VTECH Hub variants.
