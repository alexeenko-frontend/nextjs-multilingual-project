import React, { Component, Fragment } from "react";
import Navigation from "components/Nav";
import useTranslation from "locale/useTranslation";
import Head from "next/head";
const Layout = props => {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>{t(props.title)}</title>
      </Head>
      <Navigation></Navigation>
      {props.children}
    </div>
  );
};

export default Layout;
