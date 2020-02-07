import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import postReducer from "../reducers/postReducer";
import profileReducer from "../reducers/profileReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const initialState = {
    messages: {
        posts: []
    },

    accounts: {
        profiles: []
    }
}

const combinedReducers = combineReducers({
    messages: postReducer,
    accounts: profileReducer
})

export default function configureStore() {
    return createStore(combinedReducers, initialState,
        composeEnhancers(applyMiddleware(thunk))
    )
}