import React from "react";
import Layout from "./components/Layout/Layout";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { Store } from "redux";
import { History } from "history";
import { IAppState } from "../src/store/index";
import Routes from "../src/routes/Routes";

interface MainProps {
    store: Store<IAppState>;
    history: History;
}

const App: React.FC<MainProps> = ({ store, history }) => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>         
                <Layout>
                    <Routes />
                </Layout>
            </ConnectedRouter>
        </Provider>
    );
};

export default App;
