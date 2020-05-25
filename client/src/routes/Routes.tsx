import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../containers/Home/Home";

const Routes: React.SFC = () => (
    <>
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
    </>
);

export default Routes;
