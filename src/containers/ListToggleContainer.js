import { connect } from "react-redux";
import ListToggle from "../components/ListToggle";
import { saveMyMovie, removeMyMovie } from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    saveMyMovie: function (save) {
      dispatch(saveMyMovie(save));
    },
    removeMyMovie: function (remove) {
        dispatch(removeMyMovie(remove));
    },
  };
}

export default connect(null,mapDispatchToProps)(ListToggle);