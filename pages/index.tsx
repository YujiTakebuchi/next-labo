import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.scss";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          <Link
            href="/slider"
            className={styles.card}
            target="_self"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              sliders <span>-&gt;</span>
            </h2>
            <p className={inter.className}>スライダー機能等</p>
          </Link>

          <Link
            href="/lottie"
            className={styles.card}
            target="_self"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              lottie <span>-&gt;</span>
            </h2>
            <p className={inter.className}>アニメーションライブラリLottie</p>
          </Link>
        </div>
      </main>
    </>
  );
}
