import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function PrimerosPasos() {
  return (
    <>
      <Head>
        <title>Primeros Pasos con el Framework</title>
        <meta name="description" content="Guía inicial para empezar a usar el framework" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        <main className={styles.main}>
          <h1 className={styles.title}>Primeros Pasos con el Framework</h1>
          <p className={styles.description}>
            En esta sección aprenderás cómo realizar una primera aproximación al framework:
          </p>

          <div className={styles.section}>
            <h2 className={styles.subtitle}>Configuración Inicial</h2>
            <p>
              Antes de comenzar, asegúrate de haber instalado todas las dependencias necesarias y haber configurado
              las variables de entorno en el archivo <code>.env</code>. A continuación, inicia el proyecto con:
            </p>
            <ul>
              <li>
                Ejecuta el comando <code>npm start</code> o <code>yarn start</code> para iniciar el servidor de
                desarrollo.
              </li>
              <li>
                Accede a <code>http://localhost:3000</code> en tu navegador para ver la aplicación funcionando.
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.subtitle}>Creación de un Proyecto "Hola Mundo"</h2>
            <p>
              Para crear una aplicación básica, sigue estos pasos:
            </p>
            <ul>
              <li>Crea un componente en el archivo <code>/src/components/HolaMundo.js</code>:</li>
              <pre className={styles.code}>
                {`export default function HolaMundo() {
  return (
    <div>
      <h1>¡Hola Mundo!</h1>
      <p>Bienvenido a tu primera aplicación con este framework.</p>
    </div>
  );
}`}
              </pre>
              <li>
                Importa y utiliza el componente <code>HolaMundo</code> en tu archivo principal (por ejemplo,{" "}
                <code>pages/index.js</code>).
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.subtitle}>Verificación del Funcionamiento</h2>
            <p>
              Una vez que hayas creado el proyecto, asegúrate de que el servidor de desarrollo esté ejecutándose. Si
              ves el mensaje "¡Hola Mundo!" en tu navegador, ¡felicitaciones! Has completado los primeros pasos con
              éxito.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
