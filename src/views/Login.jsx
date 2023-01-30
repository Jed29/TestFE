import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import  {setUsernames}  from '../store/features/userSlices'
export default function Login() {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.User.user);
  const Auth = useSelector(state => state.User.auth);

  // console.log(Auth, "zzz")
  let [username, setUsername] = useState("")
  // console.log(userName,"swiewio", username)
  let [enablePassword, setEnablePassword] = useState(false)
  let [password, setPassword] = useState ("")
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  let navigate = useNavigate()

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setUsernameError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  const togglePasswordVisibility = (event) => {
    event.preventDefault()
    setEnablePassword(!enablePassword)
 
  };

  const validasi = () => {
    if (!username) {
      setUsernameError("Name is required !!");
      return false;
    }
    if (username.length < 3 || username.length > 30) {
      setUsernameError("Name must be between 3 and 30 characters");
      return false;
    }
    if (!password) {
      setPasswordError("Password is required");
      return false;
    }
    if (password.length < 3 || password.length > 10) {
      setPasswordError("Password must be between 3 and 10 characters");
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one capital letter");
      return false;
    }
    return true;
  };


  const handleSubmit = (event)=>{
    event.preventDefault()
    if (!validasi()) {
      return;
    }

    dispatch(setUsernames(username));
    localStorage.setItem('login', true)

    setTimeout(() => {
      Swal.fire(
        'Login Success',
        'You clicked the button!',
        'success'
      )
    }, 200);

    navigate("/");

  }
  return (
      <div className="w-full">
        <form onSubmit={handleSubmit} className="bg-white px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input type="text" id="username" value={username} onChange={handleUsernameChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Username"/>
            {usernameError && 
            <div class="font-thick text-md mb-2 text-red-600">{usernameError}</div>
            }
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input type={enablePassword ? "text" : "password"} id="password" value={password}  onChange={handlePasswordChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="******************"/>
            {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
            <button onClick={togglePasswordVisibility}>Show Password</button>
            {passwordError && 
            <div class="font-thick text-md mb-2 text-red-600">{passwordError}</div>
            // console.log(passwordError)
            }
          </div>
          <div className="flex items-center justify-between">
            <button type='submit' disabled={!username || !password} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Sign In
            </button>
          </div>
        </form>
      </div>

  )
}
