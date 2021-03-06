//LOAD MOVIE LIST
export function loadMyMovieList() {
    return function (dispatch) {
        dispatch({
            type: "LOAD_MY_MOVIE_LIST"
        })
        fetch("/movies")
        .then( (response) => {
            return response.json();
        }).then((movies) => {
            dispatch(myMovieListLoaded(movies));
        });
    };
}
export function myMovieListLoaded(movies) {
    return {
        type: "MY_MOVIE_LIST_LOADED",
        value: movies
    };
}



//LOAD SEARCH
export function loadSearch(searchTerm){
    return function(dispatch) {
        dispatch({
            type: "LOAD_SEARCH"
        })
        fetch(`https://api.themoviedb.org/3/search/multi?query=${searchTerm}&api_key=71565e79761b6008eb199453b28d45b8`) //SINGLE QUOTES REQUIRED HERE, NOT DOUBLE
        .then( (response) => {
            return response.json();
        })
        .then((movies) => {
            dispatch(searchLoaded(movies));
        });
    };
}
export function searchLoaded(movies) {
    return {
        type: "SEARCH_RESULTS_LOADED",
        value: movies.results //ARRAY OF MOVIES FROM DB
    };
}


//CREATE MY MOVIES
export function saveMyMovie(movie) {
    return function(dispatch) {
        fetch("/movies", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(movie)
        })
        .then( (response) => {
            dispatch(loadMyMovieList());
        });
    }
}

//REMOVE MOVIE
export function removeMyMovie(id) {
    return function(dispatch) {
        fetch("/movies/" + id, { 
            method: "DELETE"
        })
        .then( (response) => {
            dispatch(loadMyMovieList());
        });
    }
}