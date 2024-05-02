import React from "react";
import { useLoaderData, Form, redirect } from "react-router-dom";
import { loginUser } from "../api";
 

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData =await request.formData()
  const email = formData.get("email");
  const password = formData.get("password");
  const data = await loginUser({email, password})
 localStorage.setItem("loggedin", true)
  return redirect("/host")
    
  
}
export default function Login() {
  
  const message = useLoaderData();

  const [status, setStatus] = React.useState("idle");
  const [error, setError] = React.useState(null);

  function handelSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    loginUser(loginFormData)
      .then((data) => console.log(data))
      .catch((err) => setError(err))
      .finally(() => setStatus("idle"));
  }

 
  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h3 className="red">{message}</h3>}
      {error && <h3 className="red">{error.message}</h3>}

      <Form method="post" className="login-form">
        <input
          name="email"
          type="email"
          placeholder="Email Address"
        />

        <input
          name="password"
          type="password"
          placeholder="password"
        />
        <button disabled={status === "submitting"}>
          {status === "submitting" ? "loggin in ... " : "Log in"}
        </button>
      </Form>
    </div>
  );
}
