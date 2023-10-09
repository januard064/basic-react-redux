export const ARRAY_ACTION = {
    ADD_ARRAY: "ADD_ARRAY"
}


export const addArray = (id, name) => ({
    type: ARRAY_ACTION.ADD_ARRAY,
    id,
    name
})