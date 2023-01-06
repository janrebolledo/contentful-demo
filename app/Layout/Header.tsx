import React from "react";
import Link from "next/link";
import { variables } from "../Variables";

function Header() {
  return (
    <header>
      <Link href={"/"}>{variables.name}</Link>
    </header>
  );
}

export default Header;
