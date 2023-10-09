import { COUNTER_ACTION } from "./action-type"

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case COUNTER_ACTION.INCREMENT:
            return state + 1
        case COUNTER_ACTION.DECREMENT:
            return state - 1
        default:
            return state
    }
}

export default counterReducer