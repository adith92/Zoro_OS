# SAVEPOINT OpenClaw Mac → ASUS ROG

Tanggal: 2026-05-09
User: Adithya / adith92
Status: redacted, aman untuk repo public. Tidak ada API key, token Telegram, atau `.env` mentah di file ini.

---

## Tujuan

Clone setup OpenClaw dari Mac ke ASUS ROG di 1 LAN, dikerjakan remote dari Mac.

Target akhir:

- OpenClaw terinstall di ASUS ROG.
- Workspace dan struktur project sama seperti Mac.
- Main agent pakai OpenRouter Free.
- Telegram command/control center ikut jalan.
- VTECH/AI4Chat tetap tersedia via env key lokal, bukan disimpan di GitHub.
- Semua secret tetap disimpan lokal saja.

---

## Kondisi Mac Saat Ini

OpenClaw:

- Version: `2026.5.7`
- Gateway lokal: `http://127.0.0.1:18789`
- Config aktif: `~/.openclaw/openclaw.json`
- Folder utama project: `~/Documents/Claw Adith/`
- Workspace aktif: `~/Documents/Claw Adith/workspace`

Folder penting:

```text
~/Documents/Claw Adith/workspace
~/Documents/Claw Adith/agents
~/Documents/Claw Adith/tools
~/Documents/Claw Adith/reports
~/Documents/Claw Adith/backups
~/Documents/Claw Adith/outputs
```

Agent yang sudah ada:

| Agent | Fungsi |
|---|---|
| main | Asisten utama |
| cheap | Chat murah/ringan |
| coding | Coding/debug |
| cleaner | Audit/bersih Mac |
| media | Media/API |
| vtech | API VTECH/AI4Chat |

Telegram sudah jadi control center.

Command Telegram yang diketahui:

```text
/agents
/models
/cheap
/coding
/cleaner
/media
/vtech
/ai4chat
/budget
/kimi
```

VTECH:

- Nama resmi: `VTECH`
- Env key resmi: `VTECH_API_KEY`
- Nama lama `VYNAA` harus dibersihkan total.
- Endpoint AI4Chat yang working: `GET /api/ai/ai4chat`
- Jangan simpan key di repo.

---

## Model Default Saat Savepoint

Sebelumnya ada masalah OpenClaw masih nyangkut ke:

```text
sumopod/kimi-k2.6
```

Sudah dibereskan. Setelah Gemini kena rate limit, keputusan akhir:

```text
openrouter/openrouter/free
```

Status terakhir di TUI Mac:

```text
agent main | session openrouter-beneran | openrouter/openrouter/free | tokens ?/64k
```

Kesimpulan:

- Kimi tidak aktif.
- Gemini tidak aktif.
- OpenRouter Free aktif.
- Main agent harus default ke OpenRouter.

---

## Catatan Error Penting

### 1. Jangan pakai `models.default`

OpenClaw 2026.5.7 menolak key ini:

```text
models.default
```

Error:

```text
models: Unrecognized key: "default"
```

Jadi kalau set default, patch hanya di:

```text
agents.defaults.model
agents.list[].model
```

### 2. `agents.*.model` harus string

OpenClaw ini menolak model object/routing di `agents.*.model`.

Yang benar:

```json
"model": "openrouter/openrouter/free"
```

Jangan pakai:

```json
"model": {
  "primary": "...",
  "fallback": ["..."]
}
```

### 3. Jangan tambah field label/displayName/title di model

OpenClaw menolak:

```text
label
displayName
title
```

Kalau mau rename dropdown, hanya ubah field `name` di model entry.

---

## Kondisi ASUS ROG Saat Savepoint

ROG kemungkinan Windows 11 modded/debloated, dicurigai Ghost Spectre.

Sudah dicek:

```powershell
net session
```

Output:

```text
There are no entries in the list.
```

Artinya PowerShell sudah Administrator.

Fitur Windows sudah enabled:

