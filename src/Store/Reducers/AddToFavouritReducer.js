const INITIAL_STATE = {
    moviesFavouritList : []
}

export default function AddToFavouritReducer(state=INITIAL_STATE, action){

    switch(action.type){
        case 'ADD_TO_FAV' : 
        if (!state.moviesFavouritList.includes(action.payload)) {
            return {
                ...state,
                moviesFavouritList: [...state.moviesFavouritList, action.payload],
            };
        }
        return state;
            default :
                return state;
    }
}