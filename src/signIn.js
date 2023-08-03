import React, { useState } from "react";
import MenuBar from "./MenuBar"; // menubar
import "./signIn.css"; // css of signin page

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [signedUp, setSignedUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignedUp(true);
  };

  return (
    <div>
      <MenuBar />
      <div className="form-box">
        <div className="center-text">
          {" "}
          {}
          <h1>Sign In</h1> {}
        </div>
        {signedUp ? (
          <p>You have signed in successfully!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="input-field">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-field">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="input-field">
              <label>Mobile Number:</label>
              <input
                type="tel"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
            </div>
            <button type="submit">Sign In</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignIn;
