import React from "react";
const data = {
  id: 0,
  firstName: "string",
  lastName: "string",
  email: "string",
  mobile: "string",
};
function Register() {
  fetch("http://10.14.15.4:5000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
  <form>
    <label>FirstName :</label>
    <input type="text" placeholder="FirstName"></input>
    <br />
    <label>LastName :</label>
    <input type="text" placeholder="LastName"></input>
    <br />
    <label>Email :</label>
    <input type="text" placeholder="Email"></input>
    <br />
    <label>Mobile No :</label>
    <input type="text" placeholder="Mobile no"></input>
    <br />
    <button type="submit">Register</button>
  </form>;
}

export default Register;
