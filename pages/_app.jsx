import React from "react";
import { Provider } from "react-redux";
import reduxStore from "../store";
import withRedux from "next-redux-wrapper";
import "../public/styles/main.scss";

const _app = ({ Component, pageProps, store }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default withRedux(reduxStore)(_app);
