import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
const SeriseList = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query SeriseList {
      allMarkdownRemark(
        filter: { frontmatter: { series: { eq: "블로그 제작" } } }
      ) {
        nodes {
          id
          frontmatter {
            series
            title
            link
            summary
          }
        }
      }
    }
  `);
  return (
    <div className="bg-slate-100 rounded my-4 p-2">
      <h2 className="font-bold text-xl mb-2">시리즈 😌</h2>
      {allMarkdownRemark.nodes.map((ele, index) => {
        const { title, link } = ele.frontmatter;
        return (
          <div key={index} className="hover:underline">
            <Link to={"/blog/" + link}>
              <p>{title}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SeriseList;
