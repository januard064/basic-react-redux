import { addArray } from "./action"

const ArrayComponent = ({ arr, dispatch }) => {

    console.log('arr', arr)

    let input

    return (
        <div>
            <div>Array Component</div>


            <div>
                <form onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addArray(arr.length+1, input.value))
                    console.log(input.value)
                    input.value = ''
                }}>
                    <input ref={node => input = node} />
                    <button type="submit">
                        Add Todo
                    </button>
                </form>
            </div>

            {arr.map((array) => (
                <div key={array.id}>{array.name}</div>
            ))}
        </div>
    )
}

export default ArrayComponent