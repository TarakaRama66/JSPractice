import React, { useState } from "react";
import axios from "axios";

function EmailForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    if (!email.includes("@")) {
      alert("Enter valid email");
      return;
    }

    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        { email }
      );

      console.log(res.data);
      alert("Email sent");

      setEmail("");
    } catch (err) {
      alert("Error");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default EmailForm;