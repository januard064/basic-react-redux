const CounterComponent = ({ count, store, handleIncrement, handleDecrement }) => {
    console.log(count)

    return (
        <div>
            <div>Counter - state</div>
            <div>contt {count}</div>
            <div>{store.length}</div>

            <div style={{ display: 'flex' }}>
                <button onClick={handleIncrement}>increment</button>
                <button onClick={handleDecrement}>decrement</button>

            </div>
        </div>
    )
}

export default CounterComponent