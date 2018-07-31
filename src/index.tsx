import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader";

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");

  if (rootEl == null) {
    return undefined;
  }

  ReactDOM.render(<AppComponent/>, rootEl);
});

class App extends React.Component {
  render() {
    return (
      // HOT RELOAD される！！！
      <p>foo 1145adfaf</p>
    );
  }
}

const AppComponent = hot(module)(App);

