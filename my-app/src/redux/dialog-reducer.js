const ADD_MASSAGE = 'ADD-MASSAGE';
const UPDATE_NEW_MASSAGE_TEXT = 'UPDATE-NEW-MASSAGE-TEXT';

let initialState = {
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
};

const dialogReducer = (state = initialState, action) => {
    if (action.type === ADD_MASSAGE) {
        let newMassage = {
            id: 6,
            massage: state.newMassage
        };
        state.massageData.push(newMassage);
        state.newMassage = '';
    } else if (action.type === UPDATE_NEW_MASSAGE_TEXT) {
        state.newMassage = action.newText;
    }
    return state;
};

export const addMassageActionCreator = () => ({type: ADD_MASSAGE});
export const onMassageChangeActionCreator = (text) => ({type: UPDATE_NEW_MASSAGE_TEXT, newText: text});


export default dialogReducer;