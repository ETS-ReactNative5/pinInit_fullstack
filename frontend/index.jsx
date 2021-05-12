import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";

import Root from "./components/root";




document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    debugger
    let preloadedState;
    if (window.currentUser) {
        debugger
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        };
    } else {
        preloadedState = {};
    }
    const store = configureStore(preloadedState);

    ReactDOM.render(<Root store={store} />, root);

});

