import { applyMiddleware, combineReducers, createStore } from "redux";
import { chatReducer } from "../reducer/chatReducer";
import logger from 'redux-logger'
import { listReducer, userReducer } from "../reducer/userReducer";

const rootReducer = combineReducers({
    chat: chatReducer,
    user: userReducer,
    list:listReducer
})

const store = createStore(rootReducer,applyMiddleware(logger));

export default store;