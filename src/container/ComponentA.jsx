import { Link } from 'react-router-dom'

// redux 使用資料 + 更改方法
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement, increase } from "../actions";

function ComponentA() {
    // redux 使用資料 + 更改方法
    const counter = useSelector(state => state.counter);
    const namer = useSelector(state => state.namer);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>ComponentA</h1>
            <div>
                Counter from Store is :{counter};
            </div>
            <div>
                Namer from Store is :{namer};
            </div>
            <button onClick={() => dispatch(increment())}>增加</button>
            <button onClick={() => dispatch(decrement())}>減少</button>
            <button onClick={() => dispatch({ type: "INCREMENT_name", value: '*' })}>增加(name)</button>
            <button onClick={() => dispatch({ type: "DECREMENT_name" })}>減少(name)</button>
            <br></br>
            <Link to='/b'>Component B</Link>
        </div>
    )
}

export default ComponentA
