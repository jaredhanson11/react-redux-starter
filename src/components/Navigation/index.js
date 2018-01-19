import React from 'react';
import styled from 'styled-components';

import SiteLogo from './SiteLogo.jsx';
import NavigationItems from './NavigationItems';

const NavigationWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    height: 50px;
    width: 100%;
`;

export default class Navigation extends React.Component {
    render() {
        return(
            <NavigationWrapper>
                <SiteLogo
                    imgSrc={this.props.navigationConfig.siteLogo.img}
                    route={this.props.navigationConfig.siteLogo.route}
                />
                <NavigationItems
                    items={this.props.navigationConfig.navigationItems}
                    mobileMenuImg={this.props.navigationConfig.mobileMenuImg}
                />
            </NavigationWrapper>
        );
    }
}
