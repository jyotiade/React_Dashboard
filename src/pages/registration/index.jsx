import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../assests/style/index.css';
// import Sidebar from "../../components/sidebar";
// import Topbar from "../../components/topbar";


const Registration = ({props,props1})=>{

    let navi = useNavigate();

    let[input,setInput] = useState(
        {
            "name":'',
            "email":'',
            "mobile":'',
            "img":'',
            "password":''
        }
    )
    const handleInput = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setInput({...input,[name]:value})
    }
    const reg = ()=>{
        axios.post('http://localhost:4000/registration',input).then(()=>{navi("/")})
    }

    // const loggedin = async ()=>{
    //     props(<Sidebar/>);
    //     props(<Topbar/>);

    //     let data = await axios.get('')

    // }

            // props(false);
            // props1("")
    return(
        <>
        <center>
            <section>
                <div id="log">
                    <h1>Registration Form</h1>
                    <input type="text" name='name' value={input.name} placeholder="Enter username" onChange={handleInput}/><br /><br />

                    <input type="email id" name="email" value={input.email} placeholder="Email id" onChange={handleInput}/><br /><br />

                    <input type="text" name="mobile" value={input.mobile} placeholder="Mobile  Number" onChange={handleInput}/><br /><br />

                    <input type="text" name="img" value={input.img} placeholder="Img url" onChange={handleInput}/><br /><br />

                    <input type="password" name="password" value={input.password} placeholder="password" onChange={handleInput}/><br /><br />
                    
                    <button  onClick={reg}>LOGIN</button>
                </div>
            </section>
        </center>
        </>
    )
}
export default Registration;