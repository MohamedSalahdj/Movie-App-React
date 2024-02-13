

export const changeFavorites = (counter, moviesId)=> {
    return {
        type: 'CHANGE_FAV',
        payload : {counter, moviesId}
    }

}