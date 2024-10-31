import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Skua Projector</title>
        <meta name="description" content="Projecting things for all things Skua" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/ghosty">
          <span className={styles.button}>Ghosty</span>
        </Link>
        <Link href="/fireworks">
        <span className={styles.button}>Fireworks</span>
        </Link>
        <Link href="/diya">
        <span className={styles.button}>Diya</span>
        </Link>
        <Link href="/diya+fireworks">
        <span className={styles.button}>Diya + Fireworks</span>
        </Link>
        <Link href="/diya+fireworks+ghosty">
        <span className={styles.button}>Diya + Fireworks + Ghosty</span>
        </Link>
      </main>
    </div>
  )
}

export default Home
