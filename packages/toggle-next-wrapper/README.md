<h1 align="center">
  Toggle Nextjs Wrapper
</h1>

<p align="center">
Toggle React library for <a href="https://github.com/MathieuDoyon/toggle">toggle</a>
</p>

## Installation

```bash
$ npm install --save @mathdoy/toggle @mathdoy/toggle-react  @mathdoy/toggle-next-wrapper

# If you use a custom server you can install @mathdoy/toggle-middleware to allow overriten config from headers
$ npm install --save @mathdoy/toggle-middleware
```

```jsx
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
```

## [See more documentation on **Next.js** example](https://github.com/MathieuDoyon/toggle/tree/master/examples/nextjs)

## For more information on toggle

For more information on toggle see [toggle](https://github.com/MathieuDoyon/toggle/tree/master/packages/toggle)

## License

Toggle is licensed under the [MIT License](https://github.com/MathieuDoyon/toggle/blob/master/LICENSE.md).
