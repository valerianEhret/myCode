import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store, {RootStateType} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

const renderTree =(state:RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
        <React.StrictMode>
            <App state ={state}
                 dispatch ={store.dispatch.bind(store)}
                 // store={store}
            />
        </React.StrictMode>,
            </BrowserRouter>,
        document.getElementById('root')
    );
}


renderTree(store.getState());

store.subsсribe(renderTree)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
