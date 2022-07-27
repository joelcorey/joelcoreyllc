import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Title from '../components/Title'
import Social from '../components/Social'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Junk Removal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

				<div className='flex flex-column justify-center'>
					<p>We do junk, garbage, and debris removal.</p>
					<p>Contact us at 503-884-7615</p>

				</div>

      </main>

			<p>This website is brand spankin' new, please allow it time to grow and evolve if you are just viewing it now.</p>


      <footer className={styles.footer}>
        <a
          href="https://springtreedigital.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/img/emote-slightsmile/android-chrome-192x192.png" alt="Smiley face" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
