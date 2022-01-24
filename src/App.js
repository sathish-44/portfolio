import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles} from './theme'

const StyledApp = styled.div`
  color : ${(props) => props.theme.fontColor}
`;

function App() {
  const [theme, setTheme] = useState('dark')

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
          SATHISH
          <button onClick={themeToggler}>
            Change theme
          </button>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
