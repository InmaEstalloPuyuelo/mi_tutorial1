import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Ventajas() {
  return (
    <>
      <Head>
        <title>Ventajas del Framework</title>
        <meta name="description" content="Ventajas de usar Next.js como framework" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        <main className={styles.main}>
          <h1 className={styles.title}>Ventajas del Framework</h1>
          <p className={styles.description}>
            Next.js ofrece múltiples beneficios que lo convierten en una excelente opción para el desarrollo web moderno:
          </p>
          <ul className={styles.list}>
            <li><strong>Rendimiento optimizado:</strong> Soporte para renderizado estático y dinámico.</li>
            <li><strong>SEO mejorado:</strong> Renderizado del lado del servidor facilita el posicionamiento en motores de búsqueda.</li>
            <li><strong>Experiencia del desarrollador:</strong> Sistema de rutas sencillo y recarga en caliente.</li>
            <li><strong>Escalabilidad:</strong> Perfecto para proyectos pequeños y grandes.</li>
            <li><strong>Soporte de TypeScript:</strong> Integración nativa para aplicaciones tipadas.</li>
          </ul>
        </main>
      </div>
    </>
  );
}
