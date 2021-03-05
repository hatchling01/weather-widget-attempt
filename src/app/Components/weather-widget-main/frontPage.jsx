import React, {Component } from 'react';
class name extends Component{
    constructor(props) {
        super(props);
        this.state = {
            place: ""
        };
        this.placeChange = this.placeChange.bind(this);
    }
    placeChange(e) {
        this.setState({
            place: e.target.value
        });
    }
    render(){
        return (
            <form id="form" style="height: 45px;" onSubmit="myFunction()">
    <input placeholder="Enter City" type="text"  id="userInput" style="height: 35px; width: 180px;" onChange={this.placeChange} />
    <input style="height:35px ; " type="submit" />
</form>
            
        )
    }
}