import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>404</h1>
          <h2 className={styles.subtitle}>Brand Not Found</h2>
          <p className={styles.message}>
            The brand you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/" className={styles.link}>
            ← Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

