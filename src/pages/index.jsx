import * as React from "react";
import "styles/global.css";
import { Header, Screen, Card } from "component";
import { graphql } from "gatsby";

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          title
          summary
          date
          categories
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 400)
            }
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data;
  return (
    <main>
      <Header />
      <Screen>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-4 gap-4">
          {allMarkdownRemark.nodes.map((data) => (
            <Card key={data.id} data={data.frontmatter} />
          ))}
        </div>
      </Screen>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
