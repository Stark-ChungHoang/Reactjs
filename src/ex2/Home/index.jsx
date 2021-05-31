import React, { Component } from 'react';
import Header from '../../ex2/Header/header';
import Carausel from '../Carausel';
import Card from '../Card';
import Content from '../Content';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Carausel />
                <Content />
                <Card />
                
            </div>
        );
    }
}

export default Home;