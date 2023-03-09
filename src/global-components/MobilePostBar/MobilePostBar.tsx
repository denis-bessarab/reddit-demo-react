import React from "react";
import './mobilePostBar.scss'
import {Badge} from "@/global-components/Badge/Badge";
import {Icon} from "@iconify/react";

export const MobilePostBar: React.FC = () => {
    return (
        <>
            <div id={'mobile-post-bar'}>
                <h1>Popular</h1>
                <Badge style={"text"} icon={"ion:flame-outline"}
                       options={["Popular"]} inactive={true}/>
                <Icon className={"more-options-icon"} icon={"ion:ellipsis-horizontal-sharp"}></Icon>
                <Icon className={"mobile-bar-chevron"} icon={"ion:chevron-down"}/>
            </div>
        </>

    )
}