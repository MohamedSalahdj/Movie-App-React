import {createStore} from "redux"
import { composeWithDevTools } from "redux-devtools-extension" 
import AddToFavouritReducer from "./Reducers/AddToFavouritReducer"
import reducers from "./Reducers/combineReducers";

const projectStore = createStore(AddToFavouritReducer, composeWithDevTools())

export default projectStore