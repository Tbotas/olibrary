import React from 'react';
import { combineReducers, createStore } from 'redux'
import booksReducer from './reducers/books-reducers'
import bookReducer from './reducers/book-reducers'
import filtersReducer from './reducers/filters-reducers'
import queryReducer from './reducers/query-reducers'

const allReducers = combineReducers({
    books: booksReducer,
    book: bookReducer,
    filters: filtersReducer,
    query: queryReducer,
})

const Store = createStore(
    allReducers,
    window.devToolsExtension && window.devToolsExtension()
)

export default Store