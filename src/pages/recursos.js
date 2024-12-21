import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Recursos() {
  return (
    <>
      <Head>
        <title>Recursos Adicionales</title>
        <meta name="description" content="Recursos para aprender más sobre Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        <main className={styles.main}>
          <h1 className={styles.title}>Recursos Adicionales</h1>
          <p className={styles.description}>
            Explora más recursos para aprender y dominar Next.js:
          </p>
          <ul className={styles.list}>
            <li>
              <a href="https://nextjs.org/docs" target="_blank">
                Documentación Oficial de Next.js
              </a>
            </li>
            <li>
              <a href="https://vercel.com/" target="_blank">
                Plataforma de implementación de Vercel
              </a>
            </li>
            <li>
              <a href="https://github.com/vercel/next.js/" target="_blank">
                Repositorio en GitHub de Next.js
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com/topic/nextjs/" target="_blank">
                Cursos en Udemy sobre Next.js
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/results?search_query=nextjs+tutorial" target="_blank">
                Tutoriales de Next.js en YouTube
              </a>
            </li>
          </ul>
        </main>
      </div>
    </>
  );
}
