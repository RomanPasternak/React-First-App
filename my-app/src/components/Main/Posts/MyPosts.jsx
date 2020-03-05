import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {onPostChangeActionCreator} from "../../../redux/profile-reducer";


const Posts = (props) => {

    let postElement = props.state.postsData.map( elem => <Post message = {elem.massage} likesCount = {elem.likesCount}/> );

    let newPostElement = React.createRef();

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.onPostUpdateChange(text);
    };

    return (
        <div className ={s.posts}>
            My posts
            <div className = {s.newPost}>
                <textarea onChange={onPostChange} value={props.state.newTextPost} ref = {newPostElement} />
                <div>
                    <button onClick = {props.addPost} >Add post</button>
                </div>
            </div>
            {postElement}
            
        </div>
    );
};

export default Posts;