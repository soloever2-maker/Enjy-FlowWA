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
