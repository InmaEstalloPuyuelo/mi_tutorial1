import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tutorial de Next.js</title>
        <meta name="description" content="Tutorial paso a paso de Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={pageStyle}>
        <main style={mainStyle}>
          {/* Encabezado */}
          <header style={headerStyle}>
            <h1 style={titleStyle}>Tutorial de Next.js</h1>
            <p style={subtitleStyle}>
              Aprende a construir aplicaciones modernas con este poderoso framework.
            </p>
          </header>

          {/* Índice del Tutorial */}
          <section style={sectionStyle}>
            <h2 style={sectionTitleStyle}>Índice</h2>
            <ul style={listStyle}>
              <li>
                <a style={linkStyle} href="/justificacion">
                  1. Justificación del Framework
                </a>
              </li>
              <li>
                <a style={linkStyle} href="/instalacion">
                  2. Instalación
                </a>
              </li>
              <li>
                <a style={linkStyle} href="/primeros-pasos">
                  3. Primeros Pasos
                </a>
              </li>
              <li>
                <a style={linkStyle} href="/utilizacion">
                  4. Utilización del Framework
                </a>
              </li>
              <li>
                <a style={linkStyle} href="/funcionamiento">
                  5. Explicación del Funcionamiento
                </a>
              </li>
              <li>
                <a style={linkStyle} href="/conclusiones">
                  6. Conclusiones
                </a>
              </li>
              <li>
                <a style={linkStyle} href="/ventajas">
                  7. Ventajas del Framework
                </a>
              </li>
              <li>
                <a style={linkStyle} href="/desventajas">
                  8. Desventajas del Framework
                </a>
              </li>
              <li>
                <a style={linkStyle} href="/ejemplos-proyectos">
                  9. Ejemplos de Proyectos
                </a>
              </li>
              <li>
                <a style={linkStyle} href="/recursos">
                  10. Recursos Adicionales
                </a>
              </li>
            </ul>
          </section>

          {/* Pie de página */}
          <footer style={footerStyle}>
            <p>
              Desarrollado con <span style={heartStyle}>❤️</span> usando{" "}
              <a
                style={footerLinkStyle}
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next.js
              </a>
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}

// Estilos en línea
const pageStyle = {
  fontFamily: "'Inter', sans-serif",
  margin: 0,
  padding: 0,
  backgroundColor: "#f7f8fc",
  color: "#333",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const mainStyle = {
  maxWidth: "800px",
  background: "#fff",
  borderRadius: "10px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  padding: "2rem",
  overflow: "hidden",
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "2rem",
};

const titleStyle = {
  fontSize: "2.5rem",
  color: "#0070f3",
  margin: "0",
};

const subtitleStyle = {
  fontSize: "1rem",
  color: "#666",
};

const sectionStyle = {
  marginTop: "2rem",
};

const sectionTitleStyle = {
  fontSize: "1.5rem",
  borderBottom: "2px solid #0070f3",
  paddingBottom: "0.5rem",
  marginBottom: "1rem",
};

const listStyle = {
  listStyle: "none",
  padding: 0,
};

const linkStyle = {
  display: "block",
  textDecoration: "none",
  color: "#0070f3",
  fontSize: "1.2rem",
  margin: "0.5rem 0",
  padding: "0.5rem",
  borderRadius: "5px",
  transition: "background-color 0.2s ease",
  background: "rgba(0, 112, 243, 0.05)",
};

const footerStyle = {
  marginTop: "2rem",
  textAlign: "center",
  fontSize: "0.9rem",
  color: "#777",
};

const heartStyle = {
  color: "red",
};

const footerLinkStyle = {
  color: "#0070f3",
  textDecoration: "none",
};
