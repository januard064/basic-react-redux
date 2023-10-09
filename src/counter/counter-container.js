import { connect } from "react-redux";
import CounterComponent from "./counter-component";

import { COUNTER_ACTION } from "./action-type";

const mapStateToProps = (state) => ({
    count: state.counterReducer
})

const mapDispatchToProps = (dispatch) => {
    return {
        handleIncrement: () => dispatch({ type: COUNTER_ACTION.INCREMENT }),
        handleDecrement: () => dispatch({ type: COUNTER_ACTION.DECREMENT })
    }
}


export const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(CounterComponent)