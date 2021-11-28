import { Outlet } from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react"

import {Login} from "./components/Login"


function App() {
  
  const {isAuthenticated} = useAuth0 ()


  return (
    <div> 
      <div>
        {isAuthenticated?(
        <Outlet />
        ): <Login />      
        }
      </div>

    </div>
  );
}

export default App;
