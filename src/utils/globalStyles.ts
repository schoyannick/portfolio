import { createGlobalStyle} from 'styled-components';

export const lightTheme = {
    body: '#FFF',
    text: '#363537',
    hover: '',
    scrollbar: '',
};

export const darkTheme = {
    body: '#363537',
    text: '#FAFAFA',
    hover: '#5f5f69',
    scrollbar: '#00000080'
};

export const GlobalStyles = createGlobalStyle<{
        theme: {
            body: string,
            text: string,
            hover: string,
            scrollbar: string,
        }
    }>`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: background-color .5s linear;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-color: #80808080 transparent;
    scrollbar-width: thin;

    --background-color: ${({ theme}) => theme.body};
    --text-color: ${({ theme }) => theme.text};
    --hover-color: ${({ theme }) => theme.hover};
    --scrollbar-color: ${({ theme }) => theme.scrollbar};

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        width: 5px;
        background-color: rgba(0,0,0,0.5);
        border-radius: 20px
    }

    &::-webkit-scrollbar-track {
        background-color: transparent
    }

    .header {
        transition: background-color .5s linear;
        background-color: ${({ theme }) => theme.body};
    }

    .styled-li {
        &:after {
            transition: width .3s, background-color .5s linear;
            background-color: ${({ theme }) => theme.text};
        }
    }
  }
`;