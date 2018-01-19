import React from 'react';
import styled from 'styled-components';

const MobileMenuButtonWrapper = styled.div`
    display: flex;
    height: 100%;
    cursor: pointer;
`;

const MobileMenuButtonImg = styled.img`
    height: 100%;
`;

export default class MobileMenuButton extends React.Component {
    render(){
        return(
            <MobileMenuButtonWrapper onClick={this.props.toggleNav} >
                <MobileMenuButtonImg src={this.props.imgSrc} />
            </MobileMenuButtonWrapper>
        );
    }
}
