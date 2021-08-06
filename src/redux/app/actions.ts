import { createAction } from '@reduxjs/toolkit';

import { SET_COLOR_THEME, SET_SELECTED_PAGE } from './types';

export enum ColorTheme {
    LIGHT = 0,
    DARK = 1,
}

export enum SelectedPage {
    HOME = 0,
    PROJECTS = 1,
    SKILLS = 2,
    ERROR = 3,
}

export const setColorTheme = createAction<ColorTheme>(SET_COLOR_THEME);
export const setSelectedPage = createAction<SelectedPage>(SET_SELECTED_PAGE);