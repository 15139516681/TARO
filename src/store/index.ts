import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunkMiddleware from "redux-thunk"
import { createLogger } from "redux-logger"
import dj from "./logger"

const reduce = combineReducers({
  dj,
})

const composerEnhancers =
  typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const middlewares = [thunkMiddleware]
if (process.env.NODE_ENV === "development") {
  middlewares.push(createLogger())
}
const enhancer = composerEnhancers(applyMiddleware(...middlewares))
export default function configStore() {
  return createStore<any, any, any, any>(reduce, enhancer)
}
