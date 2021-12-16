import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json"

const WhoToFollowList = () => {
    return (
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="bold-text">Who to Follow</div>
                </li>
                {
                    who.map(whom => {
                        return(<WhoToFollowListItem who = {whom}/>);
                    })
                }            
            </ul>
); }

export default WhoToFollowList;
