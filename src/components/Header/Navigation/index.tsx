import React from "react";
import NavItem from "./NavItem";

function Navigation(): JSX.Element{
    return(
        <nav>
            <ul className="flex gap-5">
              <NavItem props={"#"}>Home</NavItem>
              <NavItem props={"#projects"}>Projetos</NavItem>
              <NavItem props={"#contact"}>Contatos</NavItem>
            </ul>
          </nav>
    )
}

export default Navigation;