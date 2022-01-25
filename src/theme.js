import { createGlobalStyle }  from 'styled-components'

export const lightTheme = { 
    body : '#fff',
    fontColor : '#132F4C'
}

export const darkTheme = {
    body : '#292929',
    fontColor : '#E7EBF0'
}

export const GlobalStyles = createGlobalStyle `
    body {
        background-color : ${props => props.theme.body}
    }
`