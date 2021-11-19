import React from 'react';
import "./App.css";
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";


const App = () => {
    return (
        <div className='wrapper'>
            <Header/>
            <Navigation/>
            <div className="app-wrapper-content">
                <Dialogs/>
            </div>
            {/*<Profile />*/}
        </div>
    );
}


export default App;