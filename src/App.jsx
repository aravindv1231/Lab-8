import { useState } from "react";
import UserContext from "./context/UserContext";
import Navbar from "./components/Navbar";
import LoginButton from "./components/LoginButton";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (

    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>

      <h1>React Context Example</h1>

      <Navbar />

      <LoginButton />

    </UserContext.Provider>

  );
}

export default App;