import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SiteLogoWrapper = styled(Link)`
    height: 100%;
    padding-right: 10px;
    padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    cursor: pointer;
`;

const SiteLogoImg = styled.img`
    height: 100%;
`;

export default class SiteLogo extends React.Component {
    render() {
        return (
            <SiteLogoWrapper to={this.props.route}>
                <SiteLogoImg src={this.props.imgSrc} />
            </SiteLogoWrapper>
        );
    }
}
