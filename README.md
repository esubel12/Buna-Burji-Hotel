# Buna Burji Hotel Website

Official website for **Buna Burji Hotel** located in Amaro Kelle, Ethiopia. Built with React 19, Vite, Bootstrap, and integrated with Supabase.

---

## Features

- **Home & Hero Showcase**: Warm visual presentation of the hotel in Amaro Kelle.
- **Accommodations / Rooms**: Dynamic room showcase (Standard, Double, Twin) loaded from Supabase with offline fallbacks.
- **Hotel Services & Amenities**: Dining, Wi-Fi, 24/7 guest support, meeting facilities, and more.
- **Interactive Contact Form**: Direct guest inquiries submitted and stored in Supabase (`contact_messages` table).
- **Supabase Database Backend**: Complete schema with RLS security policies, automated timestamp triggers, and seed data.

---

## Tech Stack

- **Frontend**: [React 19](https://react.dev/), [Vite](https://vite.dev/), [React Router](https://reactrouter.com/)
- **UI & Styling**: [Bootstrap 5](https://getbootstrap.com/), [Bootstrap Icons](https://icons.getbootstrap.com/), Custom responsive CSS
- **Backend / Database**: [Supabase](https://supabase.com/) (PostgreSQL, REST API, Row Level Security)
- **Linter**: [Oxlint](https://oxc.rs/)

---

## Getting Started

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/esubel12/Buna-Burji-Hotel.git
cd Buna-Burji-Hotel
npm install
```

### 2. Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Add your Supabase project credentials in `.env`:
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-or-publishable-key
```

### 3. Run Locally
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

---

## Database Setup (Supabase)

To set up the database tables in your Supabase project:
1. Open your Supabase Dashboard &rarr; **SQL Editor**.
2. Copy and paste the contents of [`supabase/schema.sql`](./supabase/schema.sql).
3. Click **Run**.
4. See [`supabase/README.md`](./supabase/README.md) for full setup instructions.
