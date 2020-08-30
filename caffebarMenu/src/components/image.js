import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }

      // const imageSizes = image.node.childImageSharp.sizes
      const imageFluids = image.node.childImageSharp.fluid
      let width = 0
      let height = 0
      if (props.width) width = props.width
      else width = "100%"
      if (props.height) height = props.height
      else height = ""

      const style = {
        objectFit: "cover",
        width: width,
        height: height,
        position: "absolute",
        border: "",
        borderRadius: "3px",
      }
      return <Img imgStyle={style} alt={props.alt} fluid={imageFluids} />
    }}
  />
)

export default Image
