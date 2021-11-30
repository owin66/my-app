import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost} from "./redux/state.jsx";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App posts={state.profilePage.posts}
                     dialogs={state.dialogsPage.dialogs}
                     messages={state.dialogsPage.messages}
                     addPost={addPost} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};
export default rerenderEntireTree;