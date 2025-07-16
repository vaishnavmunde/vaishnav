import {Link,useNavigate, useParams} from "react-router-dom"
import { useApi } from "../hooks/useApi";
function Productdetails(){
    
     const navigate = useNavigate();  
    const params = useParams();
        console.log(params);
        console.log(params.id);
       const{products:prod} = useApi(`http://localhost:3000/product/${params.id}`);
       console.log(prod);
    return(
    <>

        <p>Product Detail</p>
        <div className="card" style={{width:400}}></div>
       <p style={{textAlign:"center", fontWeight:"bolder",fontSize:30, color:"Green"}}></p>
        <div className="card" style={{ width: 400 }}>
            <img className="card-img-top" src={prod.img1} alt="Card image" />
            <div className="card-body">
                <h4 className="card-title">{prod.name}</h4>
                <h6 className="card-title">Rs: {prod.price}</h6>
                <p className="card-text">{prod.description}</p>
                <Link to="" style={{height:50,textAlign:"center"}} className="btn btn-primary">Add To Cart</Link>
                <button className="btn btn-success"
                onClick={()=>{
                  setTimeout(() => {
                    navigate("/product")
                  }, 2000);  
                }}
                >Goback</button>
            </div>
        </div>
    </>
    );   
}
export default Product1;