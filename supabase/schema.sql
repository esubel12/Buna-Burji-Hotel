-- ==============================================================================
-- BUNA BURJI HOTEL - SUPABASE DATABASE SCHEMA
-- Location: Amaro Kelle, Ethiopia
-- ==============================================================================

-- Enable UUID extension if needed
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ------------------------------------------------------------------------------
-- 1. ROOMS TABLE
-- Stores guest rooms and accommodation offerings
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.rooms (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    category VARCHAR(50) DEFAULT 'Standard',
    description TEXT NOT NULL,
    price_per_night NUMERIC(10, 2) NOT NULL DEFAULT 0.00,
    currency VARCHAR(10) DEFAULT 'ETB',
    capacity_adults INT DEFAULT 2,
    capacity_children INT DEFAULT 1,
    bed_type VARCHAR(100) DEFAULT 'Single bed',
    icon VARCHAR(50) DEFAULT 'bi-bed-fill',
    image_url TEXT DEFAULT '/hero.png',
    gallery_urls TEXT[] DEFAULT '{}',
    features TEXT[] DEFAULT '{}',
    is_available BOOLEAN DEFAULT true,
    is_featured BOOLEAN DEFAULT true,
    display_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ------------------------------------------------------------------------------
-- 2. SERVICES & AMENITIES TABLE
-- Stores amenities provided by Buna Burji Hotel
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.services (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(150) NOT NULL,
    slug VARCHAR(150) UNIQUE,
    description TEXT NOT NULL,
    icon VARCHAR(60) NOT NULL DEFAULT 'bi-star-fill',
    category VARCHAR(50) DEFAULT 'general',
    is_active BOOLEAN DEFAULT true,
    display_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ------------------------------------------------------------------------------
-- 3. CONTACT MESSAGES / INQUIRIES TABLE
-- Stores guest messages submitted via the website contact form
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(30) DEFAULT 'new' CHECK (status IN ('new', 'read', 'in_progress', 'resolved', 'archived')),
    admin_notes TEXT,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ------------------------------------------------------------------------------
-- 4. BOOKINGS / RESERVATIONS TABLE
-- Stores reservation inquiries and guest bookings
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    room_id UUID REFERENCES public.rooms(id) ON DELETE SET NULL,
    guest_name VARCHAR(150) NOT NULL,
    guest_email VARCHAR(150) NOT NULL,
    guest_phone VARCHAR(50) NOT NULL,
    check_in_date DATE NOT NULL,
    check_out_date DATE NOT NULL,
    number_of_guests INT DEFAULT 1,
    total_price NUMERIC(10, 2),
    currency VARCHAR(10) DEFAULT 'ETB',
    status VARCHAR(30) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'checked_in', 'checked_out', 'cancelled')),
    special_requests TEXT,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ------------------------------------------------------------------------------
-- 5. REVIEWS & TESTIMONIALS TABLE
-- Stores guest reviews and feedback
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    room_id UUID REFERENCES public.rooms(id) ON DELETE SET NULL,
    guest_name VARCHAR(150) NOT NULL,
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT NOT NULL,
    is_approved BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ------------------------------------------------------------------------------
