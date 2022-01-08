// @flow
import { LayoutActionTypes } from './layout.constant';

import * as layoutConstants from '../../constants/layout.constant';

const INIT_STATE = {
    layoutType: layoutConstants.LAYOUT_VERTICAL,
    layoutWidth: layoutConstants.LAYOUT_WIDTH_BOXED,
    leftSideBarTheme: layoutConstants.LEFT_SIDEBAR_THEME_DARK,
    leftSideBarType: layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED,
    showRightSidebar: false,
};

const Layout = (state = INIT_STATE, action) => {
    switch (action.type) {
        case LayoutActionTypes.CHANGE_LAYOUT:
            return {
                ...state,
                layoutType: action.payload,
            };
        case LayoutActionTypes.CHANGE_LAYOUT_WIDTH:
            return {
                ...state,
                layoutWidth: action.payload,
            };
        case LayoutActionTypes.CHANGE_SIDEBAR_THEME:
            return {
                ...state,
                leftSideBarTheme: action.payload,
            };
        case LayoutActionTypes.CHANGE_SIDEBAR_TYPE:
            return {
                ...state,
                leftSideBarType: action.payload,
            };
        case LayoutActionTypes.TOGGLE_RIGHT_SIDEBAR:
            return {
                ...state,
                showRightSidebar: !state.showRightSidebar,
            };
        case LayoutActionTypes.SHOW_RIGHT_SIDEBAR:
            return {
                ...state,
                showRightSidebar: true,
            };
        case LayoutActionTypes.HIDE_RIGHT_SIDEBAR:
            return {
                ...state,
                showRightSidebar: false,
            };
        default:
            return state;
    }
};

export default Layout;
