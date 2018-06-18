
// fetch list
export function loadMyMovieList(movies) {
    console.log(movies)
    return function (dispatch) {
        dispatch ({
            type: "LOAD_MY_MOVIELIST"
        });
        fetch("/movies")
        .then( (response) => {
        return response.json();
        }).then((movies) => {
        dispatch(myMovieListLoaded(movies));
        });
    };
}

function myMovieListLoaded(movies) {
    return {
        type: "MY_MOVIE_LIST_LOADED",
        value: movies
    };
};

// fetch search
export function loadSearch(searchTerm) {
    return function(dispatch) {
        fetch(`https://api.themoviedb.org/3/search/multi?query=${searchTerm}&api_key=2b04065c81143cf154c3831bda2b71ef`)
        .then( (response) => {
            return response.json();
        }).then((movies) => {
            dispatch (searchLoaded(movies));
        });
    };
};

function searchLoaded(movies) {
    return {
        type: "SEARCH_RESULTS_LOADED",
        value: movies.results
    };
};

// fetch save
export function saveMyMovie(movie) {
    return function(dispatch) {
      fetch("/movies", {
        method:'POST',
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json"
        }
      }).then( function (res) {
        return res.json();
      }).then( function (movies) {
        dispatch(loadMyMovieList(movies));
        // What else could I do here
      });
    };
  };

export function removeMyMovie(id) {
    return function (dispatch) {
        fetch (`/movies/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        }).then( function (res) {
            return res.json();
        }).then( function (movies) {
            dispatch(loadMyMovieList(movies));
        });
    };
}
