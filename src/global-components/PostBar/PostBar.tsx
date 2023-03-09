import React from "react";
import './postBar.scss'
import {Badge} from "@/global-components/Badge/Badge";
import {countyOptions} from "@/modules/HomeModule/models/countyOptions";
import {Icon} from "@iconify/react";
import {Menu} from "@/global-components/Menu/Menu";

export const PostBar: React.FC = () => {
    return (
        <>
            <h1 className={'post-bar-heading'}>Popular posts</h1>
            <div id={'post-bar'}>
                <Menu/>
                <Badge text={"Popular"} style={"filled"} icon={"ion:flame-outline"} inactive={false}/>
                <Badge text={"Poland"} style={"filled"} options={countyOptions} inactive={false}/>
                <Badge text={"New"} style={"text"} icon={"ion:checkmark-circle-outline"} inactive={false}/>
                <Badge text={"Top"} style={"text"} icon={"ion:chevron-up-circle-outline"} inactive={false}/>
                <Icon className={"more-options-icon"} icon={"ion:ellipsis-horizontal-sharp"}></Icon>
            </div>
        </>

    )
}