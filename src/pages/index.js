import React from "react"
import Layout from "../components/layout"
import Gallery from "../components/Gallery"
import SEO from "../components/Seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Gallery />
    </Layout>
  )
}

export default IndexPage
