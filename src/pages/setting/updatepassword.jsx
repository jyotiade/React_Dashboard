import { useState } from "react"
import'../setting/update.css';
import axios from "axios";

const UpdatePassword = () => {

    const [input,setInput] = useState("");
    const id = localStorage.getItem('idstore');
    const afid = parseInt(id);

    const fetchData = async () =>{
              const response = await axios.get("http://localhost:4000/registration");
              const responseData = await response.data;

              const userToUpdate = responseData.find(user => user.id === afid);

              if(userToUpdate){
                 userToUpdate.password = input;

                 await axios.put(`http://localhost:4000/registration/${afid}`,userToUpdate) .then(()=>{alert("updated")});
              }
              else{
                console.log(`User with ID ${id} not found`);
              };
    }
    return(
        <>
        <center>
         <div id="u1">
        <input type="text"  placeholder="enter password" value={input} onChange={(e)=>setInput(e.target.value)}/>
           <button onClick={fetchData}>Update Password</button>
           </div>
           </center>
        </>
    );
}

export default UpdatePassword;