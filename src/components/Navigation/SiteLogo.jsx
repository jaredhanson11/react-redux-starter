import React from 'react';
import styled from 'styled-components';

import styleConfig from '../../config/styleConfig.js';

const SiteLogoWrapper = styled.div`
    height: 100%;
    padding-right: 10px;
    padding-left: 10px;
    cursor: pointer;
`;

const SiteLogoImg = styled.img`
    height: 100%;
`;

export default class SiteLogo extends React.Component {
    render() {
        return (
            <SiteLogoWrapper>
                <SiteLogoImg src={this.props.imgSrc} />
            </SiteLogoWrapper>
        );
    }
}
