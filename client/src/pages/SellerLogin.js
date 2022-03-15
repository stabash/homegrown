import React, { useState } from 'react';

const blank = {
    username: '',
    password: ''
};

const SellerLogin = (props) => {
    const [formData, setFormData] = useState(blank);

    function handleSubmit(event) {
      event.preventDefault();
      props.sellerLogInCb(formData.username, formData.password);
      if (props.loginError) {console.log(props.loginError)} // add MUI alerts here
      setFormData(blank);
    }
  
    function handleChange(event) {
      let { name, value } = event.target;
      setFormData(data => ({
        ...data,
        [name]: value
      }));
    }
  
    return (
      <div>
      <h1>Seller Log In</h1>
     <div className="UserLogin row">
     <div className="col-4 offset-4"></div>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          </div>
            <label className="form-label">Username</label>
              <input
              type="text"
              name="username"
              required
              value={formData.username}
              className="form-control"
              onChange={handleChange}
              />
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="form-control"
              />
            </div>
  
            <div>
              <button type="submit" className="btn btn-primary">Log In</button>
            </div>
        </form>
        <div>
          <br></br>
          <h3>Not got an account?</h3>
        <a className="btn btn-primary" href="/seller-signup" role="button">Create Account</a>
            </div>
     </div>
     </div>
  )
}

export default SellerLogin;