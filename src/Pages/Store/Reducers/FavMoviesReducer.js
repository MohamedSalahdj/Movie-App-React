

const INITIAL_VALUE = {
    counter : 0,
    moviesId : []
}
export default function favMoviesReducer(state=INITIAL_VALUE, action)
{
    switch(action.type){
        case 'CHANGE_FAV':
            return {
                ...state,
                counter : action.payload.counter,
                moviesId : action.payload.moviesId
            }
        default:
            return state;
    }
}