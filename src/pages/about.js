import React from 'react';
import { Link, graphql } from "gatsby";

import Main from "../components/main"
import Seo from "../components/seo"

const About = ({data}) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, fields } = markdownRemark

  return (
    <Main
      title="About"
      description="Learn about Eric Schanet"
    >
      <Seo title="About me" />
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/about">About Me</Link></h2>
            <p>(in about {fields.readingTime.minutes.toFixed()} min)</p>
          </div>
        </header>
        {/* <h1>{frontmatter.title}</h1>
        <p>{frontmatter.date}</p> */}
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </Main>
  )
}

export default About;

export const pageQuery = graphql`
query {
  markdownRemark(frontmatter: { path: { eq: "about" } }) {
    html
    excerpt(pruneLength: 200)
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      path
      title
    }
    fields {
      readingTime {
        text
        minutes
      }
    }
  }
}
`
