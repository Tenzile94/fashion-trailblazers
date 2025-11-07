'use client'

import Image from 'next/image'
import { useState } from 'react'
import styles from './BrandImage.module.css'

interface BrandImageProps {
  src: string
  alt: string
  priority?: boolean
}

// Placeholder image data URL for when images are not available
const placeholderImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI0Q0QzRBOCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0ic2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiMzRDI4MTciIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5GYXNoaW9uIEJyYW5kPC90ZXh0Pjwvc3ZnPg=='

export default function BrandImage({ src, alt, priority = false }: BrandImageProps) {
  const [imgSrc, setImgSrc] = useState(src.startsWith('http') || src.startsWith('/') ? src : placeholderImage)
  const [hasError, setHasError] = useState(false)

  return (
    <div className={styles.imageContainer}>
      <Image
        src={hasError ? placeholderImage : imgSrc}
        alt={alt}
        width={800}
        height={600}
        className={styles.image}
        priority={priority}
        placeholder="blur"
        blurDataURL={placeholderImage}
        onError={() => {
          if (!hasError) {
            setHasError(true)
            setImgSrc(placeholderImage)
          }
        }}
      />
    </div>
  )
}

