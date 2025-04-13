import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { lightTheme, darkTheme } from './themes/theme';
import GlobalStyles from './GlobalStyles';

import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import ProfilePage from './components/ProfilePage';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => 
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <Header toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;