import React from 'react';

import MobileMenuButton from './MobileMenuButton.jsx';
import SideNavigationItems from './SideNavigationItems.jsx';

export default class MobileNavigationItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {sideNavExpanded: false};
        this.toggleSideNav = this.toggleSideNav.bind(this);
    }

    toggleSideNav(forceClose=false) {
        var that = this;
        function _toggleSideNav() {
            if (forceClose == true) {
                that.setState({sideNavExpanded: false});
            } else {
                const toggled = !(that.state.sideNavExpanded);
                that.setState({sideNavExpanded: toggled});
            }
        };
        return _toggleSideNav;
    }

    render() {
        return(
            <div>
                <MobileMenuButton
                    toggleNav={this.toggleSideNav()}
                    imgSrc={this.props.mobileMenuImg}
                />
                <SideNavigationItems
                    items={this.props.items}
                    expanded={this.state.sideNavExpanded}
                    closeNav={this.toggleSideNav(true)}
                />
            </div>
        );
    }
};
