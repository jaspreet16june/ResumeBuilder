import { BrowserRouter as Router,Switch,Route } from "react-router-dom"
import { auth ,firestore } from "./firebase";
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Login from "./components/login"
import Signup from "./components/signup"
import { useEffect} from "react";
import { useDispatch } from "react-redux";
import { userCreator } from "./redux/action/userAction";
import Personal from "./components/personalData"
let App=()=> {

  let dispatch = useDispatch()

  useEffect(()=>{

    let unsub = auth.onAuthStateChanged(async (user)=>{
      if(user){
        dispatch(userCreator(user));

        let {uid,email} = user; // destructuring of objectc
        let docRef = firestore.collection("user").doc(uid);
        let doc = await docRef.get(); //exists
        
        if(!doc.exists){
          docRef.set({
            email,
          })
      }
    }
    })
    return ()=>{
      unsub();
    }
  },[])   
  return(
   <>
  <Router>
    <Navbar/>
    <Switch>
    <Route path ="/personalData">
        <Personal/>
      </Route>
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