```powershell
dism.exe /online /get-featureinfo /featurename:Microsoft-Windows-Subsystem-Linux
```

Status:

```text
State : Enabled
```

```powershell
dism.exe /online /get-featureinfo /featurename:VirtualMachinePlatform
```

Status:

```text
State : Enabled
```

Tapi install WSL masih gagal:

```powershell
wsl --install -d Ubuntu --web-download
```

Error:

```text
Downloading: Windows Subsystem for Linux 2.7.3
Access is denied.
```

Dugaan:

- Microsoft Store/App Installer/Windows Update/MSIX rusak atau dipreteli.
- Kemungkinan karena Ghost Spectre/debloated Windows.

---

## Next Step Setelah Savepoint

Jalur berikutnya: bypass Store dan install WSL manual via MSI.

Di ASUS ROG PowerShell Administrator:

```powershell
mkdir C:\Temp\WSL -Force

Invoke-WebRequest `
  -Uri "https://github.com/microsoft/WSL/releases/download/2.7.3/wsl.2.7.3.0.x64.msi" `
  -OutFile "C:\Temp\WSL\wsl.msi"

msiexec.exe /i "C:\Temp\WSL\wsl.msi" /passive /norestart
```

Lalu cek:

```powershell
wsl --status
```

Kalau WSL sudah jalan, lanjut install Ubuntu dan restore OpenClaw clone dari Mac.

---

## Rencana Clone dari Mac ke ROG

Metode recommended:

- Jangan Git untuk secret.
- Pakai ZIP/TAR lokal via LAN.
- Mac jadi sumber backup.
- ROG restore via SSH/WSL.

Yang boleh masuk GitHub:

```text
SAVEPOINT_OPENCLAW_ROG.md
scripts/deploy-openclaw-to-rog.sh
scripts/install-wsl-rog.ps1
configs/openclaw.redacted.example.json
```

Yang tidak boleh masuk GitHub:

```text
.env asli
API key
Telegram bot token
openclaw.json mentah jika berisi secret
backup config asli
```

---

## Command Patch OpenRouter Default yang Aman

Untuk Mac atau ROG setelah config tersedia:

```bash
python3 <<'PY'
import json, pathlib

p = pathlib.Path.home() / ".openclaw/openclaw.json"
data = json.loads(p.read_text())

TARGET = "openrouter/openrouter/free"

if isinstance(data.get("models"), dict):
    data["models"].pop("default", None)

agents = data.setdefault("agents", {})

if isinstance(agents.get("defaults"), dict):
    agents["defaults"]["model"] = TARGET

if isinstance(agents.get("list"), list):
    for a in agents["list"]:
        if isinstance(a, dict):
            name = str(a.get("name") or a.get("id") or a.get("agent") or "").lower()
            if name == "main":
                a["model"] = TARGET

p.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
print("OK: Main pakai", TARGET)
PY

openclaw gateway restart
```

Test:

```bash
openclaw tui --session openrouter-beneran
```

Expected bar bawah:

```text
openrouter/openrouter/free
```

---

## Reminder Kerja Lanjut

Mulai lagi dari:

1. Install WSL MSI manual di ROG.
2. Cek `wsl --status`.
3. Kalau OK, install Ubuntu.
4. Enable SSH di ROG.
5. Dari Mac, buat TAR backup `.openclaw` + `~/Documents/Claw Adith`.
6. Kirim via LAN ke ROG.
7. Restore di WSL.
8. Patch path `/Users/adith92` ke path Linux ROG.
9. Patch default Main ke `openrouter/openrouter/free`.
10. Test TUI + Telegram.

---

## Catatan Gaya Kerja

User minta pelan-pelan, jangan blok panjang kecuali sudah siap eksekusi otomatis.

Preferensi:

- Bahasa Indonesia santai.
- Command siap copas.
- Jawaban pendek.
- Kalau error, langsung next fix.
