import { IAppState, createRootReducer } from "./src/store/index";
import { Store, createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import { History } from "history";
import thunk from "redux-thunk";

export const configureStore = (
    history: History,
    initialState: Partial<IAppState>,
): Store<IAppState, any> => {
    const composeEnhancers = composeWithDevTools({});

    const store = createStore(
        createRootReducer(history),
        initialState,
        composeEnhancers(applyMiddleware(routerMiddleware(history), thunk)),
    );
    return store;
};
