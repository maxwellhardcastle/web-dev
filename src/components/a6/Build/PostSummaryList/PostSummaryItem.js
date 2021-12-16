import React from "react";

const PostSummaryItem = ({
                             post = {
                                 "topic": "Web Development",
                                 "userName": "ReactJS",
                                 "time": "2h",
                                 "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                                 "image": "/images/reactjsicon.jpg"
                             }
                         }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div className="faded-text">{post.topic}</div>
                    <div className="d-flex">
                        <div className="bold-text">{post.userName}</div>
                        <i className="fa fa-check-circle my-auto mx-1"></i>
                        <div className="faded-text">- {post.time}</div>
                    </div>
                    <div className="bold-text">{post.title}</div>
                </div>
                <div className="col-2">
                    <img className="img-fluid mx-0 card-profile-icon" src={post.image}/>
                </div>
            </div>
        </li>
    );
}

export default PostSummaryItem;