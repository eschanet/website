import React from 'react';
import { Link, graphql } from "gatsby";

import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Main from "../components/main"
import Seo from "../components/seo"

const shortcodes = { Link } // Provide common components here

const About = ({ data }) => {
  const { body, frontmatter, fields } = data.mdx

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
        {/* <MDXProvider components={shortcodes}> */}
        <MDXRenderer>{body}</MDXRenderer>
        {/* </MDXProvider> */}
      </article>
    </Main>
  )
}

export default About;

export const pageQuery = graphql`
query {
  mdx(fileAbsolutePath: {regex: "/about\/about/"}) {
    body
    excerpt(pruneLength: 160)
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
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
