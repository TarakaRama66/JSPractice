import React from "react";

function index() {
  const isLoggedIn = true;
  const isAdmin = true;
  const isLoading = false;
  const users = ["John", "Alice"];
  const role = "admin";

  // If-else
  let message;
  if (isLoggedIn) {
    message = <h2>Welcome Back User</h2>;
  } else {
    message = <h2>Please Login</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Conditional Rendering Examples</h1>

      {/* if-else */}
      <div>
        <h3>If-Else</h3>
        {message}
      </div>

      {/* Ternary */}
      <div>
        <h3>Ternary Operator</h3>
        {isLoggedIn ? <p>Logged In</p> : <p>Logged Out</p>}
      </div>

      {/* && Operator */}
      <div>
        <h3>AND (&&) Operator</h3>
        {isAdmin && <p>Admin Panel Visible</p>}
      </div>

      {/*Multiple conditions */}
      <div>
        <h3>Multiple Conditions</h3>
        {role === "admin" ? (
          <p>Admin Dashboard</p>
        ) : role === "user" ? (
          <p>User Dashboard</p>
        ) : (
          <p>Guest</p>
        )}
      </div>

      {/* Loading */}
      <div>
        <h3>Loading Example</h3>
        {isLoading ? <p>Loading...</p> : <p>Data Loaded</p>}
      </div>

      {/* List rendering */}
      <div>
        <h3>List Rendering</h3>
        {users.length > 0 ? (
          users.map((user, index) => <p key={index}>{user}</p>)
        ) : (
          <p>No Users Found</p>
        )}
      </div>
    </div>
  );
}

export default index;