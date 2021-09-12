import React from "react";
import { useSelector } from "react-redux";
import { Redirect ,useHistory} from "react-router-dom";
import { auth } from "../firebase";
import "./css/home.css" ;
import {useDispatch} from "react-redux";
import {templateCreator} from "../redux/action/templateAction"

let Home = () => {
  let user = useSelector((state) => state.user);
  let dispatch = useDispatch();
  let history = useHistory();
  return (
    <>
      {user ? "" : <Redirect to="./login" />}
      <div className = "template-container">
          <div onClick={()=>{
              dispatch(templateCreator("A"));
              history.push("/personalData");
          }} 
          className = "template">
              
              <img src = "http://localhost:3000/skin1.svg" alt = ""/>
          </div>
          <div onClick={()=>{
              dispatch(templateCreator("B"));
              history.push("/personalData");
          }} 
          className = "template">
              <img src = "http://localhost:3000/skin2.svg" alt = ""/>
          </div>
      </div>

      <button
      className = "btn btn-primary home-logout"
        onClick={(e) => {
            console.log(e);
            // e.preventDefault();
          auth.signOut();
          
        }}
      >
        Logout
      </button>
    </>
  );
};

export default Home;

