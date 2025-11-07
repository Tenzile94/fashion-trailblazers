'use client'

import Link from 'next/link'
import Logo from './Logo'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Logo />
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/brands/chanel" className={styles.navLink}>Brands</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
        </nav>
      </div>
    </header>
  )
}

