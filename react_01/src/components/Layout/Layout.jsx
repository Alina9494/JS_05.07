import React, { Component } from 'react';
import ListClass from '../ListClass/ListClass';


class Layout extends Component {
    constructor(props) {
        super(props)
    };

    render() {

        const list = [
            {type: `turtle`, icon: `🐢`},
            {type: `octopus`, icon: `🐙`},
            {type: `fish`, icon: `🐠`},
            {type: `flamingo`, icon: `🦩`},
            {type: `penguin`, icon: `🐧`}
        ].map((item) => ({ ...item, active: false }));

        return (
       <div>
            <ListClass list={list} />
       </div>
    );
    }
};

export default Layout;


