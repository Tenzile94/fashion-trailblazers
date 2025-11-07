import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerGrid}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Style Trailblazers</h3>
            <p className={styles.footerDescription}>
              Celebrating the visionary women who revolutionized fashion and built iconic luxury brands that continue to inspire the world.
            </p>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerSectionTitle}>Quick Links</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/" className={styles.footerLink}>Home</Link></li>
              <li><Link href="/brands/chanel" className={styles.footerLink}>Brands</Link></li>
              <li><Link href="/about" className={styles.footerLink}>About</Link></li>
              {/* <li><Link href="/contact" className={styles.footerLink}>Contact</Link></li> */}
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerSectionTitle}>Brands</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/brands/chanel" className={styles.footerLink}>Chanel</Link></li>
              <li><Link href="/brands/prada" className={styles.footerLink}>Prada</Link></li>
              <li><Link href="/brands/versace" className={styles.footerLink}>Versace</Link></li>
              <li><Link href="/brands/stella-mccartney" className={styles.footerLink}>Stella McCartney</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} Style Trailblazers. All rights reserved.
          </p>
          <div className={styles.footerLegal}>
            <Link href="/privacy" className={styles.footerLink}>Privacy Policy</Link>
            <span className={styles.separator}>|</span>
            <Link href="/terms" className={styles.footerLink}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

