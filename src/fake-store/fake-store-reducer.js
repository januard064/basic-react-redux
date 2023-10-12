
import { FETCH_DATA_SUCCESS } from "./action"

const fakeStoreReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            return action.item

        default:
            return state
    }
}

export default fakeStoreReducer