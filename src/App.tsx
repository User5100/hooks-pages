import React from "react";
import { hot } from "react-hot-loader/root";
import WebHooks from "./WebHooks/WebHooks";
import AddWebHooks from "./WebHooks/AddWebHooks";
import EditWebHook from "./WebHooks/EditWebHook";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { WebHookProvider } from "./WebHooks/Context/Context";

const App: React.FunctionComponent = () => {
  return (
    <WebHookProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <WebHooks />
          </Route>
          <Route path="/add">
            <AddWebHooks />
          </Route>
          <Route path="/edit/:id">
            <EditWebHook />
          </Route>
        </Switch>
      </BrowserRouter>
    </WebHookProvider>
  );
};

export default hot(App);
