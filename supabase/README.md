# Supabase Setup Guide for Buna Burji Hotel

This guide explains how to host and configure the database for Buna Burji Hotel using [Supabase](https://supabase.com).

---

## 1. Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com) and log in or sign up for a free account.
2. In your dashboard, click **"New Project"**.
3. Select an organization (or create one).
4. Fill in the project details:
   - **Name:** `buna-burji-hotel` (or any name you prefer)
   - **Database Password:** Enter a strong password and save it in a safe place.
   - **Region:** Choose the region closest to your users (e.g., Frankfurt/Europe or closest available).
   - **Pricing Plan:** Free tier is sufficient.
5. Click **"Create new project"** and wait about 1–2 minutes for the database to provision.

---

## 2. Run the Database Schema

1. In your Supabase project dashboard, open the **SQL Editor** from the left navigation bar (icon `>_`).
2. Click **"New query"**.
3. Open the file [`supabase/schema.sql`](./schema.sql) in this repository and copy the entire content.
4. Paste it into the Supabase SQL Editor.
5. Click **"Run"** (or press `Ctrl` + `Enter`).

### What this SQL script creates:
- **`rooms`**: Stores hotel rooms (pre-seeded with Standard Room, Double Room, Twin Room, features, prices in ETB, and photos).
- **`services`**: Stores hotel amenities (pre-seeded with all 8 hotel services: Dining, Wi-Fi, Parking, Conference, etc.).
- **`contact_messages`**: Receives messages sent from the website contact form (`fullName`, `email`, `phone`, `message`, `status`).
- **`bookings`**: Stores room reservation requests.
- **`reviews`**: Stores guest reviews and ratings.
- **`hotel_settings`**: Stores hotel metadata (phone, location, Amaro Kelle address, reception hours).
- **Row Level Security (RLS)**: Protects your data so visitors can view rooms and services, submit contact messages and bookings, while only authenticated administrators can edit or delete them.

---

## 3. Connect Supabase to the Buna Burji Hotel Website

1. In your Supabase dashboard, click the **Settings** gear icon in the bottom-left menu.
2. Under Settings, select **API** (or **Data API**).
3. Find the following two values:
   - **Project URL:** e.g. `https://xyzcompany.supabase.co`
   - **Project API Keys -> `anon` / `public`:** e.g. `eyJhbGciOi...`
4. Open the `.env` file in the root folder of this project:
   ```env
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-public-key-here
   ```
5. Save the file.
6. Restart your development server:
   ```bash
   npm run dev
   ```

---

## 4. Test the Integration

1. Go to the **Contact** page on the website.
2. Fill out and submit the contact form with a test message.
3. Open the **Table Editor** on your Supabase dashboard and click the **`contact_messages`** table.
4. You will see your new contact message recorded with timestamp, name, email, phone, and message!
5. Open the **`rooms`** table in Supabase — you can add new rooms or edit room prices and features directly from the Supabase UI.

