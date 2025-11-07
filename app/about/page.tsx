import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import styles from './page.module.css'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <Link href="/" className={styles.backLink}>← Back to Home</Link>
          
          <h1 className={styles.title}>About Style Trailblazers</h1>
          <p className={styles.subtitle}>Celebrating the visionary women who revolutionized fashion</p>

          <div className={styles.content}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Our Mission</h2>
              <p className={styles.text}>
                Style Trailblazers is dedicated to honoring and celebrating the extraordinary contributions of four iconic women who transformed the fashion industry. Through their vision, creativity, and determination, Coco Chanel, Miuccia Prada, Donatella Versace, and Stella McCartney built legendary luxury brands that continue to influence fashion and culture worldwide.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>What We Do</h2>
              <p className={styles.text}>
                Our platform serves as a comprehensive resource for exploring the lives, achievements, and lasting legacies of these fashion pioneers. We provide detailed information about their brands, iconic designs, and the revolutionary changes they brought to the world of fashion.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>The Trailblazers</h2>
              <div className={styles.trailblazersList}>
                <div className={styles.trailblazerItem}>
                  <h3 className={styles.trailblazerName}>Coco Chanel</h3>
                  <p className={styles.trailblazerDesc}>
                    The French designer who liberated women from corsets and introduced timeless elegance with the little black dress and Chanel suit.
                  </p>
                </div>
                <div className={styles.trailblazerItem}>
                  <h3 className={styles.trailblazerName}>Miuccia Prada</h3>
                  <p className={styles.trailblazerDesc}>
                    The Italian intellectual who transformed her family&apos;s leather goods company into a global luxury powerhouse with minimalist sophistication.
                  </p>
                </div>
                <div className={styles.trailblazerItem}>
                  <h3 className={styles.trailblazerName}>Donatella Versace</h3>
                  <p className={styles.trailblazerDesc}>
                    The bold visionary who carried forward her brother&apos;s legacy, making Versace synonymous with glamour and red-carpet fashion.
                  </p>
                </div>
                <div className={styles.trailblazerItem}>
                  <h3 className={styles.trailblazerName}>Stella McCartney</h3>
                  <p className={styles.trailblazerDesc}>
                    The sustainable fashion pioneer who proved that luxury and ethics can coexist, leading the industry toward a more responsible future.
                  </p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Our Commitment</h2>
              <p className={styles.text}>
                We are committed to preserving and sharing the stories of these remarkable women, ensuring their contributions to fashion history are recognized and celebrated. Our goal is to inspire future generations of designers and fashion enthusiasts by showcasing how vision, passion, and innovation can transform an entire industry.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Explore More</h2>
              <p className={styles.text}>
                Visit our brand pages to learn more about each designer&apos;s unique journey, their iconic creations, and the lasting impact they&apos;ve made on fashion. Discover the stories behind the brands that continue to shape how we think about style, luxury, and design.
              </p>
              <div className={styles.brandLinks}>
                <Link href="/brands/chanel" className={styles.brandLink}>Chanel</Link>
                <Link href="/brands/prada" className={styles.brandLink}>Prada</Link>
                <Link href="/brands/versace" className={styles.brandLink}>Versace</Link>
                <Link href="/brands/stella-mccartney" className={styles.brandLink}>Stella McCartney</Link>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

