// @flow
import { LayoutActionTypes } from './layout.constant';

export const changeLayout = (layout) => ({
    type: LayoutActionTypes.CHANGE_LAYOUT,
    payload: layout,
});

export const changeLayoutWidth = (width) => ({
    type: LayoutActionTypes.CHANGE_LAYOUT_WIDTH,
    payload: width,
});

export const changeSidebarTheme = (theme) => ({
    type: LayoutActionTypes.CHANGE_SIDEBAR_THEME,
    payload: theme,
});

export const changeSidebarType = (sidebarType) => ({
    type: LayoutActionTypes.CHANGE_SIDEBAR_TYPE,
    payload: sidebarType,
});

export const toggleRightSidebar = () => ({
    type: LayoutActionTypes.TOGGLE_RIGHT_SIDEBAR,
    payload: null,
});

export const showRightSidebar = () => ({
    type: LayoutActionTypes.SHOW_RIGHT_SIDEBAR,
    payload: null,
});

export const hideRightSidebar = () => ({
    type: LayoutActionTypes.HIDE_RIGHT_SIDEBAR,
    payload: null,
});
