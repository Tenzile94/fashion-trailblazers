import Link from 'next/link'
import styles from './WomenShowcase.module.css'
import { brands } from '@/data/brands'

export default function WomenShowcase() {
  return (
    <section id="fashion" className={styles.showcase}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>The Trailblazers</h2>
        <div className={styles.womenGrid}>
          {brands.map((woman) => (
            <Link key={woman.id} href={`/brands/${woman.slug}`} className={styles.cardLink}>
              <div className={styles.womanCard} >
                <div className={styles.cardHeader} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${woman.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <h3 className={styles.womanName}>{woman.name}</h3>
                  <p className={styles.brandName}>{woman.brand}</p>
                  <span className={styles.founded}>Founded {woman.founded}</span>
                </div>
                <div className={styles.cardBody}>
                  <p className={styles.description}>{woman.description}</p>
                  <div className={styles.achievements}>
                    <h4 className={styles.achievementsTitle}>Key Achievements:</h4>
                    <ul className={styles.achievementsList}>
                      {woman.achievements.slice(0, 4).map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.readMore}>Read More →</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

