import { useSelector,useDispatch } from "react-redux"
import { counterAction } from "../Store/counterReducer";

const Counter = () => {
    const disptach = useDispatch();
    const counter = useSelector((state) => state.counter.counter);
    const show = useSelector((state) => state.counter.isShow);

    const increaseHandler = () => {
        disptach(counterAction.increase());
    }
    const decreaseHandler = () => {
        disptach(counterAction.decrease())
    }
    const increaseBy5 = () => {
       disptach(counterAction.increaseBy5(10))
    }

    const toggleHandler = () => {
        disptach(counterAction.toggle())
    }


  return (
    <div className='counter-con'>
        <div className='counter'>
            <h2>Redux Counter</h2>
            {
                show && (
                <p> {counter} </p>
                )
            }
            <hr></hr>
            <div className='btn-con'>
                <button onClick={increaseHandler}>Increase</button>
                <button onClick={increaseBy5}>IncreaseBy5</button>
                <button onClick={decreaseHandler}>Decrease</button>
                <button onClick={toggleHandler} >Toggle</button>
            </div>
        </div>
    </div>
  )
}

export default Counter