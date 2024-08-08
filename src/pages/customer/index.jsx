import axios from "axios";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

const Customer=({props,props1})=> {

    let navi = useNavigate();

    let [input,setInput] = useState({
        "name":'',
        "email":'',
        "money":'',
        "status":'',
        "date":'',
        "month":''
    }
    )
    useEffect(()=>{},[input])

    const handleInput = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setInput({...input,[name]:value})
    }

    const reg = ()=>{
        axios.post('http://localhost:4000/customers',input).then(()=>{alert("submitted")}).then(()=>{setInput({
            "name":'',
            "email":'',
            "money":'',
            "status":'',
            "date":'',
            "month":''
        })}).then(()=>{navi("/order")})
    }
    return (
     <>
          <center>
            <section>
                   
                   <div id='login1'>
                   <h1> Add Form</h1>

                   <input type='text' name='name' value={input.name} placeholder='Enter User Name' onChange={handleInput}></input><br></br>

                   <input type='text' name='email' value={input.email} placeholder='Email ID' onChange={handleInput}></input><br></br>

                   <input type='text' name='money' value={input.money} placeholder='Enter Price' onChange={handleInput}></input><br></br>

                   <select name='status' onChange={handleInput}>
                    <option >select a product status</option>
                    <option value={"booked"}> Booked </option>
                    <option value={"delivered"}> Delivered </option>
                    <option value={"on delivery"}> On delivery</option>
                    </select><br></br>

                   <input type="Datetime-local" name='date' value={input.date} placeholder='Enter Date' onChange={handleInput}/><br></br>

                   <input type="month" name='month' value={input.month} placeholder='Enter Month' onChange={handleInput}/><br></br>

                   <button onClick={reg}> Add customers </button>

                   </div>
            </section>
            </center>
     </>
    );
  }
  
  export default Customer;
  