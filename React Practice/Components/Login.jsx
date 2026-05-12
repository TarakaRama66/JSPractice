import React from "react";

function Login({ onLogin, onSignup }) {
  return (
    <div>
      <h2>Please Login</h2>

      <button onClick={onLogin}>Login</button>

      <br /><br />

      <p>New user?</p>
      <button onClick={onSignup}>Signup</button>
    </div>
  );
}

export default Login;