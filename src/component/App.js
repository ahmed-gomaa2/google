import React from 'react';
import Home from '../pages/Home'
import {BrowserRouter, Route} from 'react-router-dom'
import Search from "../pages/SearchPage";

const App = () => {
    return (
        <div className={'app'}>
            <BrowserRouter >
                <Route exact path={'/'} component={() => <Home /> } />
                <Route exact path={'/search'} component={() => <Search/>} />
            </BrowserRouter>
        </div>
    );
};

export default App;