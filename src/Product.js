
import { Link } from "react-router-dom";
function Product(props){
    return(
    <>
        <div className="card" style={{ width: 400 }}>
        <img className="card-img-top" src={props.img1} alt="Card image" />
        <div className="card-body">
          <h4 className="card-title">{props.id}</h4>
          <p className="card-text"></p>
          <p className="card-text">Name : Wolf</p>
          <p className="card-text">Some example text.</p>
          <p className="card-text">Some example text.</p>
          <Link to = {`/product/${props.id}`} className="btn btn-primary">Read more</Link>
            See Details
          
        </div>
      </div>

    </>
    );
}
export default Product;