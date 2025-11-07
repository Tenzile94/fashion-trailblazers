import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import styles from './page.module.css'

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <Link href="/" className={styles.backLink}>← Back to Home</Link>
          
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className={styles.content}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>1. Introduction</h2>
              <p className={styles.text}>
                Style Trailblazers (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>2. Information We Collect</h2>
              <p className={styles.text}>
                We may collect information that you provide directly to us, including:
              </p>
              <ul className={styles.list}>
                <li>Name and contact information</li>
                <li>Email address</li>
                <li>Any other information you choose to provide</li>
              </ul>
              <p className={styles.text}>
                We also automatically collect certain information about your device, including information about your web browser, IP address, and how you interact with our website.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>3. How We Use Your Information</h2>
              <p className={styles.text}>We use the information we collect to:</p>
              <ul className={styles.list}>
                <li>Provide, maintain, and improve our website</li>
                <li>Respond to your comments and questions</li>
                <li>Send you updates and communications</li>
                <li>Monitor and analyze usage patterns</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>4. Cookies and Tracking</h2>
              <p className={styles.text}>
                We may use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>5. Data Security</h2>
              <p className={styles.text}>
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>6. Third-Party Links</h2>
              <p className={styles.text}>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>7. Your Rights</h2>
              <p className={styles.text}>
                You have the right to access, update, or delete your personal information. If you wish to exercise these rights, please contact us.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>8. Changes to This Policy</h2>
              <p className={styles.text}>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>9. Contact Us</h2>
              <p className={styles.text}>
                If you have any questions about this Privacy Policy, please contact us through our website&apos;s contact form.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

