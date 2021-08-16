import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import dayjs from 'dayjs';

import Main from "../main"
import Seo from "../seo"

const shortcodes = { Link } // Provide common components here

export default function BlogTemplate({ data: { mdx } }) {
  const { frontmatter, body, fields } = mdx

  return (
    <Main
      title="About"
      description="Learn about Eric Schanet"
    >
      <Seo title="About me" />
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2 data-testid="heading">{frontmatter.title}</h2>
            <p>(about {fields.readingTime.text})</p>
          </div>
        </header>
      <header>
        <h1>{frontmatter.title}</h1>
        {/* <h3><a href={data.link}>{data.title}</a></h3> */}
        <time className="published">{dayjs(frontmatter.date).format('MMMM, DD, YYYY')}</time>
      </header>
      <MDXProvider components={shortcodes}>
        <MDXRenderer frontmatter={frontmatter}>{body}</MDXRenderer>
      </MDXProvider>
    </article>
  </Main>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
