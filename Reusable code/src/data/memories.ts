export interface MemoryFragment {
  id: string;
  act?: string;
  chapter?: string;
  dateStamp?: string;
  location?: string;
  title?: string;
  shortFragment: string;
  extendedNote?: string;
  mediaUrl?: string;
  mediaType?: 'photo' | 'audio' | 'video' | 'interaction';
  scale?: 'large' | 'normal' | 'micro' | 'margin';
  align?: 'left' | 'center' | 'right' | 'left-edge' | 'right-edge';
}

export interface MarginNoteData {
  id: string;
  label: string;
  text: string;
}

export const MARGIN_NOTES: Record<string, MarginNoteData> = {
  'note-2023': {
    id: 'mn-01',
    label: '2023 // COMPUTER PRACTICAL',
    text: 'A question about what was on the syllabus. Nothing obviously important.',
  },
  'note-gojo': {
    id: 'mn-02',
    label: 'APRIL 2024 // INSTAGRAM',
    text: 'Jujutsu Kaisen reels. I just thought you were cool.',
  },
  'note-tuition': {
    id: 'mn-03',
    label: 'JULY 2024 // MARGIN',
    text: 'I changed my tuition timing just to walk back with you. I told myself it was convenient.',
  },
  'note-durpin': {
    id: 'mn-04',
    label: '11.08.24 // DURPIN',
    text: 'Awkward distance. The electric fear of accidentally brushing hands.',
  },
  'note-nexttime': {
    id: 'mn-05',
    label: '30.04.25 // HOSTEL',
    text: '“Have a lot to talk but let it be for the next time!” That next time arrived.',
  },
  'note-homegirl': {
    id: 'mn-06',
    label: '25.05.25',
    text: 'Homegirl. A silly little piece of our private language.',
  },
  'note-1408': {
    id: 'mn-07',
    label: '14.08.25',
    text: 'You said I deserved all the love in the world. I held onto that for months.',
  },
  'note-mangaldham': {
    id: 'mn-08',
    label: '21.09.25 // MANGALDHAM',
    text: 'I asked for someone who would love me for who I was. The guard thought we were already that.',
  },
  'note-maths': {
    id: 'mn-09a',
    label: 'OCTOBER 2025 // MATHS PROJECT',
    text: 'Staying awake through the night for your maths project. I never minded the lost sleep.',
  },
  'note-busstand': {
    id: 'mn-09',
    label: '17.10.25 // BUS STAND',
    text: 'Two hours. You were waiting for me. I still think about that.',
  },
  'note-brownies': {
    id: 'mn-10',
    label: '19.10.25 // 03:30 AM',
    text: 'Brownies in an airtight box. If I could take one memory with me after death, this would be it.',
  },
  'note-roses': {
    id: 'mn-11',
    label: '25.10.25 // DELO',
    text: 'I never liked giving roses — because something that eventually dies shouldn’t be a representation of my love. I wanted photographs, conversations, and walks.',
  },
  'note-hairtie': {
    id: 'mn-12',
    label: '25.10.25 // THE TALISMAN',
    text: 'A tiny elastic band. I wore it around my wrist like an anchor.',
  },
  'note-calls': {
    id: 'mn-13',
    label: '2026 // BEST FRIEND',
    text: '8½-hour phone calls. Stupid teas and random reels. More than a girlfriend.',
  },
};

