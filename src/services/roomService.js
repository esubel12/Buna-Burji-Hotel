import { supabase, isSupabaseConfigured } from '../lib/supabase'
import { heroImage } from '../assets'

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
    image_url: heroImage,
    imageAlt: 'Buna Burji Hotel room interior with warm lighting',
  },
  {
    id: '2',
    icon: 'bi-star-fill',
    name: 'Double Room',
    slug: 'double-room',
    price_per_night: 1800,
    currency: 'ETB',
    description:
      'A spacious setting for guests who value extra room to unwind. Elegant finishes, soothing tones, and a restful environment create a refined stay.',
    features: ['Elegant décor', 'High-speed WiFi', 'Modern bathroom', 'Quiet workspace'],
    image_url: heroImage,
    imageAlt: 'Buna Burji Hotel guest room with elegant décor',
  },
  {
    id: '3',
    icon: 'bi-crown-fill',
    name: 'Twin Room',
    slug: 'twin-room',
    price_per_night: 2200,
    currency: 'ETB',
    description:
      'Comfortable accommodation for friends or family members traveling together, offering flexible sleeping arrangements and a welcoming interior.',
    features: ['Flexible layout', 'Complimentary WiFi', 'Inviting atmosphere', 'Modern amenities'],
    image_url: heroImage,
    imageAlt: 'Buna Burji Hotel welcoming guest room interior',
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

    return data
  } catch (err) {
    console.error('Failed to fetch rooms from Supabase, using default data:', err)
    return DEFAULT_ROOMS
  }
}

