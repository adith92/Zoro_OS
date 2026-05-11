# VTECH Endpoint Synchronization

Semua endpoint di Zoro Universe harus disinkronkan dengan registry resmi VTECH API. Karena pengembangan VTECH bergerak cepat, banyak path legacy lama yang kini akan mereturn `404 Not Found`. Dokumentasi ini dibuat sebagai panduan developer.

## Endpoint Resmi vs Legacy
Endpoint resmi VTECH yang baru berjalan secara konsisten dengan awalan path `/api/`, contohnya:
- **AI**: `/api/ai/...` (sebelumnya `/ai/ai/...` dsb)
- **Downloader**: `/api/download/...` (sebelumnya `/downloader/downloader/...` dsb)
- **News**: `/api/news/...`
- **Search**: `/api/search/...`

## Aturan Penggunaan AI Chat
- **JANGAN** menggunakan model legacy seperti `/ai/ai/claude` atau `/ai/gpt/gpt35` sebagai default untuk Chat. Jika endpoint mengembalikan error 404, fallback akan otomatis dijalankan oleh LLM Router.
- Default Chat Model menggunakan AI kuat teratas dari API, misalnya: **Groq Compound** atau **AI4Chat**. Keduanya memiliki latensi yang cepat dan tingkat keberhasilan struktur JSON yang tinggi.

## Normalisasi Category Generated Endpoints
File `src/data/vtechEndpoints.generated.ts` berisi daftar dari remote VTECH API list, namun memiliki uppercase pada category field seperti `AI`, `Downloader`, `Search`. Aplikasi Zoro Universe menormalisasi label category ini melalui file `src/data/vtechRegistry.ts` menjadi bentuk standar `lowercase` (misal: `ai`, `downloader`, `search`) sehingga filter pada halaman AI Hub/Tools tetap berfungsi sesuai kategori yang tepat, sekaligus memverifikasi endpoint AI untuk dapat digunakan sebagai opsi model LLM Chat langsung.
