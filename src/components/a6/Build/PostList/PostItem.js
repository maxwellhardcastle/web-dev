import React from "react";

const PostItem = ({
                      post = {
                          "profileImage": "/images/muskprofile.jpg",
                          "userName": "Elon Musk",
                          "handle": "elonmusk",
                          "time": "23h",
                          "title": "Amazing show about <a class=\"style-it-blue\" href=\"@inspiration4x\">@Inspiration4x</a> mission!",
                          "cardImage": "/images/countdown.jpg",
                          "cardTitle": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
                          "cardContent": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
                          "cardLink": "netflix.com",
                          "comments": "4.2k",
                          "retweets": "3.5k",
                          "likes": "37.5k"}
                  }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img className="user-icon" src={post.profileImage} alt="..."/>
                </div>
                <div className="col-11">
                    <div className="d-flex">
                        <div className="bold-text">{post.userName}</div>
                        <i className="fa fa-check-circle my-auto mx-1"></i>
                        <div className="faded-text"> @{post.handle}</div>
                        <div className="faded-text"> - {post.time}</div>
                    </div>
                    <div>{post.title}</div>
                    <div className="card mt-2">
                        <img src={post.cardImage} class="card-img-top" alt="..."/>
                        <div className={`card-body ${post.cardTitle.length === 0 ? 'd-none' : 'd-block'}`}>
                            <div>{post.cardTitle}</div>
                            <div className="faded-text">{post.cardContent}</div>
                            <i className="fa fa-link faded-text">{post.cardLink}</i>
                        </div> 
                    </div>
                    <div className="row my-3">
                        <i className="fa fa-comment col-3 faded-text"> {post.comments}</i>
                        <i className="fa fa-retweet col-3 faded-text"> {post.retweets}</i>
                        <i className="fa fa-heart col-3 faded-text"> {post.likes}</i>
                        <i className="fa fa-upload col-3 faded-text"></i>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default PostItem;