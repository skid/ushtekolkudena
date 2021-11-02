import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Deponii() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Уште колку дена?</title>
        <meta name="description" content="Дома" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Данела рече:</h1>
        <p
          className={styles.description}
          style={{ textDecoration: "underline" }}
        >
          <Link href="/deponii">
            Уште колку дена ќе бидат исчистени дивите депонии?
          </Link>
        </p>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
