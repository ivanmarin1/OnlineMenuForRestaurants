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
              position: "relative",
            }}
          >
            <div style={{ margin: "10px", color: "#333;" }}>
              <h3 style={{ fontWeight: "normal", height: "2em" }}>
                {drink.name}
              </h3>
            </div>
            <div style={{ width: "80%", margin: "0 auto" }}>
              <Image width="100%" height="200px" filename={drink.image}></Image>
            </div>
            <div className={style.featureList}>
              <ul id={style.featureStyle}>
                {drink.ingredients.map(item => {
                  return <li>{item}</li>
                })}
              </ul>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 10,
                right: 10,
              }}
            >
              <p style={{ marginBottom: "0" }}>{drink.price}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Items
