import React, { Component } from 'react';

class MovieItem extends Component {
    render() {
        return (
                   <div className="card">
                     <img src={this.props.data.hinhAnh} alt="movi"/>
                        <h4>{this.props.data.tenPhim}</h4>
                        <p>
                            {this.props.data.moTa}

                   </p>
               </div>
           
        );
    }
}

export default MovieItem;