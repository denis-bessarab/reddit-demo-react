import React from "react";
import {useNavigate} from "react-router-dom";
import {TrendInterface} from "@/modules/HomeModule/types/types";

export const Trend: React.FC<TrendInterface> = ({heading, category, description, icon, cover, url}) => {
    const navigate = useNavigate()

    return (
        <div id="trend" onClick={() => navigate(url)} style={cover !== null ? {
            backgroundImage: `url(${cover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        } : {backgroundColor: "fff"}}>
            <div className="gradient"></div>
            <div className="header">
                <div className="icon" style={icon !== null ? {
                    backgroundImage: `url(${icon})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                } : {backgroundColor: "#000"}}></div>
                <span>{category}</span>
            </div>
            <div className="copy">
                <h3 className={'trend-heading'}>{heading}</h3>
                <span className={'description'}>{description}</span>
            </div>
        </div>
    )
}