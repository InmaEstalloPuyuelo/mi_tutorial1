import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Conclusiones() {
  return (
    <>
      <Head>
        <title>Conclusiones del Tutorial</title>
        <meta name="description" content="Resumen y conclusiones sobre el tutorial del framework" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        <main className={styles.main}>
          <h1 className={styles.title}>Conclusiones del Tutorial</h1>
          <p className={styles.description}>
            Este tutorial ha proporcionado una guía completa para comprender e implementar el framework en diferentes aplicaciones.
          </p>

          <div className={styles.section}>
            <h2 className={styles.subtitle}>Alcance del tutorial</h2>
            <p>
              El tutorial cubre desde los fundamentos del framework hasta aspectos avanzados como la instalación, primeros pasos, uso y funcionamiento.
            </p>
            <ul>
              <li>Se ha detallado el propósito y las ventajas del framework.</li>
              <li>Hemos cubierto la instalación y configuración inicial.</li>
              <li>Se incluyó una guía paso a paso para comenzar a usar el framework.</li>
              <li>Explicamos cómo aprovechar las funcionalidades del framework para crear aplicaciones eficientes y escalables.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.subtitle}>Objetivos conseguidos</h2>
            <p>
              Al finalizar este tutorial, los usuarios deberían ser capaces de:
            </p>
            <ul>
              <li>Instalar y configurar el framework correctamente en sus proyectos.</li>
              <li>Crear aplicaciones base utilizando las herramientas proporcionadas por el framework.</li>
              <li>Entender el funcionamiento interno del framework y cómo actúa sobre los componentes y archivos.</li>
              <li>Adaptar y personalizar sus aplicaciones utilizando las funcionalidades y configuraciones avanzadas.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.subtitle}>Conclusión final</h2>
            <p>
              Este tutorial demuestra que el framework es una herramienta poderosa para el desarrollo de aplicaciones
              modernas. Su enfoque modular, escalabilidad y soporte para tecnologías avanzadas lo convierten en una
              opción ideal para proyectos de cualquier tamaño. Al dominar los conceptos presentados, los desarrolladores
              estarán preparados para afrontar proyectos más complejos con confianza.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
