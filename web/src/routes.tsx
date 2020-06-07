import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';

// BrowserRouter: O mais utilizado quando se faz navegação

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={CreatePoint} path="/create-point"/>
        </BrowserRouter>
    );    
}

export default Routes;