# Buna Burji Hotel - Frontend Setup

## Project Overview
- **Hotel Name:** Buna Burji Hotel
- **Location:** Amaro Kelle
- **Technology:** React + Vite + Bootstrap 5
- **Type:** Frontend-only (no backend, database, or API)

## How to Run

### Option 1: VS Code Task (Recommended)
1. Open the project in VS Code
2. Press `Ctrl+Shift+B` or go to Terminal → Run Task
3. Select "npm: dev - Buna Burji Hotel"
4. The Vite dev server will start on `http://localhost:5173`
5. Open that URL in your browser

### Option 2: Terminal
```bash
npm run dev
```
Then open `http://localhost:5173` in your browser

## Important: Do NOT Use Live Server
This is a Vite React application. Live Server (port 5500) will NOT work with this project because:
- Live Server cannot transpile JSX
- Live Server doesn't handle ES modules properly for Vite
- The React app will not render on Live Server

Always use the Vite dev server (`npm run dev`) instead.

## Project Structure
```
src/
  ├── components/    (Reusable components - to be created)
  ├── pages/         (Page components)
  │   ├── Home.jsx
  │   ├── About.jsx
  │   ├── Rooms.jsx
  │   ├── Services.jsx
  │   └── Contact.jsx
  ├── assets/        (Images and media)
  ├── styles/        (Global CSS with design tokens)
  ├── App.jsx        (Main app with React Router)
  └── main.jsx       (Entry point)
```

## Available Scripts
- `npm run dev` - Start Vite dev server (port 5173)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run code linter

## Visual Design
The website is inspired by elegant hospitality and premium hotel marketing design, featuring:
- Navy blue primary color (#2c4563)
- Warm gold accents (#f39c12)
- Cream background (#f5f3f0)
- Professional typography and spacing
