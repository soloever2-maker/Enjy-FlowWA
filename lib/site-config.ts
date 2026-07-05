// =====================================================================
// Central site configuration — edit business values here only.
// No component logic lives in this file.
// =====================================================================

// Store links: leave empty ("") to show the badge in "Soon" state.
// When the app goes live, paste the real URL — one line, done.
export const APP_STORE_URL = ''
export const PLAY_STORE_URL = ''

// Official channels (same links used inside the app)
export const WHATSAPP_NUMBER = '201063751653'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`
export const INSTAGRAM_URL = 'https://www.instagram.com/yoga_together_forlife'
export const MAPS_URL = 'https://www.google.com/maps?q=29.978662,30.988026'

// Enjy's portrait for the About section. Drop a photo at /public/enjy.jpg
// and set this to '/enjy.jpg'. Empty = a clean typographic block renders.
export const ENJY_PHOTO = ''

// The live web app (used for "Or use the web app" + privacy policy)
export const APP_WEB_URL = 'https://wellness-hub-ten.vercel.app'
export const PRIVACY_URL = 'https://wellness-hub-ten.vercel.app/privacy'

// Hero stats — tasteful editable numbers
export const STATS = [
  { value: '8+', ar: 'سنوات خبرة', en: 'Years of Experience' },
  { value: '500+', ar: 'عضوة سعيدة', en: 'Happy Members' },
  { value: '5', ar: 'أنواع كلاسات', en: 'Class Styles' },
]

// Store teaser products (placeholders until the real store opens)
export const STORE_PRODUCTS = [
  { icon: 'mat', ar: 'مَتّات يوجا', en: 'Yoga Mats' },
  { icon: 'apparel', ar: 'ملابس الاستوديو', en: 'Studio Apparel' },
  { icon: 'accessories', ar: 'إكسسوارات ويلنس', en: 'Wellness Accessories' },
]

// Pre-filled WhatsApp message for the store "notify me" button
export const STORE_NOTIFY_MESSAGE_AR = 'أريد إشعاري عند افتتاح متجر Align 🛍️'
export const STORE_NOTIFY_MESSAGE_EN = 'Please notify me when the Align store opens 🛍️'

// Fallback classes — the REAL five classes from the app, used when
// Supabase env vars are missing or the fetch fails. Never invent data.
export const FALLBACK_CLASSES = [
  { name: 'Power Yoga' },
  { name: 'Mat Pilates' },
  { name: 'Gentle Yoga & Recovery' },
  { name: 'Belly Rhythmic Dancing' },
  { name: 'Aqua Aerobics' },
]

// Class images — keyed by class name
export const CLASS_IMAGES: Record<string, string> = {
  'Power Yoga':             '/classes/power-yoga.jpg',
  'Mat Pilates':            '/classes/mat-pilates.jpg',
  'Gentle Yoga & Recovery': '/classes/gentle-yoga.jpg',
  'Belly Rhythmic Dancing': '/classes/outdoor-meditation.jpg',
  'Aqua Aerobics':          '/classes/aqua-aerobics.jpg',
}
export const CLASS_HERO_IMAGE = '/classes/chair-yoga.jpg'
export const FALLBACK_CLASS_IMAGE = '/classes/gentle-yoga.jpg'

// Per-class emoji + bilingual one-liners (keyed by class name)
export const CLASS_META: Record<
  string,
  { emoji: string; ar: string; en: string }
> = {
  'Power Yoga': {
    emoji: '🔥',
    ar: 'قوة وتحدٍّ وتعرّق — لبناء جسد أقوى وذهن أصفى',
    en: 'Strength, challenge and sweat — build a stronger body and clearer mind',
  },
  'Mat Pilates': {
    emoji: '💪',
    ar: 'تمارين مركّزة على القوام والعضلات العميقة',
    en: 'Focused work on posture and deep core muscles',
  },
  'Gentle Yoga & Recovery': {
    emoji: '🧘',
    ar: 'حركة هادئة واستشفاء — مساحتك للسكينة والتنفس',
    en: 'Slow movement and recovery — your space to breathe and restore',
  },
  'Belly Rhythmic Dancing': {
    emoji: '💃',
    ar: 'طاقة وإيقاع وفرحة حركة — بأسلوب نسائي حر',
    en: 'Energy, rhythm and the joy of movement',
  },
  'Aqua Aerobics': {
    emoji: '🌊',
    ar: 'لياقة منعشة في الماء، لطيفة على المفاصل',
    en: 'Refreshing water fitness, gentle on the joints',
  },
}

export const DEFAULT_CLASS_META = {
  emoji: '✨',
  ar: 'اكتشفي التفاصيل والمواعيد داخل التطبيق',
  en: 'Discover details and schedule inside the app',
}

// Per-class duration + level badges (keyed by class name)
export const CLASS_DETAILS: Record<
  string,
  { duration: string; level: { ar: string; en: string } }
> = {
  'Power Yoga': {
    duration: '60',
    level: { ar: 'جميع المستويات', en: 'All Levels' },
  },
  'Mat Pilates': {
    duration: '55',
    level: { ar: 'جميع المستويات', en: 'All Levels' },
  },
  'Gentle Yoga & Recovery': {
    duration: '60',
    level: { ar: 'مبتدئات', en: 'Beginner-Friendly' },
  },
  'Belly Rhythmic Dancing': {
    duration: '50',
    level: { ar: 'جميع المستويات', en: 'All Levels' },
  },
  'Aqua Aerobics': {
    duration: '45',
    level: { ar: 'جميع المستويات', en: 'All Levels' },
  },
}

export const DEFAULT_CLASS_DETAILS = {
  duration: '60',
  level: { ar: 'جميع المستويات', en: 'All Levels' },
}

// Weekly schedule preview — condensed version for the website
export const SCHEDULE_PREVIEW = [
  {
    day: { ar: 'الأحد', en: 'Sunday' },
    classes: [
      { time: '9:00 AM', name: 'Power Yoga' },
      { time: '6:00 PM', name: 'Mat Pilates' },
    ],
  },
  {
    day: { ar: 'الإثنين', en: 'Monday' },
    classes: [
      { time: '9:00 AM', name: 'Gentle Yoga & Recovery' },
      { time: '6:00 PM', name: 'Belly Rhythmic Dancing' },
    ],
  },
  {
    day: { ar: 'الثلاثاء', en: 'Tuesday' },
    classes: [
      { time: '9:00 AM', name: 'Power Yoga' },
      { time: '6:00 PM', name: 'Aqua Aerobics' },
    ],
  },
  {
    day: { ar: 'الأربعاء', en: 'Wednesday' },
    classes: [
      { time: '9:00 AM', name: 'Mat Pilates' },
      { time: '6:00 PM', name: 'Gentle Yoga & Recovery' },
    ],
  },
  {
    day: { ar: 'الخميس', en: 'Thursday' },
    classes: [
      { time: '9:00 AM', name: 'Power Yoga' },
      { time: '6:00 PM', name: 'Belly Rhythmic Dancing' },
    ],
  },
  {
    day: { ar: 'السبت', en: 'Saturday' },
    classes: [
      { time: '9:00 AM', name: 'Aqua Aerobics' },
      { time: '11:00 AM', name: 'Gentle Yoga & Recovery' },
    ],
  },
]

// FAQ items
export const FAQ_ITEMS = [
  {
    q: { ar: 'هل لازم أجيب معايا مات؟', en: 'Do I need to bring my own mat?' },
    a: {
      ar: 'لأ — عندنا كل الأدوات في الاستوديو. بس لو عندك مات بتحبيها، أهلاً بيها!',
      en: 'No — we provide all the equipment at the studio. But if you have a mat you love, you\u2019re welcome to bring it!',
    },
  },
  {
    q: { ar: 'الكلاسات مناسبة للمبتدئات؟', en: 'Are classes suitable for beginners?' },
    a: {
      ar: 'أكيد! كل كلاساتنا فيها تعديلات للمبتدئات والمتقدمات. إنجي بتراعي كل المستويات.',
      en: 'Absolutely! All our classes include modifications for beginners and advanced members. Enjy accommodates every level.',
    },
  },
  {
    q: { ar: 'إيه سياسة الإلغاء؟', en: 'What\u2019s the cancellation policy?' },
    a: {
      ar: 'تقدري تلغي الحجز مجانًا قبل الكلاس بـ 12 ساعة — الحصة بترجع لباقتك تلقائيًا.',
      en: 'You can cancel for free up to 12 hours before class — the session goes back to your package automatically.',
    },
  },
  {
    q: { ar: 'هل المكان مختلط؟', en: 'Is the studio co-ed?' },
    a: {
      ar: 'لأ — Align مساحة للسيدات فقط. بيئة آمنة ومريحة 100%.',
      en: 'No — Align is a ladies-only space. A 100% safe and comfortable environment.',
    },
  },
  {
    q: { ar: 'إزاي أحجز كلاس؟', en: 'How do I book a class?' },
    a: {
      ar: 'كل الحجز من تطبيق Align — اختاري الكلاس، اختاري الموعد، واحجزي في ثانية.',
      en: 'All booking is through the Align app — pick your class, choose a time, and book in seconds.',
    },
  },
  {
    q: { ar: 'إيه نظام الباقات؟', en: 'How do packages work?' },
    a: {
      ar: 'بتشتري باقة بعدد حصص معين (4 أو 8 أو 12) وبتستخدميها في أي كلاس في المواعيد المتاحة.',
      en: 'You purchase a package with a set number of sessions (4, 8, or 12) and use them for any class at available times.',
    },
  },
]
