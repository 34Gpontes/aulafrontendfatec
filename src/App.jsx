import React from 'react';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import BarraMenu from './components/menu/BarraMenu';
import './'

function App() {
    return (
        <BrowserRouter>
            <BarraMenu />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
