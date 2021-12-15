const NavigationSidebar = (active) => {
    return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i>
                </a>
                <a class="list-group-item d-flex ${active == 'home' ? 'active' : ''}" href="../HomeScreen/home.html">
                    <i class="fa fa-home my-auto me-1"></i>
                    <div class="d-none d-xl-block">Home</div>
                </a>
                <a class="list-group-item d-flex ${active == 'explore' ? 'active' : ''}" href="../ExploreScreen/explore.html">
                    <i class="fa fa-hashtag my-auto me-1"></i>
                    <div class="d-none d-xl-block">Explore</div>
                </a>
                <a class="list-group-item d-flex ${active == 'notifications' ? 'active' : ''}" href="/">
                    <i class="fa fa-bell my-auto me-1"></i>
                    <div class="d-none d-xl-block">Notifications</div>
                </a>
                <a class="list-group-item d-flex ${active == 'messages' ? 'active' : ''}" href="/">
                    <i class="fa fa-envelope my-auto me-1"></i>
                    <div class="d-none d-xl-block">Messages</div>
                </a>
                <a class="list-group-item d-flex ${active == 'bookmarks' ? 'active' : ''}" href="/">
                    <i class="fa fa-bookmark my-auto me-1"></i>
                    <div class="d-none d-xl-block">Bookmarks</div>
                </a>
                <a class="list-group-item d-flex ${active == 'lists' ? 'active' : ''}" href="/">
                    <i class="fa fa-list my-auto me-1"></i>
                    <div class="d-none d-xl-block">Lists</div>
                </a>
                <a class="list-group-item d-flex ${active == 'profile' ? 'active' : ''}" href="/">
                    <i class="fa fa-user my-auto me-1"></i>
                    <div class="d-none d-xl-block">Profile</div>
                </a>
                <a class="list-group-item d-flex ${active == 'more' ? 'active' : ''}" href="/">
                    <i class="fa fa-ellipsis-h my-auto me-1"></i>
                    <div class="d-none d-xl-block">More</div>
                </a>
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
