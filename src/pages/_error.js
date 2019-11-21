import React from "react";
import features from "features";

const ErrorPage = props => {
  return <features.error.page statusCode={props.statusCode} />;
};

ErrorPage.getInitialProps = ({ res, jsonPageRes }) => {
  const statusCode = res
    ? res.statusCode
    : jsonPageRes
    ? jsonPageRes.status
    : null;

  return { statusCode };
};

export default ErrorPage;
