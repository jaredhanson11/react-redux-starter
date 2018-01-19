import React from 'react';
import { connect } from 'react-redux';
import {
    Route,
    Switch
} from 'react-router-dom';
import Immutable from 'immutable';
import styled from 'styled-components';

import navigationConfig from './config/navigation.js';
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
        return (
            <AppWrapper>
                <Navigation
                    navigationConfig={navigationConfig}
                    navigationState={this.props.navigationState}
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
    const navigationActions = {};

    return {
        navigationActions
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
