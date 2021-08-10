import React from "react";
import Urlap from "./Input";

function Form(props) {
  return (
    <form className="form">
      <Urlap type="text" data="Username" />
      <Urlap type="password" data="Password" />
      {!props.isRegistered && <Urlap type="password" data="Confirm Password" />}
      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
