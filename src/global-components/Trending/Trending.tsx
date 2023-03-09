import React from "react";
import './trending.scss'
import {trendsList} from "@/modules/HomeModule/models/trendsList";
import {Trend} from "@/global-components/Trending/Trend";

export const Trending: React.FC = () => {
    return (
        <>
            <h1 className={'trending-heading'}>Trending today</h1>
            <div id="trending">
                {trendsList.map(trend => {
                    return (
                        <Trend key={trend.category} heading={trend.heading} category={trend.category}
                               description={trend.description} icon={trend.icon} cover={trend.cover} url={trend.url}/>
                    )
                })}
            </div>
        </>
    )
}