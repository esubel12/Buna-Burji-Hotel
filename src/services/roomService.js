import { supabase, isSupabaseConfigured } from '../lib/supabase'
import {
  standardRoomImage,
  deluxeRoomImage,
  twinRoomImage
} from '../assets'

export const DEFAULT_ROOMS = [
  {
    id: '1',
    icon: 'bi-bed-fill',
    name: 'Standard Room',
    slug: 'standard-room',
    price_per_night: 1200,
    currency: 'ETB',
    description:
      'A warm and welcoming room designed for travelers seeking a calm, comfortable stay in Amaro Kelle. Enjoy thoughtful touches and a peaceful atmosphere.',
    features: ['Private bathroom', 'Complimentary WiFi', 'Comfort bedding', 'Relaxed seating area'],
    image_url: standardRoomImage,
    imageAlt: 'Buna Burji Hotel Standard Room bed and interior',
  },
  {
    id: '2',
    icon: 'bi-bed-fill',
    name: 'Deluxe Room',
    slug: 'deluxe-room',
    price_per_night: 1800,
    currency: 'ETB',
    description:
      'A spacious setting for guests who value extra room to unwind. Elegant finishes, soothing tones, and a restful environment create a refined stay.',
    features: ['Elegant décor', 'High-speed WiFi', 'Modern bathroom', 'Quiet workspace'],
    image_url: deluxeRoomImage,
    imageAlt: 'Buna Burji Hotel Deluxe Room bed and interior',
  },
  {
    id: '3',
    icon: 'bi-bed-fill',
    name: 'Twin Room',
    slug: 'twin-room',
    price_per_night: 2200,
    currency: 'ETB',
    description:
      'Comfortable accommodation for friends or family members traveling together, offering flexible sleeping arrangements and a welcoming interior.',
    features: ['Flexible layout', 'Complimentary WiFi', 'Inviting atmosphere', 'Modern amenities'],
    image_url: twinRoomImage,
    imageAlt: 'Buna Burji Hotel Twin Room beds and interior',
  },
]

/**
 * Fetch all available rooms from Supabase, or returns fallback static rooms
 * @returns {Promise<Array>}
 */
export async function getRooms() {
  if (!isSupabaseConfigured) {
    return DEFAULT_ROOMS
  }

  try {
    const { data, error } = await supabase
      .from('rooms')
      .select('*')
      .eq('is_available', true)
      .order('display_order', { ascending: true })

    if (error || !data || data.length === 0) {
      if (error) console.warn('Supabase rooms query warning:', error.message)
      return DEFAULT_ROOMS
    }

    return data.map((room) => {
      const roomSlug = (room.slug || '').toLowerCase()
      const roomName = (room.name || '').toLowerCase()

      if (roomSlug === 'double-room' || roomSlug === 'deluxe-room' || roomName === 'double room') {
        return {
          ...room,
          name: 'Deluxe Room',
          slug: 'deluxe-room',
          image_url: deluxeRoomImage,
          imageAlt: 'Buna Burji Hotel Deluxe Room bed and interior'
        }
      }

      return room
    })
  } catch (err) {
    console.error('Failed to fetch rooms from Supabase, using default data:', err)
    return DEFAULT_ROOMS
  }
}
