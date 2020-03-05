import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import Posts from "./MyPosts";


const PostsContainer = (props) => {


     let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };
     let onPostUpdateChange = (text) =>{
         props.store.dispatch(onPostChangeActionCreator(text));
     };
    return (
        <Posts addPost = {addPost}  onPostUpdateChange = {onPostUpdateChange} state = {props.store.getState().profilePage}/>
    );
};

export default PostsContainer;