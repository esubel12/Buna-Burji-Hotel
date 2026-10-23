import logoImg from './logo.jpg'
import heroImg from './hero.png'
import standardBedSvg from './rooms/standard-bed.svg'
import standardRoomSvg from './rooms/standard-room.png'
import deluxeRoomImg from './rooms/deluxe-room.png'
import twinRoomSvg from './rooms/twin-room.png'

/**
 * Centralized image exports for Buna Burji Hotel.
 * Importing images via Vite ensures paths are hashed, optimized,
 * and automatically prefixed with the correct GitHub Pages base path.
 */
export const hotelLogo = logoImg
export const heroImage = heroImg
export const standardBedFallback = standardBedSvg
export const standardRoomImage = standardRoomSvg
export const deluxeRoomImage = deluxeRoomImg
export const twinRoomImage = twinRoomSvg

export const roomImages = {
  'standard-room': standardRoomSvg,
  'double-room': deluxeRoomImg,
  'deluxe-room': deluxeRoomImg,
  'twin-room': twinRoomSvg,
  default: standardBedSvg
}

/**
 * Converts any relative, public, or imported image path into a base-safe URL for GitHub Pages.
 * Handles remote URLs, avoids double-prefixing base paths, and maps known asset names.
 *
 * @param {string} [path] - Image path (e.g. '/hero.png', 'hero.png', or 'https://...')
 * @returns {string} Fully-qualified base-safe URL
 */
export function getAssetUrl(path) {
  if (!path) return standardBedSvg

  // Full URLs or data URIs
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path
  }

  // If already prefixed with base URL (e.g. from Vite bundling), don't prefix again!
  const base = import.meta.env.BASE_URL || '/'
  if (base !== '/' && path.startsWith(base)) {
    return path
  }

  const clean = path.replace(/^\/+/, '')

  // Map known filenames to their bundled imports
  if (clean === 'logo.jpg') return logoImg
  if (clean === 'hero.png') return heroImg
  if (clean.includes('standard-room')) return standardRoomSvg
  if (clean.includes('deluxe-room') || clean.includes('double-room')) return deluxeRoomImg
  if (clean.includes('twin-room')) return twinRoomSvg
  if (clean.includes('standard-bed')) return standardBedSvg

  return `${base}${clean}`
}

export default {
  logo: hotelLogo,
  hero: heroImage,
  standardBed: standardBedFallback,
  standardRoom: standardRoomImage,
  deluxeRoom: deluxeRoomImage,
  twinRoom: twinRoomImage,
  roomImages,
  getAssetUrl
}
