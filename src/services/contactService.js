import { supabase, isSupabaseConfigured } from '../lib/supabase'

/**
 * Submits a contact inquiry to the Supabase contact_messages table
 * @param {Object} payload
 * @param {string} payload.fullName
 * @param {string} payload.email
 * @param {string} payload.phone
 * @param {string} payload.message
 * @returns {Promise<{success: boolean, data?: any, error?: string}>}
 */
export async function submitContactMessage({ fullName, email, phone, message }) {
  if (!isSupabaseConfigured) {
    // If Supabase is not configured yet, simulate successful receipt for development
    console.warn('Supabase is not configured. Simulating successful message submission for development.')
    return {
      success: true,
      simulated: true,
      message: 'Demo mode: Message received locally. Connect Supabase to store permanently in database.'
    }
  }

  try {
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([
        {
          full_name: fullName.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim(),
          message: message.trim(),
          status: 'new'
        }
      ])
      .select()

    if (error) {
      console.error('Error submitting contact message to Supabase:', error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (err) {
    console.error('Unexpected error submitting contact message:', err)
    return {
      success: false,
      error: err instanceof Error ? err.message : 'An unexpected error occurred while sending your message.'
    }
  }
}

