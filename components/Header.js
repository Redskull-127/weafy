import styles from "../styles/Header.module.css";
import React, { Component, useState, useEffect } from "react";

export default function Header() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [icon, setIcon] = useState(
    "https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-sunny-weather-justicon-flat-justicon.png"
  );
  useEffect(() => {
    const textbox = document.getElementById("textbox");
    const info = document.getElementById("info");
    textbox.addEventListener("keypress", function (key) {
      if (key.code == "Enter") {
        function fet() {
          fetch(
            "https://api.weatherapi.com/v1/current.json?key=7a3680f23e024fa7b60153535222805&q=" +
              textbox.value
          )
            .then((res) => res.json())
            .then((json) => {
              setItems(json);
              console.log(json);
            })
            .then(
              (info.innerHTML = `<h1> ${items.location.name} ${items.current.condition.text}</h1><h2> ${items.current.temp_c} deg </h2>`)
            )
            .then((textbox.style.marginTop = "250px"))
            .then(setIcon(`${items.current.condition.icon}`));
        }
        fet();
      }
    });
  });

  return (
    <center>
      <img src={icon} className={styles.imgmain} />

      <input
        type="text"
        className={`form-control ${styles.test}`}
        id="textbox"
        placeholder="eg Ahemdabad, Surat etc"
        autoFocus={true}
      />
      <div className={styles.info} id="info"></div>
    </center>
  );
}
