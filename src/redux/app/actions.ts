import { createAction } from '@reduxjs/toolkit';

import { SET_COLOR_THEME, SET_IS_OVERLAY_SHOWN, SET_METRICS, SET_SELECTED_PAGE } from './types';

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

export type Metrics = {
    width: number,
    height: number,
}

export const setColorTheme = createAction<ColorTheme>(SET_COLOR_THEME);
export const setSelectedPage = createAction<SelectedPage>(SET_SELECTED_PAGE);
export const setIsOverlayShown = createAction<boolean>(SET_IS_OVERLAY_SHOWN);
export const setMetrics = createAction<Metrics>(SET_METRICS);