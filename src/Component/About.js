import { useRef, useState } from "react";

function About(){

    // const username = useRef();

    const onhandlesubmit =(event)=>{
        event.preventDefault();
            // console.log(username); // object of input 
            // console.log(username.current.value); // actual data of input field which is stores in (Object.Current.Value)
            console.log(username);
        }

    const[username,setUsername] = useState("");

    const onhandlechange=(event)=>{
        setUsername(event.target.value);

    }

    return(<>
        <p style={{textAlign:"center"}}>About us</p>
        <div className="card" style={{width:800, height:200, boxShadow:'2px 2px 10px',display:"flex", justifyContent:"center",alignItems:"center", marginLeft:550}}>
        <form onSubmit={onhandlesubmit}>
             <label className="form-label" style={{marginLeft:10,display:"flex",justifyContent:"center"}} >Email address</label>
            <input type="text" name="username" value={username} onChange={onhandlechange}  className="form-control"  style={{width:500,marginLeft:10}} id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div style={{display:"flex", justifyContent:"center"}}>
            <button type="submit"   className="btn btn-dark" style={{height:40}}>Submit</button>
        </div>
        </form>
        </div>

        
        </>
    );
}
export default About;