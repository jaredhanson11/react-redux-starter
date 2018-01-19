import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const NavigationItemsWrapper = styled.div`
    height: 100%;
    width: 50%;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: stretch;
    align-content: center;
`;

const NavigationItem = styled(Link)`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-grow: 1;
    text-decoration: none;
`;


export default class FullScreenNavigationItems extends React.Component {
    render() {
        var NavItems = this.props.items.map((item) => {
            var route = '/' + item.route;
            return(
                <NavigationItem
                    to={route}
                    key={item.route}
                >
                    {item.name}
                </NavigationItem>
            );
        });
        return(
            <NavigationItemsWrapper>
                {NavItems}
            </NavigationItemsWrapper>
        );
    }
}
