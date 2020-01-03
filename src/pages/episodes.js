import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader"
import Episode from "../components/Episode"
import Footer from "../components/Footer"
import "./pages.css"

const EpisodesPage = ({ data }) => (
  <div className="page">
    <SEO title="Ladybug Podcast" />
    <PageHeader />
    <div className="page-banner">
      <h1>Episodes</h1>
    </div>
    <main>
      {data.allMarkdownRemark.edges.map(post => {
        const {
          title,
          description,
          path,
          formattedDate,
          episode,
          length,
        } = post.node.frontmatter
        return (
          <Episode
            title={title}
            description={description}
            date={formattedDate}
            path={path}
            episode={episode}
            length={length}
          />
        )
      })}
    </main>
    <Footer />
  </div>
)

export const blogsQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            path
            title
            formattedDate
            description
            episode
            length
          }
        }
      }
    }
  }
`

export default EpisodesPage
