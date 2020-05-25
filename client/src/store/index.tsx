import { History } from "history";
import { combineReducers } from "redux";
import { connectRouter, RouterState } from "connected-react-router";

export interface IAppState {
    router: RouterState;
}

export const createRootReducer = (history: History) =>
    combineReducers({
        router: connectRouter(history),
    });
