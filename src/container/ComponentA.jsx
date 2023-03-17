import { Link } from 'react-router-dom'

// redux 使用資料 + 更改方法
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increment, increment5, decrement, increase } from '../actions'

function ComponentA() {
    // redux 使用資料 + 更改方法
    const counter = useSelector((state) => state.counter)
    const namer = useSelector((state) => state.namer)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>ComponentA</h1>
            <div>Counter from Store is :{counter};</div>
            <div>Namer from Store is :{namer};</div>

            {/* dispatch 接收 object 為 argument，{type: (required), value: (not-required)}  */}
            {/* 以下兩個 增加 dispatch() 是等價的。increment() 會回傳 { type: 'INCREMENT' } */}
            <button onClick={() => dispatch(increment())}>增加</button>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>增加</button>

            <button onClick={() => dispatch(increment5())}>增加(一次 + 5)</button>

            <button onClick={() => dispatch(decrement())}>減少</button>
            <button onClick={() => dispatch({ type: 'INCREMENT_name', value: '*' })}>增加(name)</button>
            <button onClick={() => dispatch({ type: 'DECREMENT_name' })}>減少(name)</button>
            <br></br>
            <Link to="/b">Component B</Link>
        </div>
    )
}

export default ComponentA
