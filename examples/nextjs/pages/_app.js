import React from "react";
import App, { Container } from "next/app";
import { createToggle } from "@mathdoy/toggle";
import { ToggleProvider } from "@mathdoy/toggle-react";
import withToggleNext from "@mathdoy/toggle-next-wrapper";
import initialToggle from "../toggle";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {},
    };
  }

  render() {
    const { Component, pageProps, toggle } = this.props;

    return (
      <Container>
        <ToggleProvider toggle={createToggle(toggle)}>
          <Component {...pageProps} />
        </ToggleProvider>
      </Container>
    );
  }
}

export default withToggleNext(initialToggle)(MyApp);
