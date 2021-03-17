import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { ChakraProvider } from "@chakra-ui/react"
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;
const store= createStore(reducers,composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
    <Provider store= {store}>
        <ChakraProvider>
        <App />
        </ChakraProvider>
    </Provider>,
    document.querySelector('#root')
);