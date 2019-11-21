import React, { Component } from "react";
import Head from "next/head";
import { getInitialLocale } from "locale/getInitialLocale";

const Home = () => {
  React.useEffect(() => {
    window.location.replace(`/${getInitialLocale()}`);
  });

  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};

export default Home;
