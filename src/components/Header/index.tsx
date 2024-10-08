import React from "react";
import Navigation from "./Navigation";

function Header(): JSX.Element{
    return(
        <header className="hidden sm:flex sm:items-center sm:justify-center sm:h-12 sm:bg-color-02 sm:fixed sm:top-0 sm:left-0 sm:w-full sm:z-10">
          <Navigation/>
        </header>
    )
}

export default Header;