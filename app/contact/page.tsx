import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import styles from './page.module.css'

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <Link href="/" className={styles.backLink}>← Back to Home</Link>
          
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>We'd love to hear from you. Get in touch with us.</p>

          <div className={styles.content}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>General Inquiries</h2>
              <div className={styles.contactInfo}>
                <p className={styles.contactItem}>
                  <strong>Email:</strong> info@StyleTrailblazers.com
                </p>
                <p className={styles.contactItem}>
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
                <p className={styles.contactItem}>
                  <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM EST
                </p>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Mailing Address</h2>
              <div className={styles.contactInfo}>
                <p className={styles.address}>
                  Style Trailblazers<br />
                  123 Fashion Avenue<br />
                  New York, NY 10001<br />
                  United States
                </p>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Media & Press</h2>
              <div className={styles.contactInfo}>
                <p className={styles.contactItem}>
                  <strong>Press Inquiries:</strong> press@StyleTrailblazers.com
                </p>
                <p className={styles.contactItem}>
                  <strong>Media Relations:</strong> media@StyleTrailblazers.com
                </p>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Partnerships</h2>
              <div className={styles.contactInfo}>
                <p className={styles.contactItem}>
                  <strong>Business Partnerships:</strong> partnerships@StyleTrailblazers.com
                </p>
                <p className={styles.contactItem}>
                  <strong>Collaborations:</strong> collaborate@StyleTrailblazers.com
                </p>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Follow Us</h2>
              <div className={styles.socialLinks}>
                <p className={styles.contactItem}>
                  <strong>Facebook:</strong> <a href="#" className={styles.link}>facebook.com/StyleTrailblazers</a>
                </p>
                <p className={styles.contactItem}>
                  <strong>Instagram:</strong> <a href="#" className={styles.link}>@StyleTrailblazers</a>
                </p>
                <p className={styles.contactItem}>
                  <strong>Twitter:</strong> <a href="#" className={styles.link}>@fashiontrailblz</a>
                </p>
                <p className={styles.contactItem}>
                  <strong>LinkedIn:</strong> <a href="#" className={styles.link}>linkedin.com/company/StyleTrailblazers</a>
                </p>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Response Time</h2>
              <p className={styles.text}>
                We aim to respond to all inquiries within 2-3 business days. For urgent matters, please call our main phone number during business hours.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

