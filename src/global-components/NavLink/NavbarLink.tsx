import React, {useState} from "react";
import {NavbarLinkType} from "@/modules/HomeModule/types/types";
import {useNavigate} from "react-router-dom";
import {Icon} from '@iconify/react';
import "./navbarLink.scss";

interface LinkProps {
    link: NavbarLinkType
}

export const NavbarLink: React.FC<LinkProps> = ({link}) => {

    const [isOpen, setOpenState] = useState<boolean>(false)
    const navigate = useNavigate();

    function openOptions(e: React.MouseEvent<SVGSVGElement>) {
        e.stopPropagation()
        setOpenState(!isOpen)
    }

    function changeRoute(url: string) {
        navigate(url);
    }

    return (
        <div id="navbar-link">
            <li className={isOpen ? 'side-navbar-link open' : 'side-navbar-link'} key={link.name}
                onClick={() => changeRoute(link.url)}>
                {link.icon !== null && <Icon icon={link.icon} className={"icon"}/>}
                <span className={"copy"}>{link.name}</span>
                {link.options[0] &&
                    <Icon className={"chevron"} onClick={e => openOptions(e)} icon={"ion:chevron-down"}/>
                }
            </li>
            {(link.options[0] && isOpen) && <ul className="options-list">
                {link.options.map(option => {
                    return (
                        <li key={option.name} className={option.name === "See more" ? "blue" : ""}
                            onClick={() => changeRoute(option.url)}>{option.name}</li>
                    )
                })}
            </ul>}
        </div>
    )
}
