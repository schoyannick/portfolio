import { createGlobalStyle} from 'styled-components';

export const lightTheme = {
    body: 'rgb(239, 241, 245)',
    text: '#363537',
    reverse: 'white',
    hover: 'rgb(197 197 202)',
    scrollbar: '',
    primary: 'rgb(68, 51, 255)',
    grey: 'rgb(90, 96, 114)',
};

export const darkTheme = {
    body: 'hsl(210deg, 30%, 8%)',
    text: '#FAFAFA',
    reverse: 'black',
    hover: '#5f5f69',
    scrollbar: '#00000080',
    primary: 'rgb(87, 115, 255)',
    grey: 'rgb(156, 168, 180)',
};

export const GlobalStyles = createGlobalStyle<{
        theme: {
            body: string,
            text: string,
            hover: string,
            scrollbar: string,
            primary: string,
            grey: string,
            reverse: string,
        },
        isOverlayShown: boolean
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
    overflow: ${({ isOverlayShown }) => isOverlayShown ? 'hidden' : 'auto'};

    --primary-color: ${({ theme }) => theme.primary};
    --background-color: ${({ theme}) => theme.body};
    --text-color: ${({ theme }) => theme.text};
    --hover-color: ${({ theme }) => theme.hover};
    --scrollbar-color: ${({ theme }) => theme.scrollbar};
    --grey-color: ${({ theme }) => theme.grey};
    --text-color-reverse: ${({ theme }) => theme.reverse};

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

    p {
        margin: 0;
    }

    .skill-icon {
        color: var(--text-color);
        margin-bottom: 10px;
        width: 80px;
        height: 80px;
    }
  }
`;