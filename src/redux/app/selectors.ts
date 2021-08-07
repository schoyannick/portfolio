import { RootState } from '../store';
import { ColorTheme, Metrics, SelectedPage } from './actions';

export const getColorTheme = (state: RootState): ColorTheme => state.app.colorTheme;

export const getSelectedPage = (state: RootState): SelectedPage => state.app.selectedPage;

export const getIsOverlayShown = (state: RootState): boolean => state.app.isOverlayShown;

export const getMetrics = (state: RootState):  Metrics => state.app.metrics;