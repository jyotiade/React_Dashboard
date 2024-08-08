


const Topbar=() =>{

    let infoname = localStorage.getItem('infoname');
    let infoemail = localStorage.getItem('infoemail');

    return (
     <>
         <center id="top">
            <aside style={{float:"top",fontSize:"50px",backgroundColor:"rgb(14, 71, 101)",color:"white",display:"flex",justifyContent:"center",padding:"20px" }}>
            <div style={{fontSize:"50px",color:'white',marginLeft:"300px",marginTop:"30px",marginBottom:"20px",marginRight:"200px",paddingRight:"100px"}}>Admin Dashboard</div>
            <div>
           <span style={{fontSize:"20px",color:'white'}}>{infoemail}</span><br />
           <div style={{fontSize:"20px",color:'white'}}>{infoname}</div>
            {/* <span style={{fontSize:"20px",color:'white'}}>{infoname}</span> */}
            </div>
            </aside>
         </center>
     </>
    );
  }
  
  export default Topbar;
  