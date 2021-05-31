import React, { Component } from 'react';
import redCar from '../assets/images/products/red-car.jpg';
import blackCar from '../assets/images/products/black-car.jpg';
import silveCar from '../assets/images/products/silver-car.jpg';
import steelCar from '../assets/images/products/steel-car.jpg';
import iconRed from '../assets/images/icons/icon-red.jpg';
import iconBlack from '../assets/images/icons/icon-black.jpg';
import iconSilver from '../assets/images/icons/icon-silver.jpg';
import iconSteel from '../assets/images/icons/icon-steel.jpg';

class CarExercise extends Component {
    state ={
        carImage : redCar,
    };
    changeColor = (img) => {
        this.setState(
            {
            carImage: img,
        },
        ()=>{
            console.log(this.state.carImage);
        }
        );
    };

    render() {
        return (
            <div className ='container-fluid'>
                <div className="row">
                    <div className="col-8">
                        <img src={this.state.carImage} className='w-100' alt='car' />
                    </div>
                    <div className="col-4 d-flex flex-column" >
                        <img 
                        onclick = {this.changeColor(redCar)}
                         src={iconRed} className = 'w-25 mb-3'  alt='car'/>
                        <img
                        onclick = {this.changeColor(blackCar)}
                        src={iconBlack} className = 'w-25 mb-3' alt='car'/>
                        <img
                        onclick = {this.changeColor(silveCar)}
                        src={iconSilver} className = 'w-25 mb-3' alt='car'/>
                        <img 
                        onclick = {this.changeColor(steelCar)}
                        src={iconSteel} className = 'w-25 mb-3' alt='car'/>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default CarExercise;