import React from "react"
// import { Link } from "gatsby"
import Image from "./image"

const PostLink = ({ element, drink, image }) => {
  let listBackground = { backgroundColor: "white" }
  if (element % 2 !== 0)
    listBackground = { backgroundColor: "rgb(236, 243, 251)" }
  return (
    // <Link to={drink}>
    <div>
      <Image filename={image}></Image>
      <h3>{drink}</h3>
    </div>
    // </Link>
  )
}
export default PostLink
