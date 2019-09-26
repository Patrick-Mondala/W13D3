import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
window.addEventListener("DOMContentLoaded", () => {
    let root = document.getElementById("content");
 
    window.store = configureStore()
    
    function Root() {
        return (
            <h1>Todos App</h1>
        )
    }

    ReactDOM.render(<Root />, root);
});
