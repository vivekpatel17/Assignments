import React from "react";

import Data from "./CardData";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import "./Service.css";

function Service() {
    return (
        <>
            <div className="service">
                <div className="service__heading">
                    <h2>Labelify Services</h2>
                    <p>
                        We have dedicated and monitored facilities, with trained
                        full time annotators who follow strict privacy &
                        security procedures.
                    </p>
                </div>
                <div className="service__cards">
                    {Data.map((res) => (
                        <div className="service__card">
                            <span>{res.img}</span>
                            <h2>{res.heading}</h2>
                            <p>{res.description}</p>
                            <button>
                                <span>Learn More</span>
                                {/* <span>
                                    <ArrowCircleRightRoundedIcon />
                                </span> */}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Service;
