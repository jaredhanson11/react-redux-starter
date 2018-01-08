import React from 'react';
import { connect } from 'react-redux';
import {
    Route,
    Switch
} from 'react-router-dom';
import Immutable from 'immutable';
import styled from 'styled-components';

import imgsConfig from './config/images.js';
import navigationActionCreators from './actions/actionCreators/navigation.js';

import Navigation from './components/Navigation';

const AppWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;

    display: flex;
    flex-direction: column;
`;

const MainBodyWrapper = styled.div`
`;

class App extends React.Component {
    render() {
        const navigationItems = ['Home', 'Music', 'Contact'];
        const navigationImgs = {
            mobileMenuButton: imgsConfig.getImgUrl('mobileMenuButton'),
            siteLogo: imgsConfig.getImgUrl('siteLogo')
        };
        return (
            <AppWrapper>
                <Navigation
                    items={navigationItems}
                    imgs={navigationImgs}
                    activeItem={this.props.navigationState.activeNavigationItem}
                    navigationActions={this.props.navigationActions}
                />
                <MainBodyWrapper>
                    <Switch>
                    </Switch>
                </MainBodyWrapper>
            </AppWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    const immutableState = Immutable.fromJS(state);
    const newState = immutableState.toJS();
    return newState;
};

const mapDispatchToProps = (dispatch) => {
    const navigationActions = {
        selectNavItem: (navItem) => {
            dispatch(actionCreators.navigation.selectNavItem(navItem));
        }
    };

    return {
        navigationActions
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
