const IMG_FOLDER_PATH = './imgs/';

const IMG_MAPPING = {
    // imgIdentifier: image filename
    siteLogo: 'sample-logo.png',
    mobileMenuButton: 'mobile-menu-button.png'
};

export var getImgUrl = (imageIdentifier) => {
    return IMG_FOLDER_PATH + IMG_MAPPING[imageIdentifier];
};

export default {
    getImgUrl
};
