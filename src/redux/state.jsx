let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likes: 15},
                {id: 2, message: 'It\'s my first post', likes: 20},
                {id: 3, message: 'Dada', likes: 20},
                {id: 4, message: 'Blabla', likes: 20},
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'yo'},
                {id: 4, message: 'yo'},
                {id: 5, message: 'yo'},
            ],
            dialogs: [
                {id: 1, name: 'Dimich'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Sveta'},
                {id: 5, name: 'Victor'},
                {id: 6, name: 'Valera'}
            ]
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state');
    },
    getState() {
        debugger
        return this._state;
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likes: 0,
        };
        this._state.profilePage.newPostText = ''
        this._state.profilePage.posts.push(newPost)
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        debugger
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;//observer patern//publisher-subscriber//button
    }
}

window.store = store;
export default store;

//store -OOP