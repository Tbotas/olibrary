import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import booksReducer from './reducers/books-reducers';
import filtersReducer from './reducers/filters-reducers';
import queryReducer from './reducers/query-reducers'


const allReducers = combineReducers({
    books: booksReducer,
    filters: filtersReducer,
    query: queryReducer
});

const store = createStore(
    allReducers,
    window.devToolsExtension && window.devToolsExtension()
);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));