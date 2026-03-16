import { useContext } from "react";
import UserContext from "../context/UserContext";

function Navbar() {

  const { isLoggedIn } = useContext(UserContext);

  return (
    <div>

      <h2>Navbar</h2>

      {isLoggedIn ? <p>User Logged In</p> : <p>User Logged Out</p>}

    </div>
  );
}

export default Navbar;