import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { createBrowserHistory } from 'history';
import { createStore } from 'redux';
import createRootReducer from './reducers';


export const history = createBrowserHistory()
const store = createStore(createRootReducer(history)/*, {router: history, card_reducer:{project:DATA[0], shift:170}}*/)

console.log(store.getState())
ReactDOM.render(
                    <Provider store={store}>
                        <App></App>
                    </Provider>, 
                    document.getElementById('root')
                );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
