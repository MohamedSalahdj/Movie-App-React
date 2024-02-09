// DeleteFromFavouritReducer.js
const INITIAL_VALUE = {
    fav: "DELETEFROM",
    moviesFavouritList: [],
};

export default function DeleteFromFavouritReducer(state = INITIAL_VALUE, action) {
    switch (action.type) {
        case 'DELETE_FROM_FAV':
            return {
                ...state,
                // Filter out the item to be deleted
                moviesFavouritList: state.moviesFavouritList.filter(id => id !== action.payload),
            };
        default:
            return state;
    }
}
