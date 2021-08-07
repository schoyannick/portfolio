import { RootState } from '../store';
import { ColorTheme, SelectedPage } from './actions';

export const getColorTheme = (state: RootState): ColorTheme => state.app.colorTheme;

export const getSelectedPage = (state: RootState): SelectedPage => state.app.selectedPage;

export const getIsOverlayShown = (state: RootState): boolean => state.app.isOverlayShown;
