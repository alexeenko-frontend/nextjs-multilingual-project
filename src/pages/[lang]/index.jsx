import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import features from "features";
import withLocale from "locale/withLocale";
import Layout from "scenes/Layout";

const IndexPage = props => {
  return (
    <Layout title="homeTitle">
      <features.home.page {...props} />
    </Layout>
  );
};

IndexPage.getInitialProps = ({ query, store }) => {
  store.dispatch(features.home.actions.fetchDataRequest());
};

const mapState = state => ({
  ...state.home
});

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      fetchData: features.home.actions.fetchDataRequest
    },
    dispatch
  );

export default withLocale(connect(mapState, mapDispatch)(IndexPage));
