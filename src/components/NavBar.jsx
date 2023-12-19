import { useDispatch,useSelector } from "react-redux"
import { authAction } from "../Store/authReducer";

const NavBar = () => {
    const dispatch = useDispatch();
    const login = useSelector((state) => state.auth.isLoading);


    const logoutHandler = () => {
       dispatch(authAction.logout());
    }

  return (
    <nav className='nav-con'>
        <div className='nav-bar-con'>
            <h2>Redux Counter</h2>
                <ul>
                    {
                        login && (
                            <>
                             <li>Profile</li>
                            <li>About</li>
                            <li>Contact</li>
                            </>     
                        )
                    }
                   
                    <button className='logout' onClick={logoutHandler}>Logout</button>
                </ul>
            
        
        </div>
    </nav>
  )
}

export default NavBar