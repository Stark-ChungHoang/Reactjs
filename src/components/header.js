// class component demo 
import React from "react";
import './header.css';

export class Header extends React.Component {
    render() {
        return (
            <div className = "header">
                <h1>Header</h1>
            <nav>
                <a>love</a>
            </nav>
            </div>
        )
    }
}