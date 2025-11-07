import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}
    style={{ backgroundImage: `linear-gradient(rgba(36, 28, 1, 0.36), rgba(19, 12, 0, 0.62), rgba(14, 8, 0, 0.5)), url(/images/hero2.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'top'
     }}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Icons of Style: The Women Who Redefined Fashion
        </h1>
        <p className={styles.heroSubtitle}>
          Discover the extraordinary stories of Coco Chanel, Miuccia Prada, Donatella Versace, and Stella McCartney—visionary designers who revolutionized fashion and built iconic luxury empires that continue to shape the industry today.
        </p>
      </div>
    </section>
  )
}
