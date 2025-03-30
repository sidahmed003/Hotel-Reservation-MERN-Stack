import "./login.css"
import { AuthContext } from "../../context/AuthContext"
import { useContext, useState } from "react";
import axios from "axios";

const Login = () => {
    const [ credentials, setCredentials ] = useState({
        username: undefined,
        password: undefined, 
    });

    const { user, loading, error, dispatch } = useContext(AuthContext);

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async e => {
        e.preventDefault();
        dispatch({type: "LOGIN_START"});
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", credentials, { withCredentials: true });
            dispatch({type: "LOGIN_SUCCESS", payload: res.data});
        } catch(err) {
            dispatch({type: "LOGIN_FAILURE", payload: err.response.data});
        }
    };

    console.log(user);

  return (
    <div className="login">
        <div className="lContainer">
            <input type="text" placeholder="username" id="username" onChange={handleChange} className="lInput" />
            <input type="password" placeholder="password" id="password" onChange={handleChange} className="lInput" />
            <button onClick={handleClick} className="lButton">Login</button>
            {error && <span>{typeof error === "string" ? error : error.message}</span>}
        </div>
    </div>
  )
}

export default Login