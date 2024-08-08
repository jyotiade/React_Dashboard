// import axios from "axios";
// import { useEffect, useState } from "react";
import { CiDollar } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { RiHandbagLine } from "react-icons/ri";
import '../../assests/style/index.css';


function Analytices() {
    return (
     <>
              <div style={{overflowY:"scroll",height:"700px"}}>

<section id="product">
 <div>
   <ul>
      <li style={{fontSize:"64px",backgroundColor:"white",color:"red"}}><CiDollar /></li>
     <li>Total Sales<br/>{"0"}</li>
   </ul>
 </div>
 <div>
   <ul>
   <li style={{fontSize:"64px",backgroundColor:"white",color:"red"}}><CiShoppingCart /></li>
     <li>Total Orders<br/>{"5"}</li>
   </ul>
 </div>
 <div>
 <ul>
 <li style={{fontSize:"64px",backgroundColor:"white",color:"red"}}>< RiHandbagLine /></li>
     <li>Total Products<br/>{"20"}</li>
   </ul>
 </div>
</section>

<section id="charts">
  <ul>
   <li style={{backgroundColor:"rgb(83, 198, 211)",height:"25px",border:"2px solid black"  }}></li>
   <li style={{backgroundColor:"rgb(83, 198, 211)",height:"100px",border:"2px solid black"}}></li>
   <li style={{backgroundColor:"rgb(83, 198, 211)",height:"150px",border:"2px solid black"}}></li>
   <li style={{backgroundColor:"rgb(83, 198, 211)",height:"50px",border:"2px solid black"}}></li>
   <li style={{backgroundColor:"rgb(83, 198, 211)",height:"120px",border:"2px solid black"}}></li>
   <li style={{backgroundColor:"rgb(83, 198, 211)",height:"25px",border:"2px solid black"}}></li>
   <li style={{backgroundColor:"rgb(83, 198, 211)",height:"50px",border:"2px solid black"}}></li>
   <li style={{backgroundColor:"rgb(83, 198, 211)",height:"100px",border:"2px solid black"}}></li>
   <li style={{backgroundColor:"rgb(83, 198, 211)",height:"150px",border:"2px solid black"}}></li>
   <li style={{backgroundColor:"rgb(83, 198, 211)",height:"120px",border:"2px solid black"}}></li>
   <li style={{backgroundColor:"rgb(83, 198, 211)",height:"150px",border:"2px solid black"}}></li>
   <li style={{backgroundColor:"rgb(83, 198, 211)",height:"120px",border:"2px solid black"}}></li>
  </ul>
</section>
<center><section style={{height:"20px",width:"1150px",backgroundColor:"rgb(83, 198, 211)",marginLeft:"230px",paddingLeft:"50px",color:"black"}}>

Jan&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Feb&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
Mar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Apr&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
May&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Jun&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Jul&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Aug&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Sep&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Oct&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Nov&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Dec&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</section></center>
<center><h1> Revenue per month </h1></center>

</div>
     </>
    );
  }
  
  export default Analytices;
  