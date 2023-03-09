import React from "react";
import './sideNavbarList.scss'
import {NavbarLink} from "@/global-components/NavLink/NavbarLink";
import {NavbarLinkType} from "@/modules/HomeModule/types/types";

interface SideNavbarListProps {
    className: string,
    header: string | null,
    links: NavbarLinkType[]
}


export const SideNavbarList: React.FC<SideNavbarListProps> = ({links, header, className}) => {

    return (
        <div id="side-navbar-list" className={className}>
            {header !== null && <h3>{header}</h3>}

            <ul>
                {links.map(link => {
                    return (
                        <NavbarLink key={link.name} link={link}/>
                    )
                })}
            </ul>
        </div>
    )
}