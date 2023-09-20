import '../app/globals.css'

import Head from "next/head";
// import Image from 'next/image';

import styles from './page.module.scss';
// import background from "../../public/images/background.jpg"
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <main className={styles.container}>
        <h1>SEJA BEM VINDO AO MEU PORTIFÓLIO!</h1>
      </main>

      <Link href="/about" className={styles.link}>
        <div className={styles.content}>
          Bora lá?
        </div>
      </Link>
    </>
  )
}