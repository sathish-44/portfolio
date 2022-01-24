import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles} from './theme'
import NavBar from './components/Header'

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
          SATHISH
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
