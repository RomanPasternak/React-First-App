const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {id: 1, massage: 'Roman', likesCount: 4},
        {id: 2, massage: 'Olena', likesCount: 18},
        {id: 3, massage: 'Ryslan', likesCount: 6},
        {id: 4, massage: 'Mukola', likesCount: 7}],
    newTextPost: ''
};

const profileReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            massage: state.newTextPost,
            likesCount: 2
        };
        let stateCopy = {...state};
        stateCopy.postsData = [...state.postsData];
        stateCopy.postsData.push(newPost);
        stateCopy.newTextPost = '';
        return stateCopy;
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        let stateCopy = {...state};
        stateCopy.newTextPost = action.newText;
        return stateCopy;
    }
    return state;
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;
