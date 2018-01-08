import React from 'react';
import styled from 'styled-components';

import styleConfig from '../../config/styleConfig.js';

const MobileMenuButtonWrapper = styled.div`
    display: none;
    height: 100%;
    padding-right: 10px;
    padding-left: 10px;
    cursor: pointer;

    ${styleConfig.MOBILE_MEDIA_QUERY} {
        display: flex;
    }
`;

const MobileMenuButtonImg = styled.img`
    height: 100%;
`;

export default class MobileMenuButton extends React.Component {
    render(){
        return(
            <MobileMenuButtonWrapper>
                <MobileMenuButtonImg src={this.props.imgSrc} />
            </MobileMenuButtonWrapper>
        );
    }
}
