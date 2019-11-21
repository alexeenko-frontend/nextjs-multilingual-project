import React from "react";
import withLocale from "locale/withLocale";
import useTranslation from "locale/useTranslation";
import Layout from "scenes/Layout";

const ArtistPage = () => {
  const { locale, t } = useTranslation();

  return (
    <Layout title="User id">
      <h1>{t("userIdTitle")}</h1>
    </Layout>
  );
};

export default withLocale(ArtistPage);
