export const FETCH_DATA = "FETCH_DATA"

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'


export const fetchDataSuccess = (item) => {
    return {
        type: FETCH_DATA_SUCCESS,
        item
    }
}