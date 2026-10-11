import { supabase, isSupabaseConfigured } from '../lib/supabase'

/**
 * Creates a new booking reservation in Supabase
 * @param {Object} bookingData
 * @param {string} [bookingData.roomId]
 * @param {string} bookingData.guestName
 * @param {string} bookingData.guestEmail
 * @param {string} bookingData.guestPhone
 * @param {string} bookingData.checkInDate
 * @param {string} bookingData.checkOutDate
 * @param {number} [bookingData.numberOfGuests=1]
 * @param {string} [bookingData.specialRequests]
 * @returns {Promise<{success: boolean, data?: any, error?: string}>}
 */
export async function createBooking({
  roomId,
  guestName,
  guestEmail,
  guestPhone,
  checkInDate,
  checkOutDate,
  numberOfGuests = 1,
  specialRequests = ''
}) {
  if (!isSupabaseConfigured) {
    console.warn('Supabase is not configured. Simulating booking creation.')
    return {
      success: true,
      simulated: true,
      message: 'Demo mode: Booking registered locally. Connect Supabase to store permanently in database.'
    }
  }

  try {
    const { data, error } = await supabase
      .from('bookings')
      .insert([
        {
          room_id: roomId || null,
          guest_name: guestName.trim(),
          guest_email: guestEmail.trim().toLowerCase(),
          guest_phone: guestPhone.trim(),
          check_in_date: checkInDate,
          check_out_date: checkOutDate,
          number_of_guests: numberOfGuests,
          special_requests: specialRequests?.trim() || null,
          status: 'pending'
        }
      ])
      .select()

    if (error) {
      console.error('Error creating booking in Supabase:', error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (err) {
    console.error('Unexpected error creating booking:', err)
    return {
      success: false,
      error: err instanceof Error ? err.message : 'An unexpected error occurred while creating booking.'
    }
  }
}

