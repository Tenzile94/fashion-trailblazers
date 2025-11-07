import { notFound } from 'next/navigation'
import { getBrandBySlug, brands } from '@/data/brands'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BrandImage from '@/components/BrandImage'
import styles from './page.module.css'
import Link from 'next/link'

export async function generateStaticParams() {
  return brands.map((brand) => ({
    slug: brand.slug,
  }))
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const brand = getBrandBySlug(slug)

  if (!brand) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <Link href="/" className={styles.backLink}>← Back to Home</Link>
          
          <div className={styles.heroSection}>
            <div className={styles.heroImage}>
              <BrandImage 
                src={brand.imageUrl} 
                alt={`${brand.name} - ${brand.brand}`}
                priority
              />
            </div>
            <div className={styles.heroContent}>
              <h1 className={styles.brandName}>{brand.brand}</h1>
              <h2 className={styles.designerName}>{brand.name}</h2>
              <p className={styles.founded}>Founded {brand.founded}</p>
            </div>
          </div>

          <div className={styles.contentSection}>
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>About the Brand</h3>
              <p className={styles.text}>{brand.fullDescription}</p>
            </section>

            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>History</h3>
              <p className={styles.text}>{brand.history}</p>
            </section>

            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>Key Achievements</h3>
              <ul className={styles.achievementsList}>
                {brand.achievements.map((achievement, index) => (
                  <li key={index} className={styles.achievementItem}>
                    {achievement}
                  </li>
                ))}
              </ul>
            </section>

            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>Iconic Pieces</h3>
              <div className={styles.iconicPiecesGrid}>
                {brand.iconicPieces.map((piece, index) => (
                  <div key={index} className={styles.pieceCard}>
                    <div className={styles.pieceImageContainer}>
                      <BrandImage 
                        src={piece.imageUrl} 
                        alt={piece.name}
                        priority={false}
                      />
                    </div>
                    <div className={styles.pieceInfo}>
                      <span className={styles.pieceName}>{piece.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>Legacy</h3>
              <p className={styles.text}>{brand.legacy}</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

