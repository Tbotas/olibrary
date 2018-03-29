import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import booksReducer from './reducers/books-reducers';


const allReducers = combineReducers({
    books: booksReducer
});

const store = createStore(
    allReducers, {
        books: [{title: 'mon cul', description: 'lol'}]
    },
    window.devToolsExtension && window.devToolsExtension()
);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));