import { createClient } from '@supabase/supabase-js'

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ||
  import.meta.env.NEXT_PUBLIC_SUPABASE_URL ||
  ''

const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  import.meta.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  ''

/**
 * Checks if Supabase credentials have been configured
 */
export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
  supabaseAnonKey &&
  supabaseUrl !== 'https://your-project-id.supabase.co' &&
  supabaseAnonKey !== 'your-anon-public-key-here' &&
  !supabaseUrl.includes('your-project')
)

if (!isSupabaseConfigured && import.meta.env.DEV) {
  console.info(
    '%c[Supabase Notice]%c Buna Burji Hotel Supabase credentials are not set in .env. Falling back to local data. See supabase/README.md for setup instructions.',
    'color: #0dcaf0; font-weight: bold;',
    'color: inherit;'
  )
}

/**
 * Supabase client instance.
 * If credentials are not yet configured, provides a dummy fallback client
 * to avoid runtime crashes during initial development.
 */
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : {
      from: () => ({
        select: async () => ({ data: null, error: new Error('Supabase is not configured yet. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env') }),
        insert: async () => ({ data: null, error: new Error('Supabase is not configured yet. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env') }),
        update: async () => ({ data: null, error: new Error('Supabase is not configured yet. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env') }),
        delete: async () => ({ data: null, error: new Error('Supabase is not configured yet. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env') })
      })
    }

