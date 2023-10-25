import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";

const indexPagina = () => {
  return (
    <Layout>
      <Head title="Principal" />
      <h1>Hello.</h1>
      <h2>I'm Dennys, a Front End Developer living in beautiful São Paulo.</h2>
      <p>
        Need a developer? <Link to="/contato">Fale comigo</Link>
      </p>
    </Layout>
  );
};

export default indexPagina;
