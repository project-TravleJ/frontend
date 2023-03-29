import rootReducer from './modules';
import {composeWithDevTools} from 'redux-devtools-extension';
import { legacy_createStore as createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';

const enhancer =
    process.env.NODE_ENV === "production"
        ? compose(applyMiddleware())
        : composeWithDevTools(applyMiddleware(logger));



const store = createStore(
    rootReducer
    , enhancer
);

export default store;


