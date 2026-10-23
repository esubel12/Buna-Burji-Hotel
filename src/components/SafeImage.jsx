import { useState, useEffect } from 'react'
import { standardBedFallback } from '../assets'

/**
 * Reusable SafeImage component with automatic fallback handling.
 * Prevents broken image icons and avoids layout shifts.
 *
 * @param {Object} props
 * @param {string} props.src - Primary image URL
 * @param {string} [props.alt] - Alt text
 * @param {string} [props.fallback] - Fallback image URL (defaults to standardBedFallback)
 * @param {string} [props.className] - CSS class name
 * @param {string} [props.loading] - Image loading strategy ('lazy' | 'eager')
 * @param {Object} [props.style] - Inline styles
 */
export default function SafeImage({
  src,
  alt = 'Buna Burji Hotel',
  fallback = standardBedFallback,
  className = '',
  loading = 'lazy',
  style = {},
  ...props
}) {
  const [imgSrc, setImgSrc] = useState(src || fallback)
  const [hasFailed, setHasFailed] = useState(false)

  useEffect(() => {
    setImgSrc(src || fallback)
    setHasFailed(false)
  }, [src, fallback])

  const handleError = () => {
    if (!hasFailed) {
      setHasFailed(true)
      setImgSrc(fallback)
    }
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      loading={loading}
      className={className}
      onError={handleError}
      style={{
        aspectRatio: style.aspectRatio || '16 / 10',
        objectFit: style.objectFit || 'cover',
        width: style.width || '100%',
        ...style
      }}
      {...props}
    />
  )
}
