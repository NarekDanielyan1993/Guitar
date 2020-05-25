import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createBrowserHistory } from "history";
import { configureStore } from "../configureStore";
import { AppContainer } from "react-hot-loader";
import { IAppState } from "./store/index";

const history = createBrowserHistory();

import "./stylesheets/_main.scss";

const initialState: Record<string, IAppState> = {};
const store = configureStore(history, initialState);
ReactDOM.render(
    <AppContainer>
        <App store={store} history={history} />
    </AppContainer>,
    document.getElementById("root")
);

if (module.hot) {
    module.hot.accept("./App", () => {
        const NextApp = require("./App").default;

        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            document.getElementById("root")
        );
    });
}

// ReactDOM.render(
//     <Provider store={store}>
//         <AppContainer>
//             <App />
//         </AppContainer>
//     </Provider>,
//     document.getElementById("root")
// );
