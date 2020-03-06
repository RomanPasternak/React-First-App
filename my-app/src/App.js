import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Main from './components/Main/Main.jsx';
import Music from './components/Music/Music.jsx';
import News from './components/News/News.jsx';
import {Route} from 'react-router-dom';
import DialogContainer from "./components/Dialog/DialogContainer";


const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Main/>}/>
                <Route path='/dialog' render={() => <DialogContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
            </div>
        </div>
    );
}

export default App;
