import React from "react";

export default function Login() {
  const [loginFormData, setLoginForemData] = React.useState({
    email: "",
    password: "",
  });

  function handelSubmit(e) {
    e.preventDefault();
    console.log(loginFormData);
  }

  function handelChange(e){
    const { name, value}= e.target;
    setLoginForemData( prev => ({
        ...prev, 
        [name]:value
    }))
  }
  return (
   <div className="login-container">
    <h1>Sign in to your account</h1>
    <form onSubmit={handelSubmit} className="login-form">
        <input 
            name="email"
            onChange={handelChange}
            type="email"
            placeholder="Email Address"
            value={loginFormData.email}
        />

        <input 
            name="password"
            onChange={handelChange}
            type="password" 
            placeholder="password"
            value={loginFormData.password}
        />
        <button>Log in</button>

    </form>
   </div>
  );
}
