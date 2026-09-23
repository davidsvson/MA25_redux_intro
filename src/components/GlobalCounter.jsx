import { useDispatch, useSelector } from "react-redux"
import { increase, increaseBy } from "../features/counterSlice";
import { addItem } from "../features/cartSlice";



function GlobalCounter() {

    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);

    return (
        <>
            {count}
            <button onClick={() => dispatch(increase())}>+</button>
            <button onClick={() => dispatch(increaseBy(10))}>Öka med 10</button>
            <button onClick={() => dispatch(increaseBy(100))}>Öka med 100</button>
            <button onClick={() => dispatch(addItem({id: 11, name: 'Äpple', price: 7}))} >
                Add apple
            </button>
        </>
    )
}

export default GlobalCounter;