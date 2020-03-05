//for callBack  renderEntireTree from index.js
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, massage: 'Roman', likesCount: 4},
                {id: 2, massage: 'Olena', likesCount: 18},
                {id: 3, massage: 'Ryslan', likesCount: 6},
                {id: 4, massage: 'Mukola', likesCount: 7}
            ],
            newTextPost: '',
        },
        dialogPage: {
            dataDialogList: [
                {id: 1, name: 'Roman'},
                {id: 2, name: 'Olena'},
                {id: 3, name: 'Ryslan'},
                {id: 4, name: 'Mukola'}
            ],
            massageData: [
                {id: 1, massage: 'Hello'},
                {id: 2, massage: 'Hi'},
                {id: 3, massage: 'How are you?'},
                {id: 4, massage: 'Fine'}
            ],
            newMassage: ''
        }
    },
    _callSubscriber() {
        console.log('');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action)

        this._callSubscriber(this._state);

    },

};

export default store;