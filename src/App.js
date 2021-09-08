import { BrowserRouter as Router,Switch,Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Login from "./components/login"
import Signup from "./components/signup"

let App=()=> {
 return(
   <>
  <Router>
    <Navbar/>
    <Switch>
      <Route path ="/login">
        <Login/>
      </Route>
    <Route path ="/signup">
      <Signup/>
    </Route>
    <Route path ="/Home">
      <Home/>

    </Route>
    </Switch>
  </Router>

  </>
   )
}

export default App;
