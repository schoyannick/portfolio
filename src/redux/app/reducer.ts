import { createReducer } from '@reduxjs/toolkit';
import { ColorTheme, SelectedPage, setColorTheme, setSelectedPage } from './actions';

const initialState = {
    colorTheme: ColorTheme.LIGHT,
    selectedPage: SelectedPage.HOME,
};

const reducer = createReducer(initialState, (builder) => {
    builder.addCase(setColorTheme, (draft, action) => {
        draft.colorTheme = action.payload;
    });

    builder.addCase(setSelectedPage, (draft, action) => {
        draft.selectedPage = action.payload;
    });
});

export default reducer;