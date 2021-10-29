# 🧈 Mentega Beat Saber to OBS 🧈
### [🇮🇩 Klik disini untuk README dalam bahasa Indonesia](README_ID.md)
A simple web app that changes OBS Scene based on whether you are in menu or in a level. There are a lot of use cases for this, one of the main one is **being able to show stinger transition every time you enter or leave a level**.

Web app URL: https://mentegago.github.io/mentega-bs2obs/

## Prerequisites
- Install [OBSDataPuller](https://github.com/kOFReadie/BSDataPuller/releases/latest) Beat Saber Mod. **Download from ModAssistant when possible**. If not, make sure you also install these from ModAssistant:
	- BeatSaverSharp
	- WebsocketSharp
	- SongCore
	- SongDataCore
	- SiraUtil
- Install [OBS Web Socket 4.9.x](https://github.com/Palakis/obs-websocket/releases/tag/4.9.1).

## Installation
1. Make sure you've installed the prerequisites above!
2. Open OBS.
3. Go to `Tools > WebSockets Server Settings`.
4. Make sure `Enable WebSockets Server` is checked. You can change the Server Port or enable Password if you want. If you're not sure what these settings are, ignore them. Afterwards, press OK.
5. Open Beat Saber.
6. Open your browser and go to https://mentegago.github.io/mentega-bs2obs/
7. Input all the settings:
	- **BSDataPuller IP Address**: Leave it at default unless you know what you're doing.
	- **OBS IP Address**: Enter `127.0.0.1:{PORT}`, replacing the `{PORT}` with the Server Port you set at step 4. If you did not change anything in step 4 other than checking `Enable WebSockets Server`, you can leave this at default.
	- **OBS Password**: The password that you set in step 4. If you did not input password, leave it empty.
	- **Game Scene**: The OBS scene name that you wish to use for when you are in a level.
	- **Menu Scene**: The OBS scene name that you wish to use for when you are in the menu.
8. Press `Apply Settings`.
9. You should see that both `BSDataPuller status` and `OBS Websocket Settings` shows ✅. If not, make sure your settings are correct!

That's it! You're ready to roll 😊

## Contributing
 - If you have a suggestion or bug report, [submit an issue](https://github.com/mentegago/mentega-bs2obs/issues)!
 - If you want to contribute a code, [send me a pull request](https://github.com/mentegago/mentega-bs2obs/pulls)!
## License
[MIT License](LICENSE)
