import React from "react";
import './menu.scss'
import {menuLinks} from "@/modules/HomeModule/models/menuLinks";
import {NavbarLink} from "@/global-components/NavLink/NavbarLink";

export const Menu: React.FC = () => {
    return (
        <div id="menu">
            <ul>
                {menuLinks.map(link => {
                    return (
                        <NavbarLink key={link.name} link={link}/>
                    )
                })}
            </ul>
        </div>
    )
}