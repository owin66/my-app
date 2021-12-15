import React from 'react';
import "./App.css";
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";



const App = (props) => {
    return (
        <div className='wrapper'>
            <Header/>
            <Navigation/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/dialogs' element={<Dialogs
                        store={props.store}/>}/>
                    <Route path='/profile' element={<Profile
                        dispatch={props.dispatch}
                        profilePage={props.state.profilePage}/>}/>
                    <Route path='/news' element={<Profile/>}/>
                    <Route path='/music' element={<Profile/>}/>
                    <Route path='/settings' element={<Profile/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;