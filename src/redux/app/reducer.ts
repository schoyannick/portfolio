import { createReducer } from '@reduxjs/toolkit';
import { ColorTheme, SelectedPage, setColorTheme, setIsOverlayShown, setMetrics, setSelectedPage } from './actions';

const initialState = {
    colorTheme: ColorTheme.LIGHT,
    selectedPage: SelectedPage.HOME,
    isOverlayShown: false,
    metrics: {
        width: 0,
        height: 0, 
    },
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

    builder.addCase(setMetrics, (draft, action) => {
        draft.metrics = action.payload;
    });
});

export default reducer;