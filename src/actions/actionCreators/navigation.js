import navigationActionTypes from '../actionTypes/navigation.js';

export const selectNavItem = (navItem) => {
    return {
        type: navigationActionTypes.SELECT_NAVIGATION_ITEM,
        selected: navItem
    }
};

