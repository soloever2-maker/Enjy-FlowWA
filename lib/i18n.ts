// =====================================================================
// Bilingual copy dictionary (Arabic default). All Arabic copy uses
// feminine address forms — this is a ladies-only studio.
// Keys are stable: components read t('key'), never hardcode copy.
// =====================================================================

export type Lang = 'ar' | 'en'

export const DICT = {
  // ---- Navbar
  'nav.classes': { ar: 'الكلاسات', en: 'Classes' },
  'nav.retreats': { ar: 'الريتريتس', en: 'Retreats' },
  'nav.reviews': { ar: 'آراء العميلات', en: 'Reviews' },
  'nav.store': { ar: 'المتجر', en: 'Store' },
  'nav.about': { ar: 'عن إنجي', en: 'About Enjy' },
  'nav.contact': { ar: 'تواصلي معنا', en: 'Contact' },
  'nav.cta': { ar: 'حمّلي التطبيق', en: 'Get the App' },

  // ---- Hero
  'hero.eyebrow': { ar: 'استوديو للسيدات فقط', en: 'A Ladies-Only Studio' },
  'hero.title.1': { ar: 'رحلتك نحو', en: 'Your journey to' },
  'hero.title.2': { ar: 'التوازن', en: 'alignment' },
  'hero.title.3': { ar: 'تبدأ هنا', en: 'begins here' },
  'hero.sub': {
    ar: 'يوجا · فتنس · ويلنس — في مجتمع نسائي آمن وداعم بقيادة إنجي جبريل',
    en: 'Yoga · Fitness · Wellness — a safe, supportive women’s community led by Enjy Gebril',
  },
  'hero.cta.primary': { ar: 'حمّلي التطبيق', en: 'Get the App' },
  'hero.cta.secondary': { ar: 'اكتشفي الكلاسات', en: 'Explore Classes' },
  'hero.photo.caption': { ar: 'ريتريت أسوان — على ضفاف النيل', en: 'Aswan retreat — on the banks of the Nile' },

  // ---- Classes
  'classes.label': { ar: 'الكلاسات', en: 'Classes' },
  'classes.title': { ar: 'اختاري كلاسك المناسب', en: 'Choose your class' },
  'classes.sub': {
    ar: 'كل الكلاسات بمستويات تناسب المبتدئة والمتقدمة — والحجز كله من التطبيق',
    en: 'Every class welcomes beginners and advanced members — all booking happens in the app',
  },
  'classes.book': { ar: 'احجزي من التطبيق', en: 'Book in the app' },

  // ---- Retreats
  'retreats.label': { ar: 'الريتريتس', en: 'Retreats' },
  'retreats.title': { ar: 'رحلات تعيدك لنفسك', en: 'Journeys back to yourself' },
  'retreats.sub': {
    ar: 'أيام كاملة من اليوجا والطبيعة والسكينة — بصحبة نسائية آمنة',
    en: 'Full days of yoga, nature and stillness — in safe women’s company',
  },
  'retreats.empty': {
    ar: 'ريتريتس جديدة يتم الإعلان عنها قريبًا — تابعينا',
    en: 'New retreats announced soon — stay tuned',
  },
  'retreats.location': { ar: 'المكان', en: 'Location' },
  'retreats.date': { ar: 'الموعد', en: 'Date' },
  'retreats.price': { ar: 'السعر', en: 'Price' },
  'retreats.egp': { ar: 'ج.م', en: 'EGP' },
  'retreats.details': { ar: 'التفاصيل والحجز من التطبيق', en: 'Details & booking in the app' },

  // ---- Reviews
  'reviews.label': { ar: 'آراء العميلات', en: 'Reviews' },
  'reviews.title': { ar: 'بكلماتهن هنّ', en: 'In their own words' },
  'reviews.avg': { ar: 'متوسط التقييم', en: 'Average rating' },
  'reviews.count': { ar: 'تقييم', en: 'reviews' },
  'reviews.empty': {
    ar: 'آراء عميلاتنا تظهر هنا بعد اعتمادها',
    en: 'Approved member reviews appear here',
  },

  // ---- Store
  'store.label': { ar: 'المتجر', en: 'The Store' },
  'store.title': { ar: 'متجر Align', en: 'The Align Store' },
  'store.sub': {
    ar: 'منتجات مختارة بعناية لرحلتك — قريبًا جدًا',
    en: 'Carefully curated products for your journey — coming very soon',
  },
  'store.soon': { ar: 'قريبًا', en: 'Coming Soon' },
  'store.notify': { ar: 'نبّهيني عند الافتتاح', en: 'Notify me at launch' },

  // ---- About
  'about.label': { ar: 'عن إنجي', en: 'About Enjy' },
  'about.title': { ar: 'إنجي جبريل', en: 'Enjy Gebril' },
  'about.bio.1': {
    ar: 'مدربة يوجا وويلنس معتمدة، أسّست Align with Enjy ليكون مساحة نسائية آمنة تجمع بين الحركة والسكينة — مكان تجدين فيه قوّتك بإيقاعك أنتِ.',
    en: 'A certified yoga & wellness instructor, Enjy founded Align with Enjy as a safe women’s space where movement meets stillness — a place to find your strength at your own pace.',
  },
  'about.bio.2': {
    ar: 'من كلاسات الاستوديو الأسبوعية إلى ريتريتس على ضفاف النيل، كل تجربة مصمَّمة بعناية لتخرجي منها أهدأ، أقوى، وأقرب لنفسك.',
    en: 'From weekly studio classes to retreats on the banks of the Nile, every experience is designed with care — so you leave calmer, stronger, and closer to yourself.',
  },
  'about.point.1': { ar: 'مدربة معتمدة بخبرة 8+ سنوات', en: 'Certified instructor, 8+ years of experience' },
  'about.point.2': { ar: 'مجتمع للسيدات فقط — آمن وداعم', en: 'A ladies-only community — safe and supportive' },
  'about.point.3': { ar: 'كلاسات وريتريتس مصمَّمة بحب', en: 'Classes and retreats designed with love' },
  'about.caption.indoor': { ar: 'الاستوديو الداخلي', en: 'The indoor studio' },
  'about.caption.outdoor': { ar: 'مساحة البرجولة المفتوحة', en: 'The open-air pergola' },

  // ---- Download App
  'app.label': { ar: 'التطبيق', en: 'The App' },
  'app.title.1': { ar: 'كلاسك على بُعد', en: 'Your class is' },
  'app.title.2': { ar: 'ثوانٍ', en: 'seconds away' },
  'app.sub': {
    ar: 'تجربة Align الكاملة في جيبك — من أول الحجز لحد التشيك-إن',
    en: 'The full Align experience in your pocket — from booking to check-in',
  },
  'app.f1': { ar: 'احجزي وأديري كلاساتك', en: 'Book & manage your classes' },
  'app.f2': { ar: 'تابعي باقتك وحصصك المتبقية', en: 'Track your package & remaining sessions' },
  'app.f3': { ar: 'تذكيرات قبل كل حصة', en: 'Reminders before every session' },
  'app.f4': { ar: 'تشيك-إن سريع بالـ QR', en: 'Quick QR check-in' },
  'app.soon': { ar: 'قريبًا', en: 'Soon' },
  'app.appstore.top': { ar: 'قريبًا على', en: 'Coming soon on the' },
  'app.appstore.top.live': { ar: 'حمّليه من', en: 'Download on the' },
  'app.playstore.top': { ar: 'قريبًا على', en: 'Coming soon on' },
  'app.playstore.top.live': { ar: 'حمّليه من', en: 'Get it on' },
  'app.web': { ar: 'أو استخدمي نسخة الويب', en: 'Or use the web app' },

  // ---- Contact
  'contact.label': { ar: 'تواصلي معنا', en: 'Contact' },
  'contact.title': { ar: 'يسعدنا نسمع منك', en: 'We’d love to hear from you' },
  'contact.whatsapp': { ar: 'واتساب', en: 'WhatsApp' },
  'contact.whatsapp.sub': { ar: 'اسألي عن أي حاجة — بنرد بسرعة', en: 'Ask us anything — we reply fast' },
  'contact.instagram': { ar: 'انستجرام', en: 'Instagram' },
  'contact.instagram.sub': { ar: 'تابعي يومياتنا وكواليس الكلاسات', en: 'Follow our days and class moments' },
  'contact.location': { ar: 'زوري الاستوديو', en: 'Visit the Studio' },
  'contact.location.sub': { ar: 'افتحي اللوكيشن على الخريطة', en: 'Open the location on the map' },

  // ---- Footer
  'footer.privacy': { ar: 'سياسة الخصوصية', en: 'Privacy Policy' },
  'footer.rights': { ar: 'جميع الحقوق محفوظة', en: 'All rights reserved' },
  'footer.tagline': { ar: 'يوجا · فتنس · ويلنس', en: 'Yoga · Fitness · Wellness' },
} as const

export type DictKey = keyof typeof DICT
