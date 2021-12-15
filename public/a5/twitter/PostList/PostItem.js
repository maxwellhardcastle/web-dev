const PostItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-1">
                    <img class="user-icon" src=${post.profileImage}>
                </div>
                <div class="col-11">
                    <div class="d-flex">
                        <div class="bold-text">${post.userName}</div>
                        <i class="fa fa-check-circle my-auto mx-1"></i>
                        <div class="faded-text"> @${post.handle}</div>
                        <div class="faded-text"> - ${post.time}</div>
                    </div>
                    <div>${post.title}</div>
                    <div class="card mt-2">
                        <img src=${post.cardImage} class="card-img-top" alt="...">
                        <div class="card-body ${post.cardTitle.length == 0 ? 'd-none' : 'd-block'}">
                            <div>${post.cardTitle}</div>
                            <div class="faded-text">${post.cardContent}</div>
                            <i class="fa fa-link faded-text">${post.cardLink}</i>
                        </div> 
                    </div>
                    <div class="row my-3">
                        <i class="fa fa-comment col-3 faded-text"> ${post.comments}</i>
                        <i class="fa fa-retweet col-3 faded-text"> ${post.retweets}</i>
                        <i class="fa fa-heart col-3 faded-text"> ${post.likes}</i>
                        <i class="fa fa-upload col-3 faded-text"></i>
                    </div>
                </div>
            </div>
        </li>
    `);
}

export default PostItem;