import React from "react";

const DEFAULT_KEY = "__NEXT_TOGGLE__";

export function createToggleContext(toggle, reqToggle = null) {
  return {
    ...toggle,
    ...reqToggle,
  };
}

export function getToggleContext({ toggle, reqToggle, config }) {
  const { storeKey } = config;
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createToggleContext(toggle, reqToggle);
  }

  // Reuse context on the client-side.
  if (!window[storeKey]) {
    window[storeKey] = createToggleContext(toggle, reqToggle);
  }

  return window[storeKey];
}

const withToggleNext = (initialToggle, config) => {
  config = {
    storeKey: DEFAULT_KEY,
    initialToggle,
    ...config,
  };

  return App =>
    class WithToggleNextHOC extends React.Component {
      static displayName = `withToggleNext(${App.displayName || App.name || "App"})`; // prettier-ignore

      static getInitialProps = async appCtx => {
        if (!appCtx) throw new Error("No app context");
        if (!appCtx.ctx) throw new Error("No page context");

        const toggleReq = appCtx.ctx.req ? appCtx.ctx.req.toggle : null;

        appCtx.ctx.toggleReq = toggleReq;

        let initialProps = {};

        if ("getInitialProps" in App) {
          initialProps = await App.getInitialProps.call(App, appCtx);
        }

        return {
          toggleReq,
          initialProps,
        };
      };

      constructor(props, context) {
        super(props, context);

        this.toggle = props.toggleReq
          ? getToggleContext({
              initialToggle,
              reqToggle: props.toggleReq,
              config,
            })
          : getToggleContext({ initialToggle, config });
      }

      render() {
        let { initialProps, toggleReq, ...props } = this.props; // eslint-disable-line no-unused-vars

        return <App {...props} {...initialProps} toggle={this.toggle} />;
      }
    };
};

export default withToggleNext;
