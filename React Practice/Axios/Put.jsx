import React from "react";
import axios from "axios";

function Put() {

  const updateUser = () => {
    axios.put("https://jsonplaceholder.typicode.com/users/1", {
      name: "Updated Name"
    })
    .then((res) => {
      console.log("Updated:", res.data);
    })
    .catch((err) => console.log(err));
  };

  return (
    <div>
      <button onClick={updateUser}>Update User</button>
    </div>
  );
}

export default Put;