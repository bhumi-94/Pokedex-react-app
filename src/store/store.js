
import rootReducer from "../reducer";
import { thunk } from 'redux-thunk';
import {applyMiddleware, createStore } from "redux";


export let store = createStore(rootReducer,applyMiddleware(thunk));