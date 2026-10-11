import logoImg from './logo.jpg'
import heroImg from './hero.png'

/**
 * Centralized image exports for Buna Burji Hotel.
 * Importing images via Vite ensures paths are hashed, optimized,
 * and automatically prefixed with the correct GitHub Pages base path.
 */
export const hotelLogo = logoImg
export const heroImage = heroImg

/**
 * Converts any relative or public image path into a base-safe URL for GitHub Pages.
 * Handles remote URLs (e.g. from Supabase Storage), bundled assets, and public fallbacks.
 *
 * @param {string} [path] - Image path (e.g. '/hero.png', 'hero.png', or 'https://...')
 * @returns {string} Fully-qualified base-safe URL
 */
export function getAssetUrl(path) {
  if (!path) return heroImg
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path
  }
  const clean = path.replace(/^\/+/, '')
  if (clean === 'logo.jpg') return logoImg
  if (clean === 'hero.png') return heroImg
  return `${import.meta.env.BASE_URL}${clean}`
}

export default {
  logo: hotelLogo,
  hero: heroImage,
  getAssetUrl
}
