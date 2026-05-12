import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";

function Profile() {
  const [page, setPage] = useState("login");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      {page === "login" && (
        <Login 
          onLogin={() => setPage("dashboard")}
          onSignup={() => setPage("signup")}
        />
      )}

      {page === "signup" && (
        <Signup onBack={() => setPage("login")} />
      )}

      {page === "dashboard" && (
        <Dashboard onLogout={() => setPage("login")} />
      )}
      
    </div>
  );
}

export default Profile;