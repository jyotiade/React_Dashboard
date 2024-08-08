import Order from '../order';
import Analytices from '../analytices';

const Dashboard =()=> {

    // let b=localStorage.getItem('email');
    // let c=localStorage.getItem('password');

    // console.log(b)
    return (
     <>

     <div style={{overflow:"scroll",height:"800px"}}>
      <Analytices/>
      <Order/>
     </div>
       {/* {b}{c} */}
     </>
    );
  }
  
  export default Dashboard;
  