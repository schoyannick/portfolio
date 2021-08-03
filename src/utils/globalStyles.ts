import { createGlobalStyle} from 'styled-components';

export const lightTheme = {
    body: '#FFF',
    text: '#363537',
    hover: '',
};

export const darkTheme = {
    body: '#363537',
    text: '#FAFAFA',
    hover: '#5f5f69',
};

export const GlobalStyles = createGlobalStyle<{
        theme: {
            body: string,
            text: string,
            hover: string,
        }
    }>`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --background-color: ${({ theme}) => theme.body};
    --text-color: ${({ theme }) => theme.text};
    --hover-color: ${({ theme }) => theme.hover};
  }
`;