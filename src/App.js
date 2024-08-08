import Sidebar from "./components/sidebar";
import Dashboard from './pages/dashboard/index';
import Product from "./pages/product/index";
import Order from "./pages/order/index";
import Customer from "./pages/customer/index";
import Analytices from "./pages/analytices/index";
import Review from "./pages/reviews/index";
import Setting from "./pages/setting/index";
import Topbar from "./components/topbar/index";
import Login from "./pages/login";
import Registration from "./pages/registration";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {  useState } from "react";
import UpdateForm from "./pages/order/updateform";
function App() {

const [side,setSide] = useState(<Sidebar/>)
const [top,setTop] = useState(<Topbar/>)

// useEffect(()=>{
//   console.Consolelog(aa)
// })
  let a={
    marginLeft:"10px"
  }
  return (
   <>
   <BrowserRouter>
   {/* <Sidebar/>
   <Topbar/> */}
   {side}
   {top}
   <Routes>
   <Route path='/' element={<Login props={setSide} props1={setTop}/>}></Route>
   <Route path='/registration' element={<Registration props={setSide} props1={setTop} />}></Route>
    <Route path='/dashboard/:id' element={<Dashboard  style={a}/>}></Route>
    <Route path='/products' element={<Product  style={a}/>}></Route>
    <Route path='/order' element={<Order  style={a}/>}></Route>
    <Route path='/order/:id' element={<UpdateForm style={a}/>}></Route>
    <Route path='/customers' element={<Customer style={a} props={setSide} props1={setTop} />}></Route>
    <Route path='/analytices' element={<Analytices  style={a}/>}></Route>
    <Route path='/reviews' element={<Review  style={a}/>}></Route>
    <Route path='/settings' element={<Setting style={a}/>}></Route>
    {/* <Route path='/order/:id' element={<UpdateForm style={a}/>}></Route> */}
    
    
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
