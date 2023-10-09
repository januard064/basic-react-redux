import { ARRAY_ACTION } from "./action"

const dumArray = [
    {
        id: 1,
        name: 'satu'
    }
]

const arrayReducer = (state = dumArray, action) => {
    switch (action.type) {
        case ARRAY_ACTION.ADD_ARRAY:
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name
                }
            ]
        default:
            return state
    }
}

export default arrayReducer