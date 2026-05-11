# Deployment Guide

Zoro Universe adalah aplikasi web berbasis React + TypeScript menggunakan build tool Vite. Aplikasi ini sangat ringan dan dioptimalisasi untuk deployment serverless host.

## Vercel (Rekomendasi)
Vercel adalah platform termudah untuk host aplikasi Zoro Universe.

1. Hubungkan repository Zoro Universe GitHub-mu dengan Vercel.
2. Di bagian project settings Vercel:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Jika kamu mau pre-config API Key, kamu dapat menambahkan Environment Variable `VITE_VTECH_API_KEY`, meskipun menyimpannya langsung di *Settings* secara dinamis lebih aman dan fleksibel. 
4. Tunggu Vercel melakukan build, dan Zoro Universe akan tampil online.

## Docker (Advanced)
Jika kamu mau mendeploy melalui VPS atau Container Platform, kamu dapat membungkus `.dist` build dalam mesin NGINX. 

```Dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## Troubleshooting Deployment
- **Aplikasi Blank (Halaman Kosong)**: Cek base router dan Vite base url path di `vite.config.ts`.
- **CORS Error Saat Koneksi VTECH API**: Meskipun backend mengizinkan origin external, terkadang ada host proxy yang melarang request direct, buka halaman Settings Zoro Universe dan aktifkan mode **VTECH ProxyMode** untuk menyelesaikan isu direct-hit.
