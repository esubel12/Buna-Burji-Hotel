import { supabase, isSupabaseConfigured } from '../lib/supabase'

export const DEFAULT_SERVICES = [
  {
    id: 1,
    icon: 'bi-cup-hot-fill',
    name: 'Restaurant & Dining',
    description: 'Refined dining with warm service and thoughtfully prepared meals that reflect Buna Burji Hotel hospitality.'
  },
  {
    id: 2,
    icon: 'bi-house-fill',
    name: 'Comfortable Rooms',
    description: 'Well-appointed guest rooms designed for rest and relaxation, with premium bedding and modern comforts.'
  },
  {
    id: 3,
    icon: 'bi-people-fill',
    name: 'Conference & Meeting Facilities',
    description: 'Professional meeting spaces available for business gatherings, presentations, and small events.'
  },
  {
    id: 4,
    icon: 'bi-wifi',
    name: 'Free Wi-Fi',
    description: 'Reliable complimentary Wi-Fi throughout the property to keep guests connected during their stay.'
  },
  {
    id: 5,
    icon: 'bi-car-front-fill',
    name: 'Parking',
    description: 'Convenient parking options for guests arriving by car with easy access to the hotel entrance.'
  },
  {
    id: 6,
    icon: 'bi-headset',
    name: '24/7 Guest Support',
    description: 'Attentive guest support is available around the clock to assist with requests and local guidance.'
  },
  {
    id: 7,
    icon: 'bi-brush',
    name: 'Housekeeping',
    description: 'Daily housekeeping that maintains a clean, fresh, and welcoming environment for every guest.'
  },
  {
    id: 8,
    icon: 'bi-door-closed-fill',
    name: 'Relaxation & Lounge Area',
    description: 'A comfortable lounge space designed for unwinding with a calm, welcoming atmosphere.'
  }
]

/**
 * Fetch all active services from Supabase, or returns fallback static services
 * @returns {Promise<Array>}
 */
export async function getHotelServices() {
  if (!isSupabaseConfigured) {
    return DEFAULT_SERVICES
  }

  try {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('is_active', true)
      .order('display_order', { ascending: true })

    if (error || !data || data.length === 0) {
      if (error) console.warn('Supabase services query warning:', error.message)
      return DEFAULT_SERVICES
    }

    return data
  } catch (err) {
    console.error('Failed to fetch services from Supabase, using default data:', err)
    return DEFAULT_SERVICES
  }
}

