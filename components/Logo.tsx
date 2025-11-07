import Link from 'next/link'
import styles from './Logo.module.css'

export default function Logo() {
  return (
    <Link href="/" className={styles.logoLink}>
      <div className={styles.logoContainer}>
        <svg 
          className={styles.logoIcon}
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="3" fill="none"/>
          <path 
            d="M30 50 L45 35 L55 45 L70 30" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="30" cy="50" r="3" fill="currentColor"/>
          <circle cx="45" cy="35" r="3" fill="currentColor"/>
          <circle cx="55" cy="45" r="3" fill="currentColor"/>
          <circle cx="70" cy="30" r="3" fill="currentColor"/>
        </svg>
        <span className={styles.logoText}>
          <span className={styles.logoMain}>Style</span>
          <span className={styles.logoSub}>Trailblazers</span>
        </span>
      </div>
    </Link>
  )
}

