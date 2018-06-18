import { combineReducers } from "redux";

// myMovieList
function myMovieList(state = [], action) {
    if(action.type === "MY_MOVIE_LIST_LOADED") {
        return action.value;
    }
    return state;
}

// searchResults
function searchResults(state =[], action) {
    if(action.type === "SEARCH_RESULTS_LOADED") {
        return action.value;
    }
    return state;
}




const reducers = combineReducers({
    myMovieList, searchResults
  });
  export default reducers;