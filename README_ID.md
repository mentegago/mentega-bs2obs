# 🧈 Mentega Beat Saber to OBS 🧈
Web app sederhana untuk mengganti OBS scene berdasarkan apakah Anda berada di menu atau di dalam sebuah level. Ada banyak *use case* untuk ini, misalnya untuk **menampilkan transisi stinger tiap kali Anda masuk atau keluar dari level**.

Web app URL: https://mentegago.github.io/mentega-bs2obs/

## Prasyarat
- Install [OBSDataPuller](https://github.com/kOFReadie/BSDataPuller/releases/latest) Beat Saber Mod. **Download dari ModAssistant jika ada**. Jika tidak, pastikan Anda juga sudah menginstall mod-mod di bawah ini melalui ModAssistant:
	- BeatSaverSharp
	- WebsocketSharp
	- SongCore
	- SongDataCore
	- SiraUtil
- Install [OBS Web Socket 4.9.x](https://github.com/Palakis/obs-websocket/releases/tag/4.9.1).

## Installation
1. Pastikan Anda sudah menginstall semua yang disebutkan di daftar prasyarat di atas!
2. Buka OBS.
3. Masuk ke `Tools > WebSockets Server Settings`.
4. Pastikan `Enable WebSockets Server` telah dicentang. Anda juga bisa mengganti *Server Port* dan mengatur *Password*. Jika Anda kurang mengerti ini, silakan acuhkan. Setelah itu, tekan tombol OK.
5. Buka Beat Saber.
6. Buka browser Anda dan masuk ke https://mentegago.github.io/mentega-bs2obs/
7. Isi kolom-kolom setting yang ditampilkan:
	- **BSDataPuller IP Address**: Biarkan pada nilai bawaan kecuali Anda tahu apa ini.
	- **OBS IP Address**: Masukkan `127.0.0.1:{PORT}` dengan mengganti `{PORT}` dengan *Server Port* yang Anda atur di langkah ke-4. Jika Anda tidak mengubah apa-apa di langkah ke-4 selain mencentang `Enable WebSockets Server`, biarkan pada nilai bawaan.
	- **OBS Password**: Password yang Anda atur di langkah ke-4. Jika Anda tidak mengatur password di langkah ke-4, biarkan kosong.
	- **Game Scene**: Nama *scene* OBS yang ingin Anda tampilkan saat berada di dalam sebuah level.
	- **Menu Scene**: Nama *scene* OBS yang ingin Anda tampilkan saat berada di dalam menu.
8. Tekan `Apply Settings`.
9. `BSDataPuller status` dan `OBS Websocket Settings` akan menampilkan emoji ✅. Jika tidak, pastikan pengaturan Anda di atas benar!

Selesai! 😊

## Kontribusi
 - Jika Anda memiliki saran atau ingin melaporkan *bug*, silakan [*submit issue*](https://github.com/mentegago/mentega-bs2obs/issues)!
 - Jika Anda ingin mengkontribusikan kode, silakan [kirimkan saya *pull request*](https://github.com/mentegago/mentega-bs2obs/pulls)!
  
## Lisensi
[MIT License](LICENSE)
