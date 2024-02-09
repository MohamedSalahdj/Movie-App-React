import {combineReducers}  from 'redux';
import AddToFavouritReducer from './AddToFavouritReducer';
import DeleteFromFavouritReducer from './DeleteFromFavouritReducer';


export default combineReducers({
    // Add your reducers here.
    combineAdd: AddToFavouritReducer,
    combineDelete: DeleteFromFavouritReducer
})