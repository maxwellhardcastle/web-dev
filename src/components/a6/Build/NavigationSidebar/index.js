import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'explore'
    }) => {
    return(
        <>
            <div className="list-group">
                <Link to="/a6" className="list-group-item">
                    <i className="fab fa-twitter"></i>
                </Link>
                <Link to="/a6/twitter/home" className={`list-group-item d-flex ${active === 'home' ? 'active' : ''}`}>
                    <i className="fa fa-home my-auto me-1"></i>
                    <div className="d-none d-xl-block">Home</div>
                </Link>
                <Link to="/a6/twitter/explore" className={`list-group-item d-flex ${active === 'explore' ? 'active' : ''}`}>
                    <i className="fa fa-hashtag my-auto me-1"></i>
                    <div className="d-none d-xl-block">Explore</div>
                </Link>
                <a className={`list-group-item d-flex ${active === 'notifications' ? 'active' : ''}`} href="/">
                    <i className="fa fa-bell my-auto me-1"></i>
                    <div className="d-none d-xl-block">Notifications</div>
                </a>
                <a className={`list-group-item d-flex ${active === 'messages' ? 'active' : ''}`} href="/">
                    <i className="fa fa-envelope my-auto me-1"></i>
                    <div className="d-none d-xl-block">Messages</div>
                </a>
                <a className={`list-group-item d-flex ${active === 'bookmarks' ? 'active' : ''}`} href="/">
                    <i className="fa fa-bookmark my-auto me-1"></i>
                    <div className="d-none d-xl-block">Bookmarks</div>
                </a>
                <a className={`list-group-item d-flex ${active === 'lists' ? 'active' : ''}`} href="/">
                    <i className="fa fa-list my-auto me-1"></i>
                    <div className="d-none d-xl-block">Lists</div>
                </a>
                <a className={`list-group-item d-flex ${active === 'profile' ? 'active' : ''}`} href="/">
                    <i className="fa fa-user my-auto me-1"></i>
                    <div className="d-none d-xl-block">Profile</div>
                </a>
                <a className={`list-group-item d-flex ${active === 'more' ? 'active' : ''}`} href="/">
                    <i className="fa fa-ellipsis-h my-auto me-1"></i>
                    <div className="d-none d-xl-block">More</div>
                </a>
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </>
    );
}
export default NavigationSidebar;
