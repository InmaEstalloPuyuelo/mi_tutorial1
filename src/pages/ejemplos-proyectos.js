import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function EjemplosProyectos() {
  return (
    <>
      <Head>
        <title>Ejemplos de Proyectos</title>
        <meta name="description" content="Proyectos desarrollados con Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        <main className={styles.main}>
          <h1 className={styles.title}>Ejemplos de Proyectos</h1>
          <p className={styles.description}>
            Next.js ha sido utilizado para construir aplicaciones innovadoras. Algunos ejemplos incluyen:
          </p>
          <ul className={styles.list}>
            <li>
              <strong>E-commerce:</strong> Tiendas en línea optimizadas para SEO y velocidad, como la de <a href="https://www.shopify.com/" target="_blank">Shopify</a>.
            </li>
            <li>
              <strong>Blogs y portafolios:</strong> Sitios personales y corporativos con generación de páginas estáticas.
            </li>
            <li>
              <strong>Aplicaciones SaaS:</strong> Interfaces rápidas y escalables para herramientas empresariales.
            </li>
            <li>
              <strong>Webs corporativas:</strong> Empresas como Netflix y Twitch usan Next.js para sitios optimizados.
            </li>
          </ul>
        </main>
      </div>
    </>
  );
}
