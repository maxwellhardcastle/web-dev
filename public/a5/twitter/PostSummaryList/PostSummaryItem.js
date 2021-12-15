const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-10">
                    <div class="faded-text">${post.topic}</div>
                    <div class="d-flex">
                        <div class="bold-text">${post.userName}</div>
                        <i class="fa fa-check-circle my-auto mx-1"></i>
                        <div class="faded-text">- ${post.time}</div>
                    </div>
                    <div class="bold-text">${post.title}</div>
                </div>
                <div class="col-2">
                    <img class="img-fluid mx-0 card-profile-icon" src=${post.image}>
                </div>
            </div>
        </li>
    `);
}

export default PostSummaryItem;