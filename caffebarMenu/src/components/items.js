import Image from "./image"
import React from "react"
import style from "../styles/table.module.css"

const Items = ({ menuItems }) => {
  return (
    <div>
      <h2>Drinks</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gridColumnGap: "2em",
          gridRowGap: "2em",
        }}
      >
        {menuItems.drinks.map(drink => {
          return (
            <div
              style={{
                width: "100%",
                border: "",
                borderRadius: "10px",
                padding: "1%",
                backgroundColor: "#f8f8f8",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ margin: "10px", color: "#333;" }}>
                <h3 style={{ fontWeight: "normal", height: "2em" }}>
                  {drink.name}
                </h3>
              </div>
              <div
                style={{
                  width: "80%",
                  margin: "10px auto",
                  marginBottom: "10%",
                  height: "",
                }}
              >
                <Image width="100%" height="" filename={drink.image}></Image>
              </div>
              <div className={`${style.featureList}`}>
                <ul id={style.featureStyle}>
                  {drink.ingredients.map(item => {
                    return <li>{item}</li>
                  })}
                </ul>
              </div>
              <div style={{ margin: "auto 0 0 0" }}>
                <p
                  style={{
                    margin: "0 10px 5px 10px",
                  }}
                >
                  {drink.price}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Items
