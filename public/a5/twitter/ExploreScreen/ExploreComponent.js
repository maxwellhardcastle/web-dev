import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col-11 d-flex search-text-field">
                    <i class="fa fa-search my-auto me-1"></i>
                    <input type="text" class="text-input-field my-auto" placeholder="Search Twitter">
                </div>
                <div class="col-1 d-flex justify-content-center">
                    <i class="fa fa-cog fa-2x my-auto" style="color: blue"></i>
                </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
           </ul>
               <div class="card-caption">
                    <p class="card-image-text">SpaceX's Starship</p>
                    <img src="../images/starship.jpg" class="card-img-top" alt="...">
               </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
