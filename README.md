🌌 Starry Night

A cosmic, Pinterest-inspired visual discovery client for Bluesky.

Starry Night brings a sleek, media-first Pinterest experience to the Bluesky universe. Designed for visual discovery, it presents Bluesky image feeds through a responsive masonry layout complete with interactive background particle stars, multi-state content filters, custom feed switching, and full AT Protocol integration.

✨ Features

🎨 Pinterest-Style Masonry Grid: Dynamic multi-column layout optimized for image-heavy visual content.

🌌 Cosmic Visual Theme: Interactive starry background featuring dynamic particle twinkle animations in dark and light modes.

🔗 Bluesky (AT Protocol) Integration:

Authenticate using your Bluesky Handle and App Password.

Load your personal timeline, custom feeds, and saved feeds.

Interactive engagement: like, repost, comment, and view post threads.

Automatically hides your own posts to focus strictly on content discovery.

🛡️ 3-State Content Moderation (NSFW): Flexible options to Blur, Hide, or Show sensitive content on demand.

🖼️ Adaptive Image Detail Modal:

Dynamic aspect-ratio adaptation (horizontal vs. vertical media layouts).

Multi-image post carousel navigation.

Direct image download and shareable link generator.

🔍 Real-time Search & Filter: Instant search across post text, authors, handles, and hashtags, combined with tag-based chip filtering.

♾️ Infinite Scrolling & Demo Mode: Seamless dynamic batch loading with full mock data fallback when unauthenticated.

🛠️ Tech Stack

HTML5 & Vanilla JavaScript (ES6+): Pure lightweight client-side architecture with zero build-tool setup required.

Tailwind CSS: Modern utility-first styling with dark mode support.

Lucide Icons: Clean visual icon library.

AT Protocol (XRPC): Direct browser-to-Bluesky API endpoints.

🚀 Getting Started

No build tools, compilation, or package manager installation is required.

1. Clone the repository

git clone https://github.com/your-username/starry-night.git
cd starry-night


2. Run the application

Open index.html directly in your browser, or serve it using a local HTTP server:

# Using Python 3
python -m http.server 8000

# Using Node.js npx
npx serve .


Navigate to http://localhost:8000 in your web browser.

🔒 Security & Privacy Notice

Authentication uses App Passwords generated via Bluesky (Settings > App Passwords).

Authentication tokens (accessJwt) are held only in client memory during the session and are never stored on external servers or persistent storage.

📜 License

This project is open-source under the MIT License.
