import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Items from "../components/items"
import Navbar from "../components/navbar"
import Cocktails from "../menuList/cocktails.json"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Online Menu</h1>
    {/* <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
        gridColumnGap: "2em",
      }}
    > */}
    <Navbar />
    {/* <Items menuItems={Cocktails} /> */}
    {/* </div> */}
  </Layout>
)

export default IndexPage
