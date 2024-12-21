import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Funcionamiento() {
  return (
    <>
      <Head>
        <title>Funcionamiento del Framework</title>
        <meta name="description" content="Explicación del funcionamiento del framework" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        <main className={styles.main}>
          <h1 className={styles.title}>Funcionamiento del Framework</h1>
          <p className={styles.description}>
            A continuación, se describe el funcionamiento del framework y cómo actúa en las aplicaciones.
          </p>

          <div className={styles.section}>
            <h2 className={styles.subtitle}>¿Actúa sobre páginas, ficheros, secciones…?</h2>
            <p>
              El framework organiza las aplicaciones en módulos independientes que pueden incluir páginas, componentes
              y archivos específicos. 
            </p>
            <ul>
              <li>
                Las <strong>páginas</strong> están representadas por archivos en el directorio <code>pages</code>. Cada
                archivo equivale a una ruta específica de la aplicación.
              </li>
              <li>
                Los <strong>componentes</strong> se alojan en el directorio <code>src/components</code>, y pueden ser
                reutilizados en diferentes partes de la aplicación.
              </li>
              <li>
                Las <strong>secciones</strong> son bloques de contenido que puedes estructurar mediante componentes para
                mejorar la modularidad y organización.
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.subtitle}>¿Cómo se editan/modifican los ficheros que actúan en el framework?</h2>
            <p>
              La edición de ficheros en el framework es sencilla y se realiza directamente en el código fuente del
              proyecto. Aquí algunos puntos clave:
            </p>
            <ul>
              <li>
                Modifica las páginas dentro del directorio <code>pages</code> para cambiar el contenido de las rutas de
                la aplicación.
              </li>
              <li>
                Crea o edita componentes en el directorio <code>src/components</code> para añadir nuevas funcionalidades
                o elementos reutilizables.
              </li>
              <li>
                Los estilos se manejan en archivos CSS o utilizando módulos como <code>module.css</code> para cada
                componente.
              </li>
              <li>
                Si el proyecto utiliza un archivo de configuración (como <code>next.config.js</code>), puedes realizar
                ajustes globales para personalizar el comportamiento del framework.
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.subtitle}>
              ¿Cómo se referencian los ficheros creados desde otras aplicaciones (si es el caso)?
            </h2>
            <p>
              Los ficheros creados en este framework pueden ser referenciados desde otras aplicaciones o servicios a
              través de las siguientes opciones:
            </p>
            <ul>
              <li>
                Si es una API o backend, utiliza las rutas definidas en el framework para consumir datos (por ejemplo:{" "}
                <code>/api/ruta</code>).
              </li>
              <li>
                Si se trata de un frontend, exporta componentes o librerías específicas que puedan ser integradas en
                otras aplicaciones.
              </li>
              <li>
                En caso de aplicaciones compartidas, utiliza módulos como <code>npm</code> o <code>yarn</code> para
                publicar y distribuir tu código.
              </li>
            </ul>
          </div>
        </main>
      </div>
    </>
  );
}
