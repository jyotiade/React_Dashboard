import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Link } from "react-router-dom";

const Order=()=> {

      const navi = useNavigate();
      const [customersData,setCustomersData]= useState([]);
      const[afterdel,setAfterdel] = useState(false);

      useEffect(()=>{

      },[afterdel])

      useEffect(()=>{
        const showdata = async()=>{
            const data = await axios.get('http://localhost:4000/customers');
            const response = await data.data;
            setCustomersData(response);
        }
        showdata()
      },[])

      const del = (arg)=>{
        alert(arg)
        axios.delete(`http://localhost:4000/customers/${arg}`).then(()=>{setAfterdel(true)});
        const showdata = async()=>{
            const data = await axios.get('http://localhost:4000/customers');
            const response = await data.data;
            setCustomersData(response);
        }
        showdata()
      }

  return (
     <>
    
      <h1 style={{marginLeft:"300px",paddingTop:"200px",marginTop:"0px"}}>LATEST ORDERS</h1>
       <button onClick={()=>{ navi("/customers")}} style={{float:"right",marginRight:"120px"}}>Add Orders</button>
       <table align="center" cellPadding={"20px"} border={"2px"} id="order">
      
          {customersData.map((e)=>{
            return <tr style={{display:"flex"}} key={e.id}>
                <td style={{width:"170px",backgroundColor:" rgb(83, 198, 211)"}}>{e.name}</td>
                <td style={{width:"170px", backgroundColor:" rgb(83, 198, 211)"}}>{e.email}</td>
                <td style={{width:"170px",backgroundColor:" rgb(83, 198, 211)"}}>{e.money}</td>
                <td style={{width:"170px",backgroundColor:" rgb(83, 198, 211)"}}>{e.status}</td>
                <td style={{width:"170px",backgroundColor:" rgb(83, 198, 211)"}}>{e.date}</td>
                <td><Link to={`/order/${e.id}`}>Update</Link></td>
                <td onClick={()=>{del(e.id)}}>Delete</td>
            </tr>
          })}
          
       </table>
      
     </>
    );
  }
  
  export default Order;
  
  