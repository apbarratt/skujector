import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Ghosty.module.scss'
import { Ghost } from '../components/Ghost'
import { Diya } from '../components/Diya'
import { FireworkShow } from '../components/FireworkShow'

const Diwali: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Skua Diya Projector</title>
        <meta name="description" content="Projecting ghosts for all things Skua" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Diya />
      </main>
    </div>
  )
}

export default Diwali