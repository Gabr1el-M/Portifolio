import '../app/globals.css'

import Image from 'next/image';

import styles from './page.module.scss';
import background from "../../public/images/background.jpg"
import Link from 'next/link';


export default function Home() {
  return (
    <div>
      <div>
        <Image
          src={background}
          alt="foto de fundo"
          placeholder='blur'
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>

      <main className={styles.container}>
        <h1>SEJA BEM VINDO AO MEU PORTIFÓLIO!</h1>
      </main>

      <Link href="/about" className={styles.link}>
        <div className={styles.content}>
          Bora lá?
        </div>
      </Link>
    </div>
  )
}

// 
{/* <div>
    <ViewSource pathname="pages/background.tsx" />
    <div className={styles.bgWrap}>
      <Image
        alt="Mountains"
        src={mountains}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
      />
    </div>
    <p className={styles.bgText}>
      Image Component
      <br />
      as a Background
    </p>
  </div> */}