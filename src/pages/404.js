import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";

const NotFound = () => {
  return (
    <Layout>
      <Head title="Oooops..." />
      <h1>Página não encontrada :(</h1>
      <p>
        <Link to="/">Me leve de volta já!</Link>
      </p>
    </Layout>
  );
};

export default NotFound;
