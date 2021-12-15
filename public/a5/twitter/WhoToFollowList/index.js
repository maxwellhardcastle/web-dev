import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
                <li class="list-group-item">
                    <div class="bold-text">Who to Follow</div>
                </li>
                ${
                    who.map(whom => {
                        return(WhoToFollowListItem(whom));
                    }).join('')
                }            
            </ul>
`); }

export default WhoToFollowList;
