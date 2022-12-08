import { Link } from 'react-router-dom'

// redux
import { useSelector } from "react-redux";

function ComponentB() {
    const counter = useSelector(state => state.counter);
    const namer = useSelector(state => state.namer);

    return (
        <div>
            <h1>ComponentB</h1>
            <div>
                Counter from Store is :{counter};
            </div>
            <div>
                Namer from Store is :{namer};
            </div>
            <br></br>
            <Link to='/a'>Component A</Link>
        </div>
    )
}

export default ComponentB
