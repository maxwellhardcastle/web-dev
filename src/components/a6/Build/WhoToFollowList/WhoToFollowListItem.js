import React from "react";

const WhoToFollowListItem = ({
                                 who = {
                                     avatarIcon: '/images/nasaicon.jpg',
                                     userName: 'NASA',
                                     handle: 'NASA',
                                 }
                             }
) => {
    return(
        <li className="list-group-item">
            <div className="d-flex">
                <div className="my-auto me-2">
                    <img className="user-icon" src={who.avatarIcon} alt="..."/>
                </div>
                <div className="my-auto me-auto">
                    <div className="user-name">
                        {who.userName} <i class="fa fa-check-circle"></i>
                    </div>
                    <div className="user-handle">
                        @{who.handle}
                    </div>
                </div>
                <div className="my-auto ms-auto">
                    <button className="btn col-12 btn-primary override-bs">
                        Follow
                    </button>
                </div>
            </div>
        </li>
    );
}
export default WhoToFollowListItem;