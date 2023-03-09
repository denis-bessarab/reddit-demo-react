import './sideNavbar.scss'
import React from "react";
import {SideNavbarList} from "@/global-components/SideNavbar/SideNavbarList";
import {topicsList} from "@/modules/HomeModule/models/topicsList";
import {feedsList} from "@/modules/HomeModule/models/feedsList"
import {utilitiesList} from "@/modules/HomeModule/models/utilitiesList";

export const SideNavbar: React.FC = () => {
    return (
        <div id="side-navbar">
            <SideNavbarList className={''} header={"FEEDS"} links={feedsList}/>
            <SideNavbarList className={''} header={"TOPICS"} links={topicsList}/>
            <SideNavbarList className={'utilities'} header={null} links={utilitiesList}/>
        </div>
    )
}