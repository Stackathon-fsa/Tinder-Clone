import { createStore, combineReducers, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
// import userReducer from "../redux/user"
import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "../redux/user"



export default configureStore({
  reducer: {
    user: userReducer,
  },
})

// const reducer = combineReducers({
//   user: userReducer,
// })
// const middleware = composeWithDevTools(
//   applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
// )
// const store = createStore(reducer, middleware)

// export default store
// // export * from "./auth"