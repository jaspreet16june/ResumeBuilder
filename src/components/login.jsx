import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

let Login = () => {
   let history = useHistory()
   let [email,setEmail] = useState("");
   let[password,setPassword]  =useState("");
   let user = useSelector((state) => state);
  return (
    <>
    
    {user ? <Redirect to = "/Home" />: ""}
      <div className="row">
        <div className="col-4 offset-4">
          <h1 className="mt-4 mb-4">Login</h1>
          <form className="mt-4">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                value ={email}
                onChange={(e)=>{
                  setEmail(e.currentTarget.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e)=>{
                  setPassword(e.currentTarget.value);
                }}
              />
            </div>

            <button className="btn btn-primary"
              onClick = {(e)=>{
                e.preventDefault();
                auth.signInWithEmailAndPassword(email,password);
              }}
            >Login</button>
            <br />
            <br />
            <button onClick={()=>{
                history.push("/signup")
            }} className="btn btn-primary">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;