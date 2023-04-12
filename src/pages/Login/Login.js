import React from 'react';
import logo from '../../assets/images/login/login.svg'

const Login = () => {
    const handleLoign = event =>{
        event.preventDefault();
        // const name = event.target.value.name;
        // const email = event.target .value.emial;
        // const password = event.target.value.password
        

    }
    
    return (
        <div className="hero w-full my-10">
  <div className="hero-content  gap-20 grid md:grid-cols-3 flex-col lg:flex-row">
    <div className="text-center lg:text-left">
        <img className='w-3/4' src={logo} alt=''></img>
    </div>
    <div className="card flex-shrink-0 w-3/4 max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-2xl font-bold text-center">Login now!</h1>

      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
         <input onSubmit={handleLoign} className="btn btn-primary" type='submit'value={Login}></input>
          
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;