import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Justificacion() {
  return (
    <>
      <Head>
        <title>Justificación del Framework</title>
        <meta name="description" content="Justificación del uso del framework" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        <main className={styles.main}>
          <h1 className={styles.title}>Justificación del Framework</h1>
          <p className={styles.description}>
            Este tutorial proporciona una justificación clara para el uso del framework:
          </p>

          <div className={styles.section}>
            <h2 className={styles.subtitle}>¿Para qué sirve?</h2>
            <p>Este framework permite simplificar el desarrollo de aplicaciones web modernas.</p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.subtitle}>¿Qué aplicaciones tiene?</h2>
            <p>
              Puede ser utilizado para desarrollar interfaces de usuario dinámicas, aplicaciones empresariales,
              y sistemas en tiempo real.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.subtitle}>¿Sobre qué lenguajes se apoya?</h2>
            <p>
              Está basado en <code>JavaScript</code> y utiliza bibliotecas como <code>React</code>.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.subtitle}>¿Qué prerrequisitos necesita?</h2>
            <p>Es necesario tener conocimientos básicos de HTML, CSS, y JavaScript.</p>
          </div>
        </main>
      </div>
    </>
  );
}
