import React, {useEffect, useState} from "react";
import './badge.scss'
import {Icon} from "@iconify/react";

interface BadgeProps {
    text?: string,
    options?: string[],
    icon?: string,

    style: "filled" | "text";

    inactive: boolean,

}

export const Badge: React.FC<BadgeProps> = ({text, options, icon, style, inactive}) => {


    const [option, setOption] = useState<string | null>(null);
    const [isOptionsShowed, setIsOptionsShowed] = useState<boolean>(false)
    const [isBadgeActive, setBadgeActive] = useState<boolean>(false)
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 1200;

    useEffect(() => {
        if (options) {
            setOption(options[0])
        }
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [])


    function badgeClick() {
        if (!inactive && inactive !== undefined) {
            if (style === "text") {
                setBadgeActive(!isBadgeActive)
            } else if (options !== undefined) {
                setIsOptionsShowed(!isOptionsShowed)
            }
        }
    }

    return (
        <div id="badge" className={(isBadgeActive ? `${style} active` : style) + (width < breakpoint ? " nohover" : "")}
             onClick={() => badgeClick()}>
            {icon !== undefined && <Icon className={"badge-icon"} icon={icon}/>}
            <span className="badge-copy">
                {options !== undefined ? option : text}
                <Icon className={"fake-chevron"} icon={"ion:chevron-down"}/>
            </span>
            {options && <Icon className={"badge-chevron"} icon={"ion:chevron-down"}/>}
            {options && isOptionsShowed &&
                <div id="badge-options">
                    {options.map(option => {
                        return <span className={"badge-option"} onClick={() => {
                            setOption(option)
                            setIsOptionsShowed(false)
                        }} key={option}>{option}</span>
                    })}
                </div>}
        </div>

    )
}
