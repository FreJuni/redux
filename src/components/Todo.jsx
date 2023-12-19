
import { useDispatch,useSelector } from "react-redux";
import { getToDo } from "../Store/Reducer/todo";

const Todo = () => {
    const dispatch = useDispatch();
    const todo = useSelector((state) => state.todo.data);

    const todoHandler = () => {
      dispatch(getToDo());
      console.log(todo);
    }


  return (
    <div>
        <button className='nav-con' onClick={todoHandler} >Go to do</button>
    </div>
  )
}

export default Todo