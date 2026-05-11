# Project Launch Checklist 🚀

Gunakan panduan checklist ini sebelum membuat branch production baru untuk Zoro Universe.

## ✅ Pre-flight 
- [x] **Tidak Ada API Hardcoding**: Pastikan `useStore.ts` maupun module lain membaca API dari localStorage users (settings state)
- [x] **Sanitize UI Dependencies**: Cek responsivitas layout grid Chat dan VTECH UI Tools Hub
- [x] **Lint & Types**: Semua error/warning typescript minimal telah ter-resolve (`npm run lint` pass)
- [x] **Build Check**: Pastikan `npm run build` sukses membuat dist file yang optimal tanpa limit memory node
- [x] **Tidy Readme**: README sudah lengkap dengan petunjuk untuk users cara mengisi Vtech API Key 

## 🤖 AI Models & Ecosystem
- [x] **No Legacy Model Default**: LLM Router tidak pernah meminta fallback default ke model lama yang tak bekerja kembali seperti `/ai/ai/claude`. 
- [x] **Dynamic Safe Default Models**: Menunjuk `Groq Compound`/`AI4Chat` default jika endpoint belum termodifikasi
- [x] **No SumoPod / VYNAA Mention**: Source code / Dokumentasi tak menyebut platform branding legacy lain melainkan murni menargetkan `VTECH`
- [x] **Prompt Routing Work**: Prompt param text diolah dengan cerdas jika di passing sistem instruction

## 🚀 Live Testing
- [ ] Buka di Browser (Incognito mode).
- [ ] Coba input Random String Key API -> Pastikan throw response Unauthorized / Failed to Fetch.
- [ ] Coba input Valid VTECH Key -> Status Connected Succesfully Hijau.
- [ ] Coba masuk ke Chat & Ping halo ke LLM.
- [ ] Coba jalankan VTECH Downloader Module (misal Tiktok link download).
- [ ] Coba jalankan Islamic Module & Games. 

Semua aman? Zoro Universe siap Meluncur ke Bintang!! ✨ 
