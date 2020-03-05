import React from 'react';
import stl from './Post.module.css';

const Post = (props) => {

    return (
        <div>
            <div className={stl.ava}>
                <img alt='' src='https://sun9-28.userapi.com/ouF4IZc1Btj05dmlpJXd9XQNpsiaDS8JKtnTGw/1CZAUd4yO9A.jpg?ava=1'></img>
                {props.message}
                <div className = {stl.likes}>
                    Likes: {props.likesCount}
                </div>
            </div>
        </div>
    );
}

export default Post;