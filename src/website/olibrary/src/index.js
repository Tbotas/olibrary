import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from "./routers/AppRouter";
import './styles/Styles.css'
import Store from './Store'

const jsx = (
    <Provider store={Store}>
        <AppRouter/>
    </Provider>
)

//ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
ReactDOM.render(jsx, document.getElementById('root'));