import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { FireworkShow } from '../components/FireworkShow'

const Fireworks: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Skua Fireworks Projector</title>
        <meta name="description" content="Projecting fireworks for all things Skua" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <FireworkShow />
      </main>
    </div>
  )
}

export default Fireworks
