import React, { Component } from 'react';

class Demo extends Component {
    render() {
        return (
            <div>
                DEMOOOOO
                <p>User name : {this.props.name}</p>
                <p>User age : {this.props.age}</p>
            </div>
        );
    }
}

export default Demo;