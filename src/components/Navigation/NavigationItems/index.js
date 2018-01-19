import React from 'react';
import styled from 'styled-components';

import FullScreenNavigationItems from './FullScreen.jsx';
import MobileNavigationItems from './Mobile';

export default class NavigationItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isMobile: undefined};
        this.updateScreenSize = this.updateScreenSize.bind(this);
    }

    componentDidMount() {
        this.updateScreenSize();

        // Throttles resize
        var resizeTimer;
        var that = this;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                that.updateScreenSize();
            }, 250)
        });
    }

    updateScreenSize() {
        const screenWidth = window.innerWidth;
        const MOBILE_MAX_WIDTH_PX = 768;
        var isMobile = (screenWidth <= MOBILE_MAX_WIDTH_PX);
        if (isMobile != this.state.isMobile) {
            this.setState({isMobile: isMobile});
        }
    }

    renderMobile() {
        return(
            <MobileNavigationItems
                items={this.props.items}
                mobileMenuImg={this.props.mobileMenuImg}
            />
        );
    }

    renderFullScreen() {
        return(
            <FullScreenNavigationItems
                items={this.props.items}
            />
        );
    }

    render() {
        if (this.state.isMobile) {
            return this.renderMobile();
        } else {
            return this.renderFullScreen();
        }
    }
}
