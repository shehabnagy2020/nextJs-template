import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

export default initState => {
  let store = createStore(rootReducer, initState, applyMiddleware(thunk));
  return store;
};
