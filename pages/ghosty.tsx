import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Ghosty.module.scss'
import { Ghost } from '../components/Ghost'

const Ghosty: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Skua Ghosty Projector</title>
        <meta name="description" content="Projecting ghosts for all things Skua" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Ghost></Ghost>
      </main>
    </div>
  )
}

export default Ghosty