-- 6. HOTEL SETTINGS / CONTACT INFO TABLE
-- Key-value or single-row configuration for hotel contact details & location
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.hotel_settings (
    id VARCHAR(50) PRIMARY KEY DEFAULT 'default',
    hotel_name VARCHAR(150) DEFAULT 'Buna Burji Hotel',
    location VARCHAR(150) DEFAULT 'Amaro Kelle',
    phone VARCHAR(50) DEFAULT '+251 00 000 0000',
    email VARCHAR(100) DEFAULT 'info@bunaburjihotel.com',
    reception_hours VARCHAR(100) DEFAULT '24/7 Front Desk',
    check_in_time VARCHAR(20) DEFAULT '14:00',
    check_out_time VARCHAR(20) DEFAULT '11:00',
    address_description TEXT DEFAULT 'Amaro Kelle, Ethiopia',
    updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ==============================================================================
-- AUTOMATIC TIMESTAMP TRIGGER
-- ==============================================================================
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_rooms_updated_at ON public.rooms;
CREATE TRIGGER set_rooms_updated_at
    BEFORE UPDATE ON public.rooms
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS set_services_updated_at ON public.services;
CREATE TRIGGER set_services_updated_at
    BEFORE UPDATE ON public.services
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS set_contact_messages_updated_at ON public.contact_messages;
CREATE TRIGGER set_contact_messages_updated_at
    BEFORE UPDATE ON public.contact_messages
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS set_bookings_updated_at ON public.bookings;
CREATE TRIGGER set_bookings_updated_at
    BEFORE UPDATE ON public.bookings
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

-- Enable RLS on all tables
ALTER TABLE public.rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.hotel_settings ENABLE ROW LEVEL SECURITY;

-- 1. Rooms Policies
-- Anyone can view available rooms
CREATE POLICY "Public can view active rooms"
    ON public.rooms FOR SELECT
    USING (is_available = true);

-- Authenticated admins/staff can manage rooms
CREATE POLICY "Admins can manage rooms"
    ON public.rooms FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- 2. Services Policies
-- Anyone can view active services
CREATE POLICY "Public can view active services"
    ON public.services FOR SELECT
    USING (is_active = true);

-- Authenticated admins/staff can manage services
CREATE POLICY "Admins can manage services"
    ON public.services FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- 3. Contact Messages Policies
-- Anyone (website visitors) can submit a contact message
CREATE POLICY "Public can submit contact messages"
    ON public.contact_messages FOR INSERT
    WITH CHECK (true);

-- Only authenticated admins/staff can read or update contact messages
CREATE POLICY "Admins can view and update contact messages"
    ON public.contact_messages FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- 4. Bookings Policies
-- Anyone can submit a booking request
CREATE POLICY "Public can submit booking requests"
    ON public.bookings FOR INSERT
    WITH CHECK (true);

-- Authenticated staff can view and manage all bookings
CREATE POLICY "Admins can manage all bookings"
    ON public.bookings FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- 5. Reviews Policies
-- Public can view approved reviews
CREATE POLICY "Public can view approved reviews"
    ON public.reviews FOR SELECT
    USING (is_approved = true);

-- Anyone can submit a review (defaults to unapproved until reviewed by admin)
CREATE POLICY "Public can submit reviews"
    ON public.reviews FOR INSERT
    WITH CHECK (true);

-- Authenticated admins can manage reviews
CREATE POLICY "Admins can manage reviews"
    ON public.reviews FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- 6. Hotel Settings Policies
-- Public can read hotel settings
CREATE POLICY "Public can view hotel settings"
    ON public.hotel_settings FOR SELECT
    USING (true);

-- Authenticated admins can update hotel settings
CREATE POLICY "Admins can manage hotel settings"
    ON public.hotel_settings FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- ==============================================================================
-- INITIAL SEED DATA
-- Pre-populate Buna Burji Hotel rooms, services, and hotel information
-- ==============================================================================

-- Seed Hotel Settings
INSERT INTO public.hotel_settings (id, hotel_name, location, phone, email, reception_hours, check_in_time, check_out_time, address_description)
VALUES (
    'default',
    'Buna Burji Hotel',
    'Amaro Kelle',
    '+251 00 000 0000',
    'contact@bunaburjihotel.com',
    '24/7 Front Desk & Guest Support',
    '14:00',
    '11:00',
    'Amaro Kelle, Southern Ethiopia'
)
ON CONFLICT (id) DO UPDATE SET
    hotel_name = EXCLUDED.hotel_name,
    location = EXCLUDED.location;

-- Seed Rooms
INSERT INTO public.rooms (name, slug, category, description, price_per_night, currency, capacity_adults, capacity_children, bed_type, icon, image_url, features, is_available, is_featured, display_order)
VALUES
(
    'Standard Room',
    'standard-room',
    'Standard',
    'A warm and welcoming room designed for travelers seeking a calm, comfortable stay in Amaro Kelle. Thoughtfully equipped with essential amenities to ensure a restful stay.',
    1200.00,
    'ETB',
    1,
    0,
    'Single bed',
    'bi-bed-fill',
    '/hero.png',
    ARRAY['Single bed', 'Modern bathroom', 'Free WiFi', 'Work area', 'Relaxed seating area'],
    true,
    true,
    1
),
(
    'Double Room',
    'double-room',
    'Deluxe',
    'A spacious setting for guests who value extra room to unwind. Featuring premium bedding, elegant finishes, soothing tones, and a restful environment for a refined stay.',
    1800.00,
    'ETB',
    2,
    1,
    'King bed',
    'bi-star-fill',
    '/hero.png',
    ARRAY['King bed', 'Ensuite bathroom', 'Free WiFi', 'Seating area', 'Elegant décor', 'Quiet workspace'],
    true,
    true,
    2
),
(
    'Twin Room',
    'twin-room',
    'Family',
    'Comfortable accommodation for small families or friends traveling together, offering flexible sleeping arrangements, two comfortable beds, modern facilities, and a welcoming interior.',
    2200.00,
    'ETB',
    2,
    2,
    'Twin beds',
    'bi-crown-fill',
    '/hero.png',
    ARRAY['Twin beds', 'Spacious layout', 'Free WiFi', 'Family-friendly', 'Modern bathroom', 'Inviting atmosphere'],
    true,
    true,
    3
)
ON CONFLICT (slug) DO UPDATE SET
    name = EXCLUDED.name,
    description = EXCLUDED.description,
    features = EXCLUDED.features;

-- Seed Hotel Services
INSERT INTO public.services (name, slug, description, icon, category, display_order)
VALUES
(
    'Restaurant & Dining',
    'restaurant-dining',
    'Refined dining with warm service and thoughtfully prepared meals that reflect Buna Burji Hotel hospitality.',
    'bi-cup-hot-fill',
    'dining',
    1
),
(
    'Comfortable Rooms',
    'comfortable-rooms',
    'Well-appointed guest rooms designed for rest and relaxation, with premium bedding and modern comforts.',
    'bi-house-fill',
    'accommodation',
    2
),
(
    'Conference & Meeting Facilities',
    'conference-meeting-facilities',
    'Professional meeting spaces available for business gatherings, presentations, and small events.',
    'bi-people-fill',
    'business',
    3
),
(
    'Free Wi-Fi',
    'free-wifi',
    'Reliable complimentary Wi-Fi throughout the property to keep guests connected during their stay.',
    'bi-wifi',
    'amenity',
    4
),
(
    'Parking',
    'parking',
    'Convenient parking options for guests arriving by car with easy access to the hotel entrance.',
    'bi-car-front-fill',
    'amenity',
    5
),
(
    '24/7 Guest Support',
    'guest-support',
    'Attentive guest support is available around the clock to assist with requests and local guidance.',
    'bi-headset',
    'service',
    6
),
(
    'Housekeeping',
    'housekeeping',
    'Daily housekeeping that maintains a clean, fresh, and welcoming environment for every guest.',
    'bi-brush',
    'service',
    7
),
(
    'Relaxation & Lounge Area',
    'relaxation-lounge',
    'A comfortable lounge space designed for unwinding with a calm, welcoming atmosphere.',
    'bi-door-closed-fill',
    'facility',
    8
)
ON CONFLICT (slug) DO UPDATE SET
    name = EXCLUDED.name,
    description = EXCLUDED.description,
    icon = EXCLUDED.icon;

