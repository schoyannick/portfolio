import { createReducer } from '@reduxjs/toolkit';
import { ColorTheme, SelectedPage, setColorTheme, setIsOverlayShown, setSelectedPage } from './actions';

const initialState = {
    colorTheme: ColorTheme.LIGHT,
    selectedPage: SelectedPage.HOME,
    isOverlayShown: false,
};

const reducer = createReducer(initialState, (builder) => {
    builder.addCase(setColorTheme, (draft, action) => {
        draft.colorTheme = action.payload;
    });

    builder.addCase(setSelectedPage, (draft, action) => {
        draft.selectedPage = action.payload;
    });

    builder.addCase(setIsOverlayShown, (draft, action) => {
        draft.isOverlayShown = action.payload;
    });
});

export default reducer;