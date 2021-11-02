import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Deponii() {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date(`2021-11-01:00:00:00`);
  const secondDate = new Date();

  firstDate.setDate(firstDate.getDate() + 82);

  const days = Math.round(Math.abs((firstDate - secondDate) / oneDay));

  return (
    <div className={styles.container}>
      <Head>
        <title>Уште колку дена?</title>
        <meta name="description" content="Депонии" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          За{" "}
          <a href="https://www.mkd.mk/makedonija/politika/za-82-dena-kje-bidat-ischisteni-divite-deponii-vo-skopje-vetuva-arsovska">
            {days}
          </a>{" "}
          дена ќе бидат исчистени дивите депонии во Скопје!
        </h1>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
