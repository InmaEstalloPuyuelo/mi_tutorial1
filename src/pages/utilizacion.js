import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Utilizacion() {
  return (
    <>
      <Head>
        <title>Utilización del Framework</title>
        <meta name="description" content="Cómo utilizar el framework para crear aplicaciones base" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        <main className={styles.main}>
          <h1 className={styles.title}>Utilización del Framework</h1>
          <p className={styles.description}>
            Aprende cómo empezar a usar el framework para crear y visualizar aplicaciones.
          </p>

          <div className={styles.section}>
            <h2 className={styles.subtitle}>Cómo empezar a crear una aplicación base</h2>
            <p>
              Para comenzar a desarrollar una aplicación base con este framework, sigue los siguientes pasos:
            </p>
            <ul>
              <li>
                Crea un nuevo componente en el directorio <code>src/components</code>. Por ejemplo:{" "}
                <code>MiAplicacionBase.js</code>.
              </li>
              <li>
                Define el contenido básico del componente. Por ejemplo:
                <pre className={styles.code}>
                  {`export default function MiAplicacionBase() {
  return (
    <div>
      <h1>Bienvenido a Mi Aplicación Base</h1>
      <p>Esta es una aplicación creada utilizando este framework.</p>
    </div>
  );
}`}
                </pre>
              </li>
              <li>
                Importa y utiliza este componente en el archivo principal (por ejemplo,{" "}
                <code>pages/index.js</code> o cualquier otra página de tu proyecto).
              </li>
              <li>
                Asegúrate de que el servidor de desarrollo esté ejecutándose para visualizar los resultados en tu
                navegador.
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.subtitle}>Cómo visualizar los resultados de la ejecución</h2>
            <p>
              Después de crear y configurar tu aplicación base, sigue estos pasos para visualizar los resultados:
            </p>
            <ul>
              <li>
                Ejecuta el comando <code>npm run dev</code> o <code>yarn dev</code> desde la terminal para iniciar el
                servidor de desarrollo.
              </li>
              <li>
                Abre tu navegador e ingresa la dirección <code>http://localhost:3000</code>.
              </li>
              <li>
                Verifica que tu aplicación base se renderice correctamente. Si no es así, revisa los mensajes de
                error en la terminal o en las herramientas de desarrollo del navegador.
              </li>
              <li>
                Realiza los ajustes necesarios en el código para solucionar problemas o agregar nuevas
                funcionalidades.
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.subtitle}>Siguientes pasos</h2>
            <p>
              Una vez que hayas creado y probado la aplicación base, puedes explorar las funcionalidades avanzadas del
              framework, como la gestión de estados, integración con bases de datos, y más.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
