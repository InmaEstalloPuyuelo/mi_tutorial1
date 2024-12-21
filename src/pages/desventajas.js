import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Desventajas() {
  return (
    <>
      <Head>
        <title>Desventajas del Framework</title>
        <meta name="description" content="Limitaciones y desventajas de usar Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        <main className={styles.main}>
          <h1 className={styles.title}>Desventajas del Framework</h1>
          <p className={styles.description}>
            A pesar de sus ventajas, Next.js tiene algunas limitaciones a considerar:
          </p>
          <ul className={styles.list}>
            <li><strong>Curva de aprendizaje:</strong> Requiere conocimientos previos de React.</li>
            <li><strong>Complejidad:</strong> Puede ser excesivo para proyectos pequeños.</li>
            <li><strong>Construcción inicial:</strong> El build puede ser lento en proyectos muy grandes.</li>
            <li><strong>Dependencia de Node.js:</strong> Necesita un entorno de servidor para SSR.</li>
          </ul>
        </main>
      </div>
    </>
  );
}
