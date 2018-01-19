import imgConfig from './images.js';

var createNavItem = (name, route=undefined) => {
    route = route != undefined ? route : name.toLowerCase().replace(' ', '-');
    return {
        name: name,
        route: route
    };
};

export const navigationItems = [
    createNavItem('Home', ''),
    createNavItem('Music'),
    createNavItem('Videos'),
    createNavItem('Contact')
];

export const siteLogo = {
    img: imgConfig.getImgUrl('siteLogo'),
    route: ''
};

export const mobileMenuImg = imgConfig.getImgUrl('mobileMenuButton');

export default {
    navigationItems,
    siteLogo,
    mobileMenuImg
};
