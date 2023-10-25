import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";

const paginaSobreMim = () => {
  return (
    <Layout>
      <Head title="Sobre mim" />
      <h1>About me</h1>
      <p>
        Sou um desenvolvedor de 31 anos especializado em Front-End. Adoro
        programar e descobrir como resolver problemas profundos usando
        tecnologia de ponta. Meu foco principal é front e desenvolvimento,
        fazendo aplicações que impactam a vida de milhares de usuários.
      </p>
      <p>
        Quer trabalhar comigo? <Link to="/contato">Manda um oi!</Link>
      </p>
    </Layout>
  );
};

export default paginaSobreMim;
