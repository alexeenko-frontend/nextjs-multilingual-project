import React, { Component } from "react";
import ErrorPage from "../pages/_error";

export default Component =>
  class extends React.Component {
    static async getInitialProps(ctx) {
      if (ctx) {
        const props = await Component.getInitialProps(ctx);
        if (ctx.res && ctx.res.statusCode) {
          return { statusCode: ctx.res.statusCode, ...props };
        }
        return { ...props };
      }
    }

    render() {
      const { statusCode } = this.props;
      if (statusCode && statusCode !== 200) {
        return <ErrorPage statusCode={statusCode} />;
      }
      return <Component {...this.props} />;
    }
  };
