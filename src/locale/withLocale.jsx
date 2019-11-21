import React from "react";
// import { NextPage } from "next";
import Error from "next/error";
import { getDisplayName } from "next/dist/next-server/lib/utils";
import { isLocale, Locale } from "./types";
import { LocaleProvider } from "locale/LocaleContext";
import ErrorPage from "../pages/_error";

export default WrappedPage => {
  const WithLocale = ({ locale, statusCode, ...pageProps }) => {
    if (!locale) {
      if (statusCode && statusCode !== 200) {
        return <ErrorPage statusCode={statusCode} />;
      }
    }
    return (
      <LocaleProvider lang={locale}>
        <WrappedPage {...pageProps} />
      </LocaleProvider>
    );
  };

  WithLocale.getInitialProps = async ctx => {
    let pageProps = {};
    if (WrappedPage.getInitialProps) {
      pageProps = await WrappedPage.getInitialProps(ctx);
    }
    if (typeof ctx.query.lang !== "string" || !isLocale(ctx.query.lang)) {
      ctx.res.statusCode = 404;

      return {
        locale: undefined,
        statusCode: ctx.res.statusCode,
        ...pageProps
      };
    }
    return { ...pageProps, locale: ctx.query.lang };
  };

  WithLocale.displayName = `withLang(${getDisplayName(WrappedPage)})`;

  return WithLocale;
};
