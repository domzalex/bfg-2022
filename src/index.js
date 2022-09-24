import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Nav from './Nav';
import Footer from './Footer';
import Artists from './Artists';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Nav />
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="artists" element={<Artists />} />
        </Routes>
        <Footer />
    </BrowserRouter>
);
