import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const SideNavigationBackground = styled.div`
    display: ${({ expanded }) => expanded ? '' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
`;

const SideNavItems = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    align-content: center;
    right: 0;
    top: 0;
    height: 100%;
    width: 50%;
    background-color: rgba(0,0,0,.8);
`;

const SideNavItem = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: flex-start;
    text-decoration: none;
    width: 100%;
    padding: 20px 0 20px 0;
`;

const ExitNavButton = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    font-size: 2em;
    padding: 10px;
    > div {
        cursor: pointer;
    }
`;

export default class SideNavigationItems extends React.Component {
    makeExitButton() {
        const ExitButton = (
            <ExitNavButton>
                <div onClick={this.props.closeNav}>&#10006;</div>
            </ExitNavButton>
        );
        return ExitButton;
    }

    makeNavItems(){
        var NavItems = this.props.items.map((item) => {
            var route = '/' + item.route;
            return(
                <SideNavItem
                    onClick={this.props.closeNav}
                    to={route}
                    key={item.route}
                >
                    {item.name}
                </SideNavItem>
            );
        });
        return NavItems;
    }

    render() {
        const ExitButton = this.makeExitButton();
        const NavItems = this.makeNavItems();
        return(
            <SideNavigationBackground expanded={this.props.expanded}>
                <SideNavItems>
                    { ExitButton }
                    { NavItems }
                </SideNavItems>
            </SideNavigationBackground>
        );
    }
}
