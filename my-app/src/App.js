import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Main from './components/Main/Main.jsx';
import Music from './components/Music/Music.jsx';
import News from './components/News/News.jsx';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogContainer from "./components/Dialog/DialogContainer";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Main store={props.store}/>}/>
                    <Route path='/dialog' render={() => <DialogContainer store={props.store}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
