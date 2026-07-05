# Align with Enjy — Marketing Website

Promotional website for the ladies-only yoga & wellness studio.
All booking happens in the app — this site's job is app downloads.

## Deploy (GitHub → Vercel)
1. Push this folder to a new GitHub repo.
2. Import the repo in Vercel (framework auto-detected: Next.js).
3. Add TWO environment variables (same values as the app project):
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   Never add the service role key to this project.
4. Run `website-public-read-access.sql` once in the Supabase SQL
   Editor so anonymous visitors can read retreats/class_types/reviews.

## Going live on the stores
Edit `lib/site-config.ts`:
- `APP_STORE_URL` / `PLAY_STORE_URL` — paste the real URLs and the
  "Soon" badges become live download buttons automatically.

## Where to edit things
- Copy (AR/EN): `lib/i18n.ts`
- Links, stats, store products, fallback classes: `lib/site-config.ts`
- Brand photos: `/public` (logo.png, retreat-aswan.jpg, studio-*.jpg)
