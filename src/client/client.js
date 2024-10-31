import "babel-polyfill";
import React from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import Routes from "./Routes";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware(thunk));

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
