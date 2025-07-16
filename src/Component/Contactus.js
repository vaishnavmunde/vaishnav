import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Contactus() {
  const [formdata, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    address: '',
    country: '',
    subscribe: false
  });

  let[errors, setErrors] = useState({});

  
  const onhandlesubmit = (event) => {
    event.preventDefault();
    console.log(formdata);

     
    setErrors({});
    if(formdata.fname === '' || formdata.fname === null || formdata.fname){
        setErrors({
            err1:"First Name cannot be blank or null"
        })
    }
   else if(formdata.lname === '' || formdata.lname === null){
        setErrors({
            err2:"Last Name cannot be blank or null"
        })
    }
     else if(formdata.email === '' || formdata.email === null){
        setErrors({
            err3:"Email Name cannot be blank or null"
        })
    }
    else if(formdata.password.length < 5){
        setErrors({
            err4:"Password length should be greater than 5"
        })
    }

  };

  const onchangehandler = (event) => {
    
    setFormData({
      ...formdata,
      [event.target.name]: event.target.type === 'checkbox'  ? event.target.checked : event.target.value
    });
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Contact Us</h3>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={onhandlesubmit} className="shadow p-4 rounded bg-light">
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                name="fname"
                value={formdata.fname}
                onChange={onchangehandler}
                placeholder="Enter First Name"
              /><h6 style={{color:"red"}}>{errors && <span>{errors.err1}</span>}</h6>
            </div>

            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lname"
                value={formdata.lname}
                onChange={onchangehandler}
                placeholder="Enter Last Name"
              /><h6 style={{color:"red"}}>{errors && <span>{errors.err2}</span>}</h6>
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formdata.email}
                onChange={onchangehandler}
                placeholder="Enter Email"
              /><h6 style={{color:"red"}}>{errors && <span>{errors.err3}</span>}</h6>
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formdata.password}
                onChange={onchangehandler}
                placeholder="Enter Password"
              /><h6 style={{color:"red"}}>{errors && <span>{errors.err4}</span>}</h6>
            </div>

            <div className="mb-3">
              <label className="form-label">Address</label>
              <textarea
                className="form-control"
                rows={3}
                name="address"
                value={formdata.address}
                onChange={onchangehandler}
                placeholder="Enter Address"
              /><h6 style={{color:"red"}}>{errors && <span>{errors.err5}</span>}</h6>
            </div>

            <div className="mb-3">
              <label className="form-label">Country</label>
              <select
                className="form-select"
                name="country"
                value={formdata.country}
                onChange={onchangehandler}
              >
                <option value="">-- Select Country --</option>
                <option value="USA">USA</option>
                <option value="India">India</option>
                <option value="Japan">Japan</option>
                <option value="Canada">Canada</option>
              </select>
            </div>

            <div className="form-check mb-4">
              <input
                type="checkbox"
                className="form-check-input"
                name="subscribe"
                checked={formdata.subscribe}
                onChange={onchangehandler}
                id="subscribe"
              />
              <label className="form-check-label" htmlFor="subscribe">
                Subscribe 
              </label>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>

          <p className="mt-3 text-center">{JSON.stringify(formdata)}</p>
        </div>
        {/* <div className="col-md-6"> */}
            
        {/* </div> */}
      </div>
    </div>
  );
}

export default Contactus;