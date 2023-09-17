// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { HOME_ROUTE, ERROR_ROUTE } from './constants/routes';
// import { Header, Footer } from './components';
import { Home, Error, PageNotFound } from './pages';

import { ThemeContextProvider } from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeContextProvider>
          <Routes>
            <Route path={HOME_ROUTE} element={<Home />} />
            <Route path={`${ERROR_ROUTE}/:errorCode?`} element={<Error />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </ThemeContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
