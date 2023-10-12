import React, { useEffect } from "react"

import { fetchDataSuccess } from "./action"

const FakeStoreComponent = ({ store, dispatch }) => {

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => dispatch(fetchDataSuccess(json)))
    }, [])

    console.log('store', store)
    
    return (
        <div>
            FakeStoreComponent {store.length}
            {store.map((str) => (
                <div>{str.title}</div>
            ))}
        </div>
    )
}

export default FakeStoreComponent