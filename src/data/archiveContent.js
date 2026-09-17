/**
 * THE ARCHIVE — Narrative & Archival Configuration Data
 *
 * Decoupled data model. All narrative fragments, dates, locations,
 * voice artifact metadata, and build configurations are managed here.
 */

export const ARCHIVE_CONFIG = {
  title: "THE ARCHIVE",
  period: "23 SEPTEMBER 2023 — 10 OCTOBER 2025",
  locations: "DARJEELING / KALIMPONG / SILIGURI",
  classification: "RESTRICTED AUTOBIOGRAPHICAL RECORD",
  recordId: "ARC-2309-1010",
  status: "INCOMPLETE / DRAINED"
};

/**
 * Story Fragments
 * Sparse chronological sequence carried by typography and space.
 * Authenticated by highly specific, restrained details.
 */
export const ARCHIVE_FRAGMENTS = [
  {
    id: "frag-01",
    date: "23 SEPTEMBER 2023",
    location: "DARJEELING",
    title: "THE ORIGIN",
    detail: "A family wedding. A <span class=\"accent-memory\">green kurta</span>. An awkward attempted handshake that resolved into a Japanese bow and an accidental head bump.",
    annotation: "REF: BALCONY OVERLOOKING THE HILLS"
  },
  {
    id: "frag-02",
    date: "14 OCTOBER 2024",
    location: "DARJEELING",
    title: "TWENTY HOURS",
    detail: "Four heavy bags. A couch. The \"Oi uth!\" whisper. A Ferris wheel above the clouds and a first kiss kept quiet from the world.",
    annotation: "REF: NIGHT WALKS / SECRETS"
  },
  {
    id: "frag-03",
    date: "12 JANUARY 2025",
    location: "HOSTEL",
    title: "THE THIRD SEPARATION",
    detail: "Forty-five days without a phone. A birthday song whispered after midnight across distance. Searching for one single name immediately upon return.",
    annotation: "REF: HOSTEL SILENCE / 45 DAYS"
  },
  {
    id: "frag-04",
    date: "10 JUNE 2025",
    location: "SILIGURI",
    title: "THE RETURN",
    detail: "A final attempt to close the distance. Moving to the plains. Being physically closer while emotionally drifting further apart.",
    annotation: "REF: FLATLANDS / UNRESOLVED"
  },
  {
    id: "frag-05",
    date: "10 SEPTEMBER 2025",
    location: "SILIGURI",
    title: "THE CUTOFF",
    detail: "The quiet cutoff. No shouting, no dramatic exits. Just the sudden stillness of a line going cold.",
    annotation: "REF: TERMINATION OF CONTACT"
  },
  {
    id: "frag-06",
    date: "24 SEPTEMBER 2025",
    location: "KALIMPONG",
    title: "THE EMPTY DATE",
    detail: "Exactly two years from the morning after the wedding. Nothing arrived. The archive slowly began to close.",
    annotation: "REF: UNANSWERED"
  }
];

/**
 * Archival Photographic Plates (Evidence System)
 * Placeholder metadata for physical photographic artifacts.
 */
export const ARCHIVE_PLATES = {
  origin: {
    accessionNo: "PLATE-01-DAR",
    date: "23 SEPTEMBER 2023",
    location: "DARJEELING",
    title: "THE WEDDING BALCONY",
    caption: "where it began",
    format: "120 FILM STOCK [PLACEHOLDER]"
  },
  memory: {
    accessionNo: "PLATE-02-DAR",
    date: "OCTOBER 2024",
    location: "DARJEELING",
    title: "TWENTY HOURS",
    caption: "the hills before the mist settled",
    format: "35MM ARCHIVAL PRINT [PLACEHOLDER]"
  }
};

/**
 * Voice Fragments System
 * Minimal recovered recording metadata.
 */
export const VOICE_FRAGMENTS = [
  {
    id: "01",
    label: "VOICE FRAGMENT / 01",
    recordedDate: "25 OCTOBER 2024",
    recordedLocation: "DARJEELING",
    durationSeconds: 17,
    durationFormatted: "00:17",
    audioSrc: "public/audio/timecapsule.m4a",
    annotation: "whispered voice memo / night of the first date"
  },
  {
    id: "02",
    label: "VOICE FRAGMENT / 02",
    recordedDate: "12 JANUARY 2025",
    recordedLocation: "HOSTEL",
    durationSeconds: 24,
    durationFormatted: "00:24",
    audioSrc: "public/audio/voice_fragment_02.mp3",
    annotation: "whispered birthday greeting / phone audio"
  }
];

/**
 * Android APK Build Configuration
 * The download section represents the interactive 3D Godot memory project.
 * If ARCHIVE_DOWNLOAD_URL is empty, an intentional placeholder state is shown.
 */
export const ARCHIVE_DOWNLOAD_URL = "public/the_archive.apk"; // Set real APK URL here when compiled

export const ARCHIVE_BUILD_INFO = {
  platform: "ANDROID (GODOT 3D ENGINE)",
  version: "BUILD 0.0.1-ALPHA",
  packageSize: "68.4 MB [ESTIMATED]",
  architecture: "ARM64-V8A",
  statusNote: "ARCHIVAL BUILD READY FOR LOCAL EXTRACTION"
};
