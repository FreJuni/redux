import { useDispatch } from "react-redux"
import { authAction } from "../Store/authReducer";

const Login = () => {
  const dispatch = useDispatch();

    const loginHandler = () => {
      dispatch(authAction.login());
    }

  return (
    <div className='login-con'>
        <button className='login' onClick={loginHandler}>Login to Redux Counter</button>
    </div>
  )
}

export default Login