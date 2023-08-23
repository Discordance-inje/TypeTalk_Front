import { applyMiddleware, combineReducers, createStore } from "redux";
import { chatReducer } from "../reducer/chatReducer";
import logger from 'redux-logger'
import { listReducer } from "../reducer/userReducer";

const rootReducer = combineReducers({
    chat: chatReducer,
    
    list:listReducer
})

const store = createStore(rootReducer,applyMiddleware(logger));

export default store;