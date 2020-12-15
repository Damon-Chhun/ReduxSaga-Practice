import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSageMiddleware from "redux-saga";

import { incrementSaga } from "./card/card.saga";

import logger from "redux-logger";
import rootReducer from "./root-reducer";

const sagaMiddleware = createSageMiddleware();

const middlewares = [logger, sagaMiddleware];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(incrementSaga);
