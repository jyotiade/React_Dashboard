import { Link, Outlet } from "react-router-dom";
import '../../assests/style/index.css'
import { useNavigate } from "react-router-dom";
import { useEffect} from "react";
import { useContext } from "react";
import { StateContext } from "../../utils/createcontext/createcontext";
// import Img from '../../assets/images/login.png'
function Sidebar() {

    // let information = localStorage.getItem('infoimg');
  

    let aaa = localStorage.getItem('infostate');
    let iddd = localStorage.getItem('idstore');
    let {token} = useContext(StateContext)
    let nav = useNavigate()
    useEffect(()=>{
    if(token || aaa){
      console.log("ok")
    }
    else{
      nav("/")
    }
  },[token])

    return (
        <>
            <aside id="sidebar">
                <ul>
                    <li><img style={{borderRadius:"50%"}} src={"https://pics.craiyon.com/2023-07-27/1ebcf187bc3442cf8f87dd7f306288ae.webp"} width={"150px"} height={"150px"} alt="..." /></li>
                    <li><Link to="/" style={{display:"none"}}>Login</Link></li>
                    <li><Link to="/registration" style={{display:"none"}}>Registration</Link></li>
                    <li><Link to={`dashboard/${iddd}`}>Dashboard</Link></li>
                    <li><Link to="/products">Product</Link></li>
                    <li><Link to="/order">Order</Link></li>
                    <li style={{display:"none"}}><Link to="order/:id" >Dashboard</Link></li>
                    <li><Link to="/customers">Customer</Link></li>
                    <li><Link to="/analytices">Analytices</Link></li>
                    <li><Link to="/reviews">Review</Link></li>
                    <li><Link to="/settings">Setting</Link></li>
                </ul>
                <Outlet />
            </aside>
        </>
    );
}

export default Sidebar;
