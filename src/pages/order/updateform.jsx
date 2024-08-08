import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateForm = ()=>{
    let {id} = useParams();

    let navi = useNavigate();

    let [input,setInput] = useState({
        "name":'',
        "email":'',
        "money":'',
        "status":'',
        "date":'', 
        "month":''
       })

       useEffect(()=>{},[input])

       const handleInput = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setInput({...input,[name]:value})
       }

    const reg =()=>{
        axios.put(`http://localhost:4000/customers/${id}`,input).then(()=>{alert("submitted")}).then(()=>{setInput({
            "name":'',
            "email":'',
            "money":'',
            "status":'',
            "date":'',
            "month":''
        })}).then(()=>{navi("/order")})
    }
    return(
        <>
        <center>
            <section>
                <div id="login1">
                    <h1>Update form</h1>
                    <input type="text" name="name" value={input.name} placeholder="enter username" onChange={handleInput} /><br /><br />
                    <input type="text" name="email" value={input.email} placeholder="enter emailid" onChange={handleInput} /><br /><br />
                    <input type="text" name="money" value={input.money} placeholder="enter price" onChange={handleInput} /><br /><br />

                    <select name="status" onChange={handleInput}>
                        <option >select a product status</option>
                        <option value={"booked"}>Booked</option>
                        <option value={"delivered"}>delivered</option>
                        <option value={"on delivery"}>on delivery</option>
                    </select><br /><br />

                    <input type="Datetime-local" name="date" value={input.date} placeholder="enter date" onChange={handleInput}/><br /><br />
                    <input type="month" name='month' value={input.month} placeholder='Enter Month' onChange={handleInput}/><br></br>

                   <button onClick={reg}> Update Details </button>

                </div>
            </section>
        </center>
        </>
    )
}
export default UpdateForm;