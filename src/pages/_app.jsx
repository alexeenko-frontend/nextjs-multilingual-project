import React from "react";
import { Provider } from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import parser from "ua-parser-js";
import { persistStore } from "redux-persist";

import PersistGate from "../persist";
import { SecodaryMedia } from "../mediaMatch";
import createStore from "../store";

import "../styles/index.css";

// import NProgress from "nprogress";

// NProgress.configure({ showSpinner: false });

// Router.events.on("routeChangeStart", url => {
//   NProgress.start();
// });
// Router.events.on("routeChangeComplete", url => {
//   NProgress.done();
// });
// Router.events.on("routeChangeError", url => {
//   NProgress.done();
// });

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = null;
    let userAgent = null;

    if (typeof window === "undefined") {
      userAgent = parser(ctx.req.headers["user-agent"]);
    }

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps,
      userAgent,
      query: ctx.query
    };
  }

  componentDidMount() {}

  render() {
    const { Component, pageProps, store, userAgent, query } = this.props;
    const SSR = typeof window === "undefined";

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)} SSR={SSR}>
          <SecodaryMedia.Provider>
            <SecodaryMedia.ServerRender
              predicted={(userAgent && userAgent.device.type) || "desktop"}
              hydrated
            >
              <Component {...pageProps} />
            </SecodaryMedia.ServerRender>
          </SecodaryMedia.Provider>
        </PersistGate>
      </Provider>
    );
  }
}

export default withRedux(createStore)(withReduxSaga({ async: true })(MyApp));
