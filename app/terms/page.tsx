import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import styles from './page.module.css'

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <Link href="/" className={styles.backLink}>← Back to Home</Link>
          
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.lastUpdated}>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className={styles.content}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
              <p className={styles.text}>
                By accessing and using the Style Trailblazers website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>2. Use License</h2>
              <p className={styles.text}>
                Permission is granted to temporarily access the materials on Style Trailblazers' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className={styles.list}>
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>3. Intellectual Property</h2>
              <p className={styles.text}>
                All content on this website, including text, graphics, logos, images, and software, is the property of Style Trailblazers or its content suppliers and is protected by copyright and other intellectual property laws.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>4. User Conduct</h2>
              <p className={styles.text}>You agree not to:</p>
              <ul className={styles.list}>
                <li>Use the website in any way that violates any applicable law or regulation</li>
                <li>Transmit any harmful or malicious code</li>
                <li>Interfere with or disrupt the website or servers</li>
                <li>Attempt to gain unauthorized access to any portion of the website</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>5. Disclaimer</h2>
              <p className={styles.text}>
                The materials on Style Trailblazers' website are provided on an 'as is' basis. Style Trailblazers makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>6. Limitations</h2>
              <p className={styles.text}>
                In no event shall Style Trailblazers or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Style Trailblazers' website.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>7. Accuracy of Materials</h2>
              <p className={styles.text}>
                The materials appearing on Style Trailblazers' website could include technical, typographical, or photographic errors. Style Trailblazers does not warrant that any of the materials on its website are accurate, complete, or current.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>8. Links</h2>
              <p className={styles.text}>
                Style Trailblazers has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Style Trailblazers of the site.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>9. Modifications</h2>
              <p className={styles.text}>
                Style Trailblazers may revise these terms of service at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>10. Contact Information</h2>
              <p className={styles.text}>
                If you have any questions about these Terms of Service, please contact us through our website's contact form.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

