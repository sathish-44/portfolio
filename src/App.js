import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles} from './theme'
import { Routes, Route } from  'react-router-dom'
import NavBar from './components/Header'
import Home from './components/Home'

const StyledApp = styled.div`
  color : ${(props) => props.theme.fontColor}
`;

function App() {
  const [theme, setTheme] = useState('light')
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <NavBar themeToggler={themeToggler} />
      <StyledApp>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
