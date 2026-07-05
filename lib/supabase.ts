// Read-only Supabase client for the marketing site.
// Uses ONLY the public anon key — never the service role.
// If env vars are missing, exports null and every section falls back
// to its static placeholder content gracefully.
import { createClient, SupabaseClient } from '@supabase/supabase-js'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase: SupabaseClient | null =
  url && anon ? createClient(url, anon) : null