export const MEMORY_ARCHIVE: MemoryFragment[] = [
  // ============================================================
  // ACT I: THE QUIET BEGINNINGS (2023 – JULY 2024)
  // ============================================================
  {
    id: 'act1-practical',
    act: 'act-1',
    chapter: 'THE BEGINNING',
    dateStamp: '2023',
    location: 'COMPUTER LAB',
    title: 'Computer Practical',
    shortFragment: 'You asked what was coming for the computer practical.',
    extendedNote: 'We talked. Then exam conversations. Then greetings in the hallway. Hi. Hello. Nothing obviously important. But this was the true beginning.',
    scale: 'normal',
    align: 'left',
  },
  {
    id: 'act1-gojo',
    act: 'act-1',
    chapter: 'THE GIRL WHO WAS COOL',
    dateStamp: 'APRIL / MAY 2024',
    location: 'INSTAGRAM',
    shortFragment: 'She started sending Gojo reels.',
    extendedNote: 'At this point, she was simply someone I thought was cool. I liked talking to her. Nothing needed to be romantic yet.',
    scale: 'normal',
    align: 'right',
  },
  {
    id: 'act1-conversations',
    act: 'act-1',
    chapter: 'THE DEEPER NIGHTS',
    dateStamp: 'JUNE 2024',
    shortFragment: 'Conversations began drifting into the quiet hours.',
    extendedNote: 'We began talking about life, relationships, experiences with love. The “fun fact” moments. I slowly started realizing I liked you, even if I didn’t fully understand what I was feeling yet.',
    scale: 'large',
    align: 'center',
  },
  {
    id: 'act1-tuition',
    act: 'act-1',
    chapter: 'THE QUIZ TEAM',
    dateStamp: 'JULY 2024',
    location: 'TUITIONS',
    shortFragment: 'Walking home after tuitions.',
    extendedNote: 'After you changed your tuition timings, I quietly changed mine too so I could keep walking home with you. I wasn’t thinking about love. I simply wanted a little more time with you.',
    scale: 'normal',
    align: 'left',
  },
  {
    id: 'photo-act1-walk',
    act: 'act-1',
    dateStamp: 'JULY 2024',
    location: 'AFTER CLASS',
    shortFragment: 'Walking alongside each other.',
    mediaUrl: '/photos/home from tuition.jpg',
    mediaType: 'photo',
  },

  // ============================================================
  // ACT II: THE FIRST WALK & THE BLANK PAGES (AUG 2024 – MAY 2025)
  // ============================================================
  {
    id: 'act2-durpin1',
    act: 'act-2',
    chapter: 'THE FIRST WALK',
    dateStamp: '11.08.24',
    location: 'DURPIN',
    title: 'The First Hangout',
    shortFragment: 'Our first actual hangout.',
    extendedNote: 'Awkward physical distance. We were already comfortable talking, but suddenly being physically beside each other was different. The almost-electric fear of accidentally touching hands. Both of us carrying our own emotional baggage.',
    scale: 'large',
    align: 'center',
  },
  {
    id: 'photo-act2-durpin',
    act: 'act-2',
    dateStamp: '11.08.24',
    location: 'DURPIN',
    shortFragment: 'The first walk together.',
    mediaUrl: '/photos/first durpin walk.jpg',
    mediaType: 'photo',
  },
  {
    id: 'act2-blank1',
    act: 'act-2',
    chapter: 'THE BLANK PAGES',
    dateStamp: 'AUG 2024 – JAN 2025',
    shortFragment: 'Silence in the notebook.',
    extendedNote: 'Nothing recorded. The absence itself was part of the story.',
    scale: 'micro',
    align: 'center',
  },
  {
    id: 'act2-return',
    act: 'act-2',
    chapter: 'THE STORY RETURNS',
    dateStamp: '28.04.25 – 30.04.25',
    location: 'BROTHER’S WEDDING / HOSTEL',
    shortFragment: 'We started talking again.',
    extendedNote: 'I was out of hostel for my brother’s wedding. The conversations felt surprisingly pure and platonic. Familiarity returning. On April 30th, right before returning to hostel: “Have a lot to talk but let it be for the next time!”',
    scale: 'normal',
    align: 'left',
  },
  {
    id: 'act2-homegirl',
    act: 'act-2',
    dateStamp: '25.05.25',
    shortFragment: '“Homegirl.”',
    extendedNote: 'A stupid little nickname. A piece of our private language.',
    scale: 'micro',
    align: 'right',
  },
  {
    id: 'act2-blank2',
    act: 'act-2',
    dateStamp: 'JUNE – 13.08.25',
    shortFragment: 'Another quiet corridor.',
    scale: 'micro',
    align: 'center',
  },

  // ============================================================
  // ACT III: THE PIVOT & THE ANCHOR (AUG – SEPT 2025)
  // ============================================================
  {
    id: 'act3-1408',
    act: 'act-3',
    chapter: 'THE ANCHOR',
    dateStamp: '14.08.25',
    title: '14 August 2025',
    shortFragment: 'You told me I deserved all the love and care in this world.',
    extendedNote: 'After the breakup with Nima, I was emotionally shattered. I spoke with you through it. You were simply there for me when I was falling apart. That sentence came from you, and it carried me through the dark.',
    scale: 'large',
    align: 'center',
  },
  {
    id: 'photo-act3-1408',
    act: 'act-3',
    dateStamp: '14.08.25',
    shortFragment: 'The anchor.',
    mediaUrl: '/photos/deserve all the love and care.jpg',
    mediaType: 'photo',
  },
  {
    id: 'act3-losing',
    act: 'act-3',
    dateStamp: 'SEPTEMBER 2025',
    shortFragment: 'September was brutal.',
    extendedNote: 'The old relationship was ending emotionally. I was losing a version of myself and becoming someone new.',
    scale: 'normal',
    align: 'left',
  },
  {
    id: 'act3-mangaldham',
    act: 'act-3',
    chapter: 'THE COINCIDENCE',
    dateStamp: '21.09.25',
    location: 'MANGALDHAM',
    title: 'The Prediction',
    shortFragment: 'We originally planned to thrift. It was closed.',
    extendedNote: 'So we went to Mangaldham instead. We joked about getting jobs at Vishal Mega Mart while it was being built. And inside, I made a silent wish: to finally have someone who would genuinely love me for who I was. Moments later, the guard mistook us for a couple and almost threw us out. Looking back, it felt like a prediction from life itself.',
    scale: 'large',
    align: 'center',
  },
  {
    id: 'video-act3-mangaldham',
    act: 'act-3',
    chapter: 'THE COINCIDENCE',
    dateStamp: '21.09.25',
    location: 'MANGALDHAM',
    title: 'Mangaldham Recording',
    shortFragment: 'Mangaldham.',
    extendedNote: 'A silent recording from that afternoon.',
    mediaUrl: '/video/mangaldham.mp4',
    mediaType: 'video',
  },
  {
    id: 'act3-industrial',
    act: 'act-3',
    chapter: 'THE PHOTOBOOTH',
    dateStamp: '26.09.25',
    location: 'INDUSTRIAL PARK',
    shortFragment: 'Concert boredom & Photobooth.',
    extendedNote: 'We got bored at the concert and took photobooth pictures. We looked completely ridiculous and laughed uncontrollably. That was when I first brought up morning walks.',
    scale: 'normal',
    align: 'right',
  },
  {
    id: 'photo-act3-photobooth',
    act: 'act-3',
    dateStamp: '26.09.25',
    location: 'INDUSTRIAL PARK',
    shortFragment: 'Looking ridiculous together.',
    mediaUrl: '/photos/photobooth.jpg',
    mediaType: 'photo',
  },

  // ============================================================
  // ACT IV: THE TURNING POINT (OCTOBER 2025)
  // ============================================================
  {
    id: 'act4-maths',
    act: 'act-4',
    chapter: 'EARLY OCTOBER',
    dateStamp: 'EARLY – MID OCT 2025',
    title: 'The Maths Project',
    shortFragment: 'Staying awake through the night for your maths project.',
    extendedNote: 'Long calls into the early morning hours, keeping company, helping you finish it. I never minded the lost sleep.',
    scale: 'normal',
    align: 'right',
  },
  {
    id: 'act4-busstand',
    act: 'act-4',
    chapter: 'THE BUS STAND',
    dateStamp: '17.10.25',
    location: 'BUS STAND',
    shortFragment: 'You waited for me for almost two hours.',
    extendedNote: 'You were waiting for me, not for juice. The juice was just my apology when I finally arrived. Then I walked you home. The emotional realization that someone waited for me stayed with me.',
    scale: 'normal',
    align: 'left',
  },
  {
    id: 'photo-act4-busstand',
    act: 'act-4',
    dateStamp: '17.10.25',
    location: 'BUS STAND',
    shortFragment: 'That afternoon.',
    mediaUrl: '/photos/waited 3 hours bus stand.jpg',
    mediaType: 'photo',
  },
  {
    id: 'act4-brownies',
    act: 'act-4',
    chapter: 'THE NIGHT OF OCTOBER 18',
    dateStamp: '18.10.25 → 19.10.25',
    location: '3:30 AM',
    title: 'Brownies in an Airtight Box',
    shortFragment: 'Staying awake through the entire night.',
    extendedNote: 'Bullshit music, random conversations, scrolling reels. You occasionally dozed off. At 3:30 AM, you were baking brownies for me. I left home in the dark, met you at your usual spot. You handed me the airtight container of brownies. I hugged you and thanked you. If I could take one moment with me after death, this would be one of them.',
    scale: 'large',
    align: 'center',
  },
  {
    id: 'video-act4-walk',
    act: 'act-4',
    chapter: 'THE RECORDING',
    dateStamp: '19.10.25',
    location: 'THE WALK',
    title: 'The Intimacy of October 19',
    shortFragment: 'The walk where everything felt close.',
    extendedNote: 'We walked together. We cuddled. I slept resting on you, and you slept resting on me. It was intimate without needing explanation. There was a quiet sense that something was about to happen.',
    mediaUrl: '/video/Oct19.mp4',
    mediaType: 'video',
  },
  {
    id: 'act4-confession',
    act: 'act-4',
    chapter: 'THE CONFESSION',
    dateStamp: '20.10.25',
    shortFragment: 'The alarm rang, but we missed the walk.',
    extendedNote: 'You didn’t wake up, so I dozed off. Later you jokingly called me your girlfriend. I decided to reverse the roles and confessed. You admitted you had started feeling it too. Everything we had avoided finally had a name.',
    scale: 'normal',
    align: 'right',
  },
  {
    id: 'act4-firstkiss',
    act: 'act-4',
    chapter: 'THE FIRST KISS',
    dateStamp: '21.10.25',
    location: 'DATE WALK',
    shortFragment: 'First official date walk. First kiss.',
    extendedNote: 'Wholesome and unforced. Two people who had both been deprived of genuine affection finding something that felt completely right.',
    scale: 'large',
    align: 'center',
  },
  {
    id: 'act4-delo',
    act: 'act-4',
    chapter: 'DELO & THE PHILOSOPHY OF ROSES',
    dateStamp: '25.10.25',
    location: 'DELO / MI\'AMORE',
    title: 'First Proper Date',
    shortFragment: 'Mi\'amore, pictures, and the philosophy of roses.',
    extendedNote: 'Anwesha came along with us. Laughing, eating, taking pictures at Delo. I thought about how I never liked giving roses — because something that eventually dies shouldn\'t be a representation of my love. I would rather keep photographs, walks, inside jokes, brownies, conversations, and memories. That was always my idea of love.',
    scale: 'normal',
    align: 'left',
  },
  {
    id: 'photo-act4-delo',
    act: 'act-4',
    dateStamp: '25.10.25',
    location: 'DELO',
    shortFragment: 'Delo.',
    mediaUrl: '/photos/first delo date.jpg',
    mediaType: 'photo',
  },

  // ============================================================
  // TIME CAPSULE (25.10.25 // 01:30 AM)
  // ============================================================
  {
    id: 'capsule-audio',
    act: 'time-capsule',
    chapter: 'TIME CAPSULE',
    dateStamp: '25.10.25 // 01:30 AM',
    location: 'THE FIRST HAIR TIE',
    title: 'A Message From Someone Who Didn’t Know',
    shortFragment: 'Recording that message late at night.',
    extendedNote: 'Receiving my first hair tie from you. My heart was racing. I was nervous, overwhelmed, and happy. I was so innocently sure that we were locked in for life.',
    mediaUrl: '/audio/timecapsule.m4a',
    mediaType: 'audio',
  },

  // ============================================================
  // ACT V: THE ORDINARY MONTHS & BEST FRIEND (NOV 2025 – MAY 2026)
  // ============================================================
  {
    id: 'act5-winter',
    act: 'act-5',
    chapter: 'THE ORDINARY MONTHS',
    dateStamp: 'NOV – DEC 2025',
    shortFragment: 'Gym, Christmas break, everyday life.',
    extendedNote: 'Love growing smoothly. Normal disagreements, shared tables, becoming woven into each other’s routine. Ordinary happiness.',
    scale: 'normal',
    align: 'left',
  },
  {
    id: 'photo-act5-winter',
    act: 'act-5',
    dateStamp: 'DECEMBER 2025',
    shortFragment: 'Christmas break.',
    mediaUrl: '/photos/chrismas break.png',
    mediaType: 'photo',
  },
  {
    id: 'act5-walls',
    act: 'act-5',
    chapter: 'THE HARDER MONTHS',
    dateStamp: 'JANUARY 2026',
    shortFragment: 'Arguments grew heavier.',
    extendedNote: 'Fear of losing each other crept in. I became more insecure, defensive, and put walls around myself.',
    scale: 'normal',
    align: 'right',
  },
  {
    id: 'act5-shivaratri',
    act: 'act-5',
    chapter: 'HUMAN MOMENTS',
    dateStamp: 'FEBRUARY 2026',
    location: 'SHIVARATRI PUJA',
    shortFragment: 'Bhang and walking home tipsy.',
    extendedNote: 'Both of us tipsy, laughing in the cold. I barely remember getting home. A completely human, ridiculous memory.',
    scale: 'normal',
    align: 'left',
  },
  {
    id: 'act5-bestfriend',
    act: 'act-5',
    chapter: 'MORE THAN A GIRLFRIEND',
    dateStamp: 'MARCH – MAY 2026',
    title: 'Best Friend',
    shortFragment: '8½-hour calls, stupid teas, and random reels.',
    extendedNote: 'Everyday comfort. Shared silence. You became so much more than a girlfriend. You started becoming more of my everything than ever before. That was why everything that followed mattered so deeply.',
    scale: 'large',
    align: 'center',
  },
  {
    id: 'photo-act5-spring',
    act: 'act-5',
    dateStamp: 'APRIL 2026',
    shortFragment: 'Shared afternoons.',
    mediaUrl: '/photos/shared afternoons.jpg',
    mediaType: 'photo',
  },

  // ============================================================
  // ACT VI: THE RETURN, THE COLLAPSE & MATURE GROWTH (JUNE – AUG 2026)
  // ============================================================
  {
    id: 'act6-june',
    act: 'act-6',
    chapter: 'THE RETURN',
    dateStamp: 'JUNE 2026',
    shortFragment: 'We broke up, then you returned around my birthday.',
    extendedNote: 'The next day we went on a walk. Love felt alive again. I honestly thought we had survived and made it through.',
    scale: 'normal',
    align: 'center',
  },
  {
    id: 'act6-collapse',
    act: 'act-6',
    chapter: 'THE COLLAPSE',
    dateStamp: 'JULY 2026',
    shortFragment: 'Everything began collapsing.',
    extendedNote: 'I became defensive, insecure, and hurt. I broke a promise and raised my voice. I understand now that being hurt never justified hurting someone else.',
    scale: 'normal',
    align: 'left',
  },
  {
    id: 'act6-growth',
    act: 'act-6',
    chapter: 'THE QUIETER LOVE',
    dateStamp: 'AUGUST 2026',
    shortFragment: 'Learning the shape of a quieter love.',
    extendedNote: 'Love isn’t ownership. Love isn’t holding someone so tightly they can’t breathe, or losing yourself to keep someone else. I still care, but the shape of it is quieter. Less desperate. Wanting to stand beside you, not beneath you.',
    scale: 'large',
    align: 'center',
  },
];

