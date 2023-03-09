import React from 'react';
import {SideNavbar} from "@/global-components/SideNavbar/SideNavbar";
import './app.scss'
import {Trending} from "@/global-components/Trending/Trending";
import {PostsFeed} from "@/global-components/PostsFeed/PostsFeed";

const App: React.FC = () => {
    return (
        <div id="app">
            <SideNavbar/>
            <div id="content">
                <Trending/>
                <PostsFeed/>
            </div>
        </div>
    )
};

export default App;
