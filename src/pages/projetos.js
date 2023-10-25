import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import * as projectStyles from "./projetos.module.scss";
import Head from "../components/head";

const PaginaBlog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Head title="Projetos" />
      <h1>Projetos</h1>
      <ol className={projectStyles.posts}>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li className={projectStyles.post}>
              <Link to={`/projetos/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default PaginaBlog;
