import type { ImgHTMLAttributes } from 'react'

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string
    alt: string
    lazy?: boolean
    priority?: boolean
}

function OptimizedImage({
    src,
    alt,
    lazy = true,
    priority = false,
    className = '',
    ...props
}: OptimizedImageProps) {
    const loadingAttr = priority ? 'eager' : (lazy ? 'lazy' : undefined)

    return (
        <img
            src={src}
            alt={alt}
            loading={loadingAttr}
            decoding="async"
            className={className}
            {...props}
        />
    )
}

export default OptimizedImage

