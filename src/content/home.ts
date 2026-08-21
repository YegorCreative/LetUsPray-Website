export const homeMeta = {
  title: 'LetUsPray',
  description:
    'LetUsPray is a Scripture-centered prayer app for iPhone and iPad. It helps you pray through Scripture, one verse at a time.',
};

export const rhythm = [
  {
    title: 'Read Scripture',
    body: 'God speaks first. Each moment begins with a Bible verse, given room to be read.',
  },
  {
    title: 'Pray',
    body: 'A Scripture-centered prayer helps you respond to what you have just read.',
  },
  {
    title: 'Reflect',
    body: 'You may journal, write your own prayer, or remain still. Reflection is invited, never required.',
  },
  {
    title: 'Continue',
    body: 'When you are ready, move to the next verse or session in your journey.',
  },
  {
    title: 'Return',
    body: 'Tomorrow, pick up where you left off. The app remembers. You simply continue.',
  },
] as const;

export const features = [
  {
    title: 'Scripture-centered prayer',
    body: 'Every prayer begins with God’s Word. The verse comes first. Prayer is the response.',
  },
  {
    title: 'Today',
    body: 'Open the app and begin. Today is a simple place to start or continue your prayer.',
  },
  {
    title: 'Prayer journeys',
    body: 'Browse plans and pray through Scripture at a steady pace, including journeys such as Proverbs, Psalms, and the Lord’s Prayer.',
  },
  {
    title: 'Continue where you left off',
    body: 'Your progress is remembered on the device, so returning does not require starting over.',
  },
  {
    title: 'Saved prayers and verses',
    body: 'Keep verses and prayers you want to revisit.',
  },
  {
    title: 'Reflection and journal',
    body: 'Write what you are learning, or leave the page quiet. The journal belongs to you.',
  },
  {
    title: 'Search and Library',
    body: 'Find Scripture, themes, and journeys when you know what you want to pray.',
  },
  {
    title: 'Optional account',
    body: 'LetUsPray works without an account. If you choose, you may sign in with Apple or Google for optional sync.',
  },
  {
    title: 'iPhone and iPad',
    body: 'Pray on iPhone or iPad. An account is not required to begin.',
  },
] as const;

export const iphoneScreenshots = [
  {
    src: '/images/screenshots/today.jpg',
    alt: 'LetUsPray Today screen on iPhone, with today’s prayer card and a prayer calendar.',
    caption: 'Today — a gentle place to begin',
  },
  {
    src: '/images/screenshots/welcome.jpg',
    alt: 'LetUsPray welcome screen on iPhone inviting you to begin using the app.',
    caption: 'A simple invitation to pray',
  },
  {
    src: '/images/screenshots/journeys.jpg',
    alt: 'LetUsPray Prayer Journeys list on iPhone, including the Lord’s Prayer, Proverbs, and Psalms.',
    caption: 'Browse prayer journeys',
  },
  {
    src: '/images/screenshots/prayer.jpg',
    alt: 'LetUsPray prayer screen on iPhone, showing Scripture followed by a prayer.',
    caption: 'Scripture first, then prayer',
  },
] as const;

/** iPad screenshots are architected here and remain empty until supplied. */
export const ipadScreenshots: readonly {
  src: string;
  alt: string;
  caption: string;
}[] = [];

export const screenshotIntrinsic = {
  width: 921,
  height: 2000,
};
