import { connect } from "react-redux";
import App from "../App";
import { loadMyMovieList } from "../actions";

function msp(state) {
  return {
    searchResults: state.searchResults,
    myMovieList: state.myMovieList
  };
}

function mdp(dispatch) {
  return {
    loadMyMovieList: function (load) { 
      dispatch(loadMyMovieList(load));
    },
  };
}
let AppContainer = connect(msp,mdp)(App);
// export default connect(null,mapDispatchToProps)(SearchBox);

export default AppContainer;