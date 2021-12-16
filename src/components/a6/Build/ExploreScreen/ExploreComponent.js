import React from "react";
import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="col-11 d-flex search-text-field">
                    <i className="fa fa-search my-auto me-1"></i>
                    <input type="text" className="text-input-field my-auto" placeholder="Search Twitter"/>
                </div>
                <div className="col-1 d-flex justify-content-center">
                    <i className="fa fa-cog fa-2x my-auto" style={{"color": "blue"}}></i>
                </div>
           </div>
           <ul className="nav mb-2 nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" href="for-you.html">For You</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="trending.html">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="news.html">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="sports.html">Sports</a>
                </li>
                <li className="nav-item d-none d-md-block">
                    <a className="nav-link" href="entertainment.html">Entertainment</a>
                </li>
           </ul>
               <div className="card-caption">
                    <p className="card-image-text">SpaceX's Starship</p>
                    <img src="/images/starship.jpg" className="card-img-top" alt="..."/>
               </div>
           <PostSummaryList/>
        </>
    );
}
export default ExploreComponent;
