import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UpdatePassword from "./updatepassword";


function Setting() {

 const [passup,setPassup]= useState(false)

 const navi = useNavigate();

 const logout = ()=>{
    navi("/")
 }
 const ppp = ()=>{
    setPassup(<UpdatePassword/>)
 }

    return (
     <>
       <button onClick={logout} style={{backgroundColor:" rgb(83, 198, 211)",marginTop:"300px",marginLeft:"350px"}}>logout</button> 

       <button onClick={ppp} style={{backgroundColor:" rgb(83, 198, 211)",marginTop:"300px",marginLeft:"300px"}}>Update password</button>
     {passup} 
     </>
    );
  }
  
  export default Setting;
  
  