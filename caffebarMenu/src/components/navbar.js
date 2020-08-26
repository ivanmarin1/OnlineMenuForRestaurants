import React from "react"
import Cocktails from "../menuList/cocktails.json"
import VirginCocktails from "../menuList/virginCocktails.json"
import Items from "../components/items"
import Image from "./image"
import style from "../styles/navbar.module.css"

// const menuSections = [
//   "Warm beverages",
//   "Short drinks",
//   "Long drinks",
//   "Coffee",
//   "Virgin cocktails",
// ]

const menuSections = [Cocktails, VirginCocktails]

// const Navbar = () => (
//   <nav>
//     {/* {menuSections.map((section, index) => {
//       return (
//         <PostLink
//           element={index}
//           key={index}
//           drink={section.sectionName}
//           image={""}
//         />
//       )
//     })} */}
//     <Apartments menuSections={menuSections}></Apartments>
//   </nav>
// )
// export default Navbar

export default class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ActiveList: menuSections[0],
      active: "first",
    }
    this._onButtonClick = this._onButtonClick.bind(this)
    this.addActiveClass = this.addActiveClass.bind(this)
  }

  _onButtonClick(value) {
    this.setState({
      ActiveList: menuSections[value],
    })
  }

  addActiveClass(e) {
    const clicked = e.target.id
    if (this.state.active === clicked) {
      this.setState({ active: "" })
    } else {
      this.setState({ active: clicked })
    }
  }

  render() {
    return (
      <div style={{}}>
        <div className={style.list}>
          {menuSections.map((section, index) => {
            return (
              <div
                className={`${style.listItem} ${style.zoom} ${
                  this.state.active === "first"
                }`}
                id="first"
                onClick={e => {
                  this.addActiveClass(e)
                  this._onButtonClick(index)
                }}
              >
                <h3>{section.sectionName}</h3>
                <div style={{ width: "100px" }}>
                  <Image filename={section.sectionImage}></Image>
                </div>
              </div>
            )
          })}
        </div>
        <div>
          <Items menuItems={this.state.ActiveList} />
        </div>
      </div>
    )
  }
}
