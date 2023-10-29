import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import { Ghost } from '../components/Ghost'

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
          Ghosty
        </Link>
        <Link href="/fireworks">
          Fireworks
        </Link>
      </main>
    </div>
  )
}

export default Home
