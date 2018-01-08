import React from 'react';
import styled from 'styled-components';

import styleConfig from '../../config/styleConfig.js';

import SiteLogo from './SiteLogo.jsx';
import MobileMenuButton from './MobileMenuButton.jsx';
import NavItems from './NavItems.jsx';

const TopBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: ${styleConfig.NAV_BAR_HEIGHT};
    width: 100%;
`;

const SideBar = styled.div`
    display: none;
    top: ${styleConfig.NAV_BAR_HEIGHT};
    right: 0;
    width: 50%;
    height: calc(100vh - ${styleConfig.NAV_BAR_HEIGHT});

    ${styleConfig.devBorder('blue')}

    ${styleConfig.MOBILE_MEDIA_QUERY} {
        display: ${(props) => props.expanded ? 'flex;': 'none;'};
        flex-direction: column;
        align-items: center;
   }
`;

export default class NavigationContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarExpanded: false
        };
    }
    render() {
        return(
            <div>
                <TopBar>
                    <SiteLogo
                        imgSrc={this.props.imgs.siteLogo}
                    />
                    <MobileMenuButton
                        imgSrc={this.props.imgs.mobileMenuButton}
                    />
                    <NavItems
                        items={this.props.items}
                        activeItem={this.props.activeItem}
                        selectItem={this.props.navigationActions.selectNavItem}
                    />
                </TopBar>
                <SideBar expanded={this.state.sidebarExpanded}>
                    <NavItems
                        items={this.props.items}
                        activeItem={this.props.activeItem}
                        selectItem={this.props.navigationActions.selectNavItem}
                    />
                </SideBar>
            </div>
        );
    }
}
