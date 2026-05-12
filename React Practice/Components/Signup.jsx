import React from "react";

function Signup({ onBack }) {
  return (
    <div>
      <h2>Signup Page</h2>

      <button>Create Account</button>

      <br /><br />
      <button onClick={onBack}>Back to Login</button>
    </div>
  );
}

export default Signup;