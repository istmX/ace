type UserAvatarProps = {
  src?: string
  alt?: string
  size?: number
  className?: string
}

/** Round profile picture with a placeholder silhouette fallback. */
export function UserAvatar({ src, alt = '', size = 28, className = '' }: UserAvatarProps) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-amber-300 to-orange-400 shadow-sm ${className}`}
      style={{ width: size, height: size }}
    >
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <svg viewBox="0 0 32 32" className="h-full w-full" aria-hidden="true">
          <circle cx="16" cy="12.5" r="5.5" fill="#fff" fillOpacity="0.95" />
          <path d="M4.5 32c0-6.4 5.1-11 11.5-11s11.5 4.6 11.5 11" fill="#fff" fillOpacity="0.95" />
        </svg>
      )}
    </span>
  )
}