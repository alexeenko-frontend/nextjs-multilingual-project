import React, { Component, Fragment } from "react";

import { Mobile, Desktop } from "components/Responsive";

import withLocale from "locale/withLocale";
import useTranslation from "locale/useTranslation";

const HomePage = props => {
  const { locale, t } = useTranslation();

  return (
    <Fragment>
      <div>
        <h1>{t("homeTitle")}</h1>
      </div>
    </Fragment>
  );
};

export default HomePage;
