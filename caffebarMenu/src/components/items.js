import Image from "./image"
import React from "react"
import style from "../styles/table.module.css"

const Items = ({ menuItems }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gridColumnGap: "2em",
        gridRowGap: "2em",
      }}
    >
      {menuItems.drinks.map(drink => {
        return (
          <div
            style={{
              width: "100%",
              border: "1px solid #ded9d9",
              borderRadius: "10px",
              padding: "1%",
              backgroundColor: "",
            }}
          >
            <div style={{ margin: "10px", color: "#333;" }}>
              <h3 style={{ fontWeight: "normal" }}>{drink.name}</h3>
            </div>
            <div style={{ width: "80%", margin: "0 auto" }}>
              <Image filename={drink.image}></Image>
            </div>
            <div className={style.featureList}>
              <ul id={style.featureStyle}>
                {drink.ingredients.map(item => {
                  return <li>{item}</li>
                })}
              </ul>
            </div>
            <div>
              <p>Price: {drink.price}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Items
