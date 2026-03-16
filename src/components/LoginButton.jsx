import { useContext } from "react";
import UserContext from "../context/UserContext";

function LoginButton() {

  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  return (

    <button onClick={() => setIsLoggedIn(!isLoggedIn)}>

      {isLoggedIn ? "Logout" : "Login"}

    </button>

  );
}

export default LoginButton;