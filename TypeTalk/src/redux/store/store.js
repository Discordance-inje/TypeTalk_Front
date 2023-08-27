import { applyMiddleware, combineReducers, createStore } from "redux";
import { chatReducer,  userReducer } from "../reducer/chatReducer";
import logger from 'redux-logger'

const rootReducer = combineReducers({
    chat: chatReducer,
    user: userReducer
})

const store = createStore(rootReducer,applyMiddleware(logger));

export default store;