import React, { useState } from 'react';

const blank = {
    username: '',
    password: ''
};

const UserLogin = (props) => {
    const [formData, setFormData] = useState(blank);

    function handleSubmit(event) {
      event.preventDefault();
      props.userLogInCb(formData.username, formData.password);
      if (props.loginError) {console.log(props.loginError)}
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
      <h1>User Log In</h1>
     <div className="row">
     <div className="offset-md-2 col-md-8 offset-lg-3 col-lg-6"></div>
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
        <a className="btn btn-primary" href="/user-signup" role="button">Create Account</a>
            </div>
     </div>
     </div>
  )
}

export default UserLogin;