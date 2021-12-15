const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
            <div class="d-flex">
                <div class="my-auto me-2">
                    <img class="user-icon" src=${who.avatarIcon}>
                </div>
                <div class="my-auto me-auto">
                    <div class="user-name">
                        ${who.userName} <i class="fa fa-check-circle"></i>
                    </div>
                    <div class="user-handle">
                        @${who.handle}
                    </div>
                </div>
                <div class="my-auto ms-auto">
                    <button class="btn col-12 btn-primary override-bs">
                        Follow
                    </button>
                </div>
            </div>
        </li>
    `);
}
export default WhoToFollowListItem;