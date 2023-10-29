import type { NextPage } from 'next'
import Head from 'next/head'
import { Fireworks as FireworksJS } from '@fireworks-js/react'
import styles from '../styles/Home.module.scss'

const Fireworks: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Skua Fireworks Projector</title>
        <meta name="description" content="Projecting fireworks for all things Skua" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <FireworksJS
          options={{
            rocketsPoint: {
              min: 0,
              max: 100
            }
          }}
          style={{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'fixed',
            background: '#000'
          }}
        />
      </main>
    </div>
  )
}

export default Fireworks
