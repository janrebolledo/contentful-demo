import React from "react";
import { variables } from "../Variables";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <small>
        Copyright &copy; {year} {variables.name}. All Rights Reserved
      </small>
    </footer>
  );
}

export default Footer;
