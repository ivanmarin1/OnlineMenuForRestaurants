import React from "react"
import Cocktails from "../menuList/cocktails.json"
import VirginCocktails from "../menuList/virginCocktails.json"
import Coffee from "../menuList/coffee.json"
import ShortDrinks from "../menuList/shortDrinks.json"
import Items from "../components/items"
import Image from "./image"
import style from "../styles/navbar.module.css"

const menuSections = [Cocktails, VirginCocktails, Coffee, ShortDrinks]

export default class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ActiveList: menuSections[0],
      active: "0",
    }
    this._onButtonClick = this._onButtonClick.bind(this)
    this.addActiveClass = this.addActiveClass.bind(this)
  }

  _onButtonClick(value) {
    this.setState({
      ActiveList: menuSections[value],
    })
  }

  addActiveClass(id) {
    const clicked = id
    console.log("Clicked: " + clicked)
    if (this.state.active === clicked) {
      this.setState({ active: "" })
    } else {
      this.setState({ active: clicked })
    }
  }

  render() {
    return (
      <div>
        <div className={style.list}>
          {menuSections.map((section, index) => {
            return (
              <div
                role="button"
                tabIndex={index}
                className={`${style.listItem} ${style.zoom} ${
                  this.state.active === index ? style.active : ""
                }`}
                id={index}
                onClick={e => {
                  this.addActiveClass(index)
                  this._onButtonClick(index)
                }}
                onKeyDown={e => {
                  this.addActiveClass(index)
                  this._onButtonClick(index)
                }}
              >
                <h3>{section.sectionName}</h3>
                <div className={style.imgWrapper}>
                  <Image
                    width="100%"
                    height="150px"
                    filename={section.sectionImage}
                  ></Image>
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
