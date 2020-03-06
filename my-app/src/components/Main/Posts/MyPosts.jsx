import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const Posts = (props) => {

    let postElement = props.postsData.map(elem => <Post message={elem.massage} likesCount={elem.likesCount}/>);

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.onPostUpdateChange(text);
    };

    return (
        <div className={s.posts}>
            My posts
            <div className={s.newPost}>
                <textarea onChange={onPostChange} value={props.newTextPost} ref={newPostElement}/>
                <div>
                    <button onClick={props.addPost}>Add post</button>
                </div>
            </div>
            {postElement}

        </div>
    );
};

export default Posts;