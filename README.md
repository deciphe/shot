# GP. Shot for Vest

A compact Vest trading ticket with risk-based sizing, chart controls, Zone sessions, performance tracking, and a dark theme.

[Install GP. Shot](https://raw.githubusercontent.com/deciphe/shot/main/shot.user.js) · [Download ZIP](https://github.com/deciphe/shot/archive/refs/heads/main.zip)

## Install

1. Install [Tampermonkey](https://www.tampermonkey.net/) in your browser and enable userscripts as prompted by the extension.
2. Disable any older GP. Pulse or overlapping GP. trading scripts on Vest. Shot is a separate installation.
3. Open **Install GP. Shot** above and confirm installation. Alternatively, download the ZIP, extract `shot.user.js`, and import it into Tampermonkey.
4. Open or refresh [Vest](https://next.vestmarkets.com/) and sign in normally.
5. Choose your account and market. Review the ticket's risk, size, stop, and target before placing an order.

No server, Node installation, API-key paste, or build step is needed to use the script.

## Included

- GP. Shot order ticket and position controls.
- Risk-based sizing and fee-aware stop/target calculations.
- Chart stop/target controls.
- Zone sessions and downloadable certificates.
- Pulse spend, payouts, and account-performance views.
- Massive styling for Vest.

Trading buttons send real orders through your signed-in Vest session. This is not a paper-trading simulator. Browser-based controls require the page and connection to remain available.

## Fresh installation and privacy

Shot has a new script identity and its own `shot.v1` settings store. It does not import settings from previous scripts. Names, sessions, saved presets, and cached account history start empty; the script then reads the signed-in user's own Vest data.

Authentication is observed from Vest's own requests and kept in memory by the script. Settings and cached history are saved locally through Tampermonkey. No account data, credentials, or personal presets are included in this repository. Manrope is requested from Google Fonts; GitHub supplies script updates.

## Updates

The userscript's update metadata points to this repository's `main` branch. Tampermonkey checks for a higher version according to the user's extension settings; an update is not an instantaneous remote push. Users can also check for updates manually or reopen the install link. Refresh Vest after updating.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the release procedure. Keep the installed script name, namespace, and storage key stable so future updates preserve each user's settings.

## Verification

Repository checks validate JavaScript syntax and release metadata consistency. They do not prove compatibility with every live Vest session or certify order execution. No live orders were placed as part of this repository setup.
