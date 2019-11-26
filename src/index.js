/**
 * 1. Не добавляется задача по нажатию кнопки `+`
 * 2. При клике по задаче вызывается ререндер списка.
 *    Нужно оптимизировать его таким образом,
 *    чтобы ререндер осуществлялся для предыдущего
 *    и текущего элемента списка, без использования shouldComponentUpdate
 * 3. Не оборажается последняя добавленная задача в строке `Последняя добавленная:`
 */

import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./store";

import App from "./containers/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
