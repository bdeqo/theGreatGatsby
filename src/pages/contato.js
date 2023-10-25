import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";

const paginaContato = () => {
  return (
    <Layout>
      <Head title="Contato" />
      <h1>Contato</h1>
      <p>
        Fale comigo:
        <a href="https://www.linkedin.com/in/brgdq/" target="blank">
          Linkedin
        </a>
      </p>
    </Layout>
  );
};

export default paginaContato;
