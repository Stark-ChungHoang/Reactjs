import React, { Component } from 'react';

class Databiding extends Component {
    address = "82 ung van Khiem,Binh Thanh";
    state = {
        isFine : true,
        // a: 1;
        // b: 2;
    };
    


    displayDestination = ()=> {
        if(this.state.isFine ) {
            return <p>Cyber Soft</p> ;
        }
        return <p>Cyber Core</p>;
    }
    decideDestination = (isFine)=> {
        return ()=> {
            this.setState({
                isFine: isFine 
            })
            console.log(this.state.isFine);
        };

    };
    

    showMessage () {
        alert('hello world');
    }
    showMessageWithThis = ()=> {
        alert('this.address');
    }
    // closure 
    showMessageWithParams = (message)=> {
        return ()=> {
            alert('message');
        };
    };
    // luon luon dung arrow function 
    // neu co 1 ham co tham so,thi phai dung closure de gan tham so cho function 
    render() {
        const lecture = 'chung hoang';
        return (
            <div>
                <button onclick = {this.decideDestination(true)}>Fine</button>
                <button onclick = {this.decideDestination(false)}>Sick</button>

                {this.displayDestination()}
                {/* <h1>Cyber Soft</h1>
                <p>{this.address}</p>
                <p>{1 + 1}</p>
                <p>{lecture}</p>
                <button onClick = {this.showMessage}>Show Message</button>
                <button onClick = {this.showMessageWithThis}>Show Message with this</button>
                <button onClick = {this.showMessageWithParams('hello')}>Show Message with params</button> */}
            </div>
        );
    }
}

export default Databiding;