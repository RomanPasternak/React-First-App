import React from 'react';
import s from './Main.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from "./Posts/MyPostsContainer";

const Main = (props) =>{

    return(
        <main>
            <ProfileInfo/>
            <PostsContainer store = {props.store}  />
        </main>
    );
};

export default Main;


// dispatch = {props.dispatch}
// newPostText={props.state.profilePage.newTextPost}
// profilePage={props.state.profilePage}