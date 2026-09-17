# THE ARCHIVE — Landing Page

Official landing page for **THE ARCHIVE**, an autobiographical 3D interactive memory project documenting an intimate relationship between Kalimpong, Darjeeling, and Siliguri across the period:

**23 September 2023 → 10 October 2025**

---

## Aesthetic & Design Philosophy

- **Emotional Anchor**: "A memory someone carefully preserved because they were afraid of losing it."
- **Strict Visual Restraint**: Zero glassmorphism, zero card grids, zero neon/purple gradients, zero SaaS/startup patterns.
- **Atmospheric Palette**: Void (`#0B0C0C`), Room Black (`#111313`), Deep Surface (`#181B1B`), Hostel Concrete (`#272B2A`), Archive White (`#D8D4C9`), Ghost Text (`#727875`), and the rarely surviving Memory Green (`#58665C`).
- **Typography**: Editorial serif display (`EB Garamond`) paired with utilitarian monospace cataloguing metadata (`Space Mono`).
- **Photographic Policy**: Archival evidence plates with museum accession registration marks. No fabricated likenesses or AI faces.

---

## Architecture & File Structure

```text
bday2landing/
├── index.html                  # Semantic entrypoint, accessibility landmarks, audio controller
├── package.json                # Project configuration
├── README.md                   # System documentation
│
├── src/
│   ├── styles/
│   │   ├── tokens.css          # Design token system (colors, spacing, typography, inertia)
│   │   ├── typography.css      # Editorial serif & utilitarian monospace hierarchies
│   │   ├── global.css          # Dark field base, accessible focus rings, scrollbar
│   │   ├── components.css      # Threshold, evidence plates, fragments, voice machine, download
│   │   └── responsive.css      # Breakpoints, mobile touch ergonomics, prefers-reduced-motion
│   │
│   ├── data/
│   │   └── archiveContent.js   # Decoupled narrative configuration: dates, fragments, voice, APK build
│   │
│   ├── audio/
│   │   └── archiveAudio.js     # Web Audio procedural room-tone & voice memo audio engine
│   │
│   └── main.js                 # Dynamic rendering, audio orchestration, and event wiring
│
└── public/
    ├── audio/                  # Audio asset directory for ambient and voice MP3s
    └── images/                 # Media directory for authentic photographic artifacts
```

---

## How to Configure Assets

### 1. APK Download URL
Open `src/data/archiveContent.js` and set `ARCHIVE_DOWNLOAD_URL`:
```javascript
export const ARCHIVE_DOWNLOAD_URL = "https://your-host.com/the-archive-release.apk";
```
When left empty (`""`), the interface automatically displays an intentional archival staging state (`[ ARCHIVAL EXTRACTION PENDING ]`) without broken links.

### 2. Audio & Voice Memos
- Ambient room tone and voice fragments are procedurally synthesized using the Web Audio API right out of the box so the audio controller is immediately audible without external files.
- To insert real voice recordings, place audio files into `public/audio/` and update the `audioSrc` paths in `src/data/archiveContent.js`.

### 3. Photographs
- Images are currently styled as darkroom exhibition plates with registration marks (`+`) and archival reference codes.
- To add real photographs, insert an `<img>` tag into the `<figure>` container of the corresponding evidence plate in `index.html`.
