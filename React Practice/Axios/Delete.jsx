import React, { useState } from "react";
import axios from "axios";

function Delete() {
  const [isDeleting, setIsDeleting] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const handleDelete = async () => {
    setIsDeleting(true);
    setStatusMsg("");

    try {
      await axios.delete("https://jsonplaceholder.typicode.com/users/2");
      setStatusMsg("User deleted successfully ");
    } catch (err) {
      setStatusMsg("Failed to delete user");
    }

    setIsDeleting(false);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Delete User</h2>

      <button onClick={handleDelete} disabled={isDeleting}>
        {isDeleting ? "Please wait..." : "Delete"}
      </button>

      {statusMsg && <p>{statusMsg}</p>}
    </div>
  );
}

export default Delete;