import '../../assests/style/index.css';
// import Img from '../../assests/image/light.jpg'
import Sidebar  from '../../components/sidebar';
import Topbar from '../../components/topbar';
import { useNavigate } from 'react-router-dom';
import { useContext,useState } from 'react';
import axios from 'axios';
import {StateContext} from  '../../utils/createcontext/createcontext';

// import { useParams } from 'react-router-dom';

const Login = ({props,props1})=>{
    const {setToken} = useContext(StateContext);
    localStorage.removeItem('infodata');
    localStorage.removeItem('infostate');

    let navi = useNavigate();


         props(false);
         props1(false);
       // let userid = useParams()
         let[input,setInput] = useState(
            {
                "email":'',
                "password":''
            }
         )

         const handleInput = (e)=>{
            let name = e.target.name;
            let value = e.target.value;
            setInput({...input,[name]:value})
         }



//    let a={
//     "email":"jyoti1212@gmail.com",
//     "password":"1212",
//     "id":1
//    }

   const loggedin= async () =>{

    let data = await axios.get('http://localhost:4000/registration');
    let response = await data.data;

    let info = response.find(e=> e.email === input.email && e.password === input.password)
    // if(a.email === "jyoti1212@gmail.com" && a.password === '1212')
    // alert(info.name)
   if(info) {
    setToken(true);
    localStorage.setItem('infoimg',info.img)
    localStorage.setItem('infoemail',info.email)
    localStorage.setItem('infoname',info.name)
    localStorage.setItem('idstore',info.id)
       
        props(<Sidebar/>);
        props1(<Topbar/>);
        navi(`/dashboard/${info.id}`);
    }
    else{
        navi("/")
    }
   }

    return(
        <>
        <center>
            <section>
                <img src='https://st.depositphotos.com/67903508/58169/i/450/depositphotos_581698130-stock-photo-beautiful-color-light-blue-abstract.jpg' style={{width:"100%",height:"100vh"}} alt="" ></img>
                {/* <img src="" style={{width:"100%",height:"100vh",backgroundColor:" rgb(11, 123, 163)"}}  alt="" /> */}
                <div id="login">
                <h1>LOGIN PAGE</h1>
                <input type="text" name='email' value={input.email} placeholder="Email Id"  onChange={handleInput}/> <br /><br />
                <input type="password" name='password' value={input.password} placeholder="Enter Password"  onChange={handleInput}/> <br /><br />

                <button onClick={loggedin}>LOGIN</button>

                <div style={{color:"white",textDecoration:"underline",cursor:"pointer"}} onClick={()=>{navi("/registration")}}>SIGNUP</div>
                </div>
            </section>
        </center>
        </>
    )
}
export default Login;