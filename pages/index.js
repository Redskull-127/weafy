import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import bootstrap from "bootstrap";
import Draggable, { DraggableCore } from "react-draggable";
import Header from "../components/Header";
import ReactDOM from "react-dom";
import React from "react";
import Script from "next/script";

export default function Home() {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <Head>
          <title>Weafy</title>
          <meta name="description" content="Automated Weather Forecast" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
            crossOrigin="anonymous"
          />
        </Head>
          <Script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
            crossOrigin="anonymous"
          ></Script>
        <Header />
        <main className={styles.main}></main>

        {/* <footer className={styles.footer}></footer> */}
      </div>
    </React.Fragment>
  );
}
