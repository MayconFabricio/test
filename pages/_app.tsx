import App, { Container } from "next/app";
import React from "react";
import fetch from "isomorphic-unfetch";
//import  { ThemeProvider } from "styled-components";
//import Veiculos from "../components/theme";


class MyApp extends App {


  render() {

    const { Component, pageProps } = this.props as any;
    return (
          <Container>
              <Component {...pageProps} />
          </Container>
    );
  }
}

export default MyApp;
