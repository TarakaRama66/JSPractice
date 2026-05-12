import React from "react";

function Dashboard({ onLogout }) {
  return (
    <div>
      <h2>Welcome to Dashboard </h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;