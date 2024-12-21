import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Instalacion() {
  return (
    <>
      <Head>
        <title>Instalación del Framework</title>
        <meta name="description" content="Guía de instalación del framework" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        <main className={styles.main}>
          <h1 className={styles.title}>Instalación del Framework</h1>
          <p className={styles.description}>
            A continuación, se detallan los pasos necesarios para instalar y configurar el framework:
          </p>
          <div className={styles.section}>
            <h2 className={styles.subtitle}>¿Se precisa instalación?</h2>
            <p>Sí, el framework debe ser instalado utilizando <code>npm</code> o <code>yarn</code>.</p>
          </div>
          <div className={styles.section}>
            <h2 className={styles.subtitle}>¿Qué pasos hay que realizar?</h2>
            <ul>
              <li>Asegúrate de tener instalado <code>Node.js</code> (versión 14 o superior).</li>
              <li>Ejecuta el comando <code>npm install framework</code> o <code>yarn add framework</code>.</li>
              <li>Configura el archivo <code>package.json</code> si es necesario.</li>
            </ul>
          </div>
          <div className={styles.section}>
            <h2 className={styles.subtitle}>¿Versiones necesarias?</h2>
            <p>Requiere <code>Node.js</code> versión 14 o superior y <code>npm</code> versión 6 o superior.</p>
          </div>
          <div className={styles.section}>
            <h2 className={styles.subtitle}>¿Rutas para tener en cuenta?</h2>
            <p>Instala el framework en el directorio raíz del proyecto para garantizar que esté disponible globalmente.</p>
          </div>
          <div className={styles.section}>
            <h2 className={styles.subtitle}>¿Variables de entorno?</h2>
            <p>
              Configura las variables en un archivo <code>.env</code> según las necesidades de tu aplicación
              (por ejemplo, claves de API, URL de base de datos, etc.).
            </p>
          </div>
          <div className={styles.section}>
            <h2 className={styles.subtitle}>¿Necesita base de datos?</h2>
            <p>Opcional, dependiendo del proyecto. El framework soporta bases de datos como <code>MySQL</code>, <code>MongoDB</code>, y más.</p>
          </div>
        </main>
      </div>
    </>
  );
}