export const THE_LETTER = `I remember the walks.

I remember Durpin. You complained about being tired before we even started climbing. I remember the dog that almost bit you. At the time it was panic, but now it just makes me smile. It's funny how the things that felt so ordinary become the things you miss the most.

I remember you being hungry. I remember the headaches, the stomachaches, and the fatigue. I miss knowing your small inconveniences. I miss knowing when you were hungry before you said it. I miss the little pauses. I miss being the person who knew those things.

I remember holding your elbow steady while you filmed the sunrise so your hands wouldn't shake. It was such a tiny thing. I don't think either of us knew we'd remember things like that. I remember the guard at Mangaldham. I remember wishing for someone who would love me for who I actually was, and then being mistaken for a couple moments later. I remember you waiting for me at the bus stand. You waited for me. The juice was just my apology when I finally arrived.

I remember the way you smelled. Your hair smelled so good that I used to steal little breaths of it when you weren't paying attention. I don't remember every conversation we ever had, but somehow some part of me still knows your scent. And your eyes. I don't think I ever told you enough how much I loved looking at them.

I wasn't just happy because I had a girlfriend. I was happy because I had found someone around whom I didn't feel like I had to perform. We could start conversations from absolutely nothing. And when there was nothing to talk about, that was enough too.

I remember October 25th. Our first date. I remember receiving my first hair tie from you. I remember recording that birthday message that night. My heart was racing. I was nervous, overwhelmed, and happy. I was so innocently sure that we were locked in for life.

I remember August 14th. You told me I deserved all the love and care in the world. I don't remember the exact conversation that brought us there. I just remember that you said it, and how much it meant to me.

I know things changed. Somewhere along the way, the easy parts became difficult. Words that once came without thinking began needing permission. I don't know exactly when that happened. I only know that it did.

But distance doesn't make the things that happened before it disappear. None of those mornings became less real. The safety, the ridiculousness, the tenderness. It all happened.

I would have stayed. I would still have chosen the ordinary things. I would still have walked. I would still have listened to the complaints. I would still have waited for the little pauses. I would still have loved the version of you that nobody else saw.

But I am learning that caring about someone also means knowing when you cannot keep reaching for them. I didn't want to leave. But I don't want to make you carry the weight of me staying.

I would have stayed. Yet I want to respect the boundaries you've set. Your Rishav has not moved an inch from where you left him.

Lastly, happiest birthday, Cutu. And I guess I'm not supposed to, but still... I LOVE YOU.

I hope you appreciate this small effort of mine. Things aren't the best between us right now, but they'll get better eventually, and I'll get my Homegirl back with some more banger lore.

Until then, take care.

I wrote this whole code over the course of a week. I wanted it to be authentic and genuine for you. I wanted every part of it to feel like something I actually remembered, rather than something I had written just to make it sound beautiful.

Lastly, happy birthday again, Cutu. I hope our misunderstandings can be sorted out over time, and I hope 2026–27 is kinder to both of us.

Happiest birthday.

And if you'd like... invite me for a treat lol. 😭`;
