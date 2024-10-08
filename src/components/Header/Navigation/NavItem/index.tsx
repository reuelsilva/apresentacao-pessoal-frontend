import React from "react";

type NavItemProps = {
    children: string,
    props: string
}

function NavItem({children, props}: NavItemProps){
    return(
        <li>
            <a className="text-white font-poppins-500 hover:text-color-03 transition-all" href={props}>{children}</a>
        </li>
    )
}

export default NavItem;