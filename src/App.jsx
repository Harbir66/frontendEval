import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import { HOME_ROUTE, ERROR_ROUTE } from './constants/routes';
import { Home, Error, PageNotFound } from './pages';
import { fetchPreferredTheme } from './redux/slices/theme';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchPreferredTheme());
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route path={`${ERROR_ROUTE}/:errorCode?`} element={<Error />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
