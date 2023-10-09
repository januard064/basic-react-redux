
import { connect } from "react-redux";
import ArrayComponent from "./array-component";

const mapStateToProps = (state) => {
    return {
        arr: state.arrayReducer
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return{
//         addArray: () => dispatch()
//     }
// }

export const ArrayContainer = connect(mapStateToProps)(ArrayComponent)