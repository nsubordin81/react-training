import React from 'react';

import { CarForm } from './car-form';
import { DynamicTableHeaders } from '../table/table-header';
import { DynamicTableBody } from '../table/table-body';

export class TaylorsCarEmporium extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            carList: this.props.myCars.slice()
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            carList: props.myCars.slice()
        });
    }

    addCar = (newCar) => {
        this.setState({
            carList: this.state.carList.concat([newCar])
        }, () => {console.log(this.state.carList)});
    }

    deleteCar = (carId) => {
        this.setState({
            carList: this.state.carList.filter((element) => element.id !== carId)
        })
    }

    saveMe = (newCar) => {
        this.setState({
            carList: this.state.carList.concat([newCar])
        }, () => {console.log(this.state.carList)});
    }

    
    render() {
        return (
            <div>
                <h1>Taylor's Car Emporium</h1>                
                <table>
                  <DynamicTableHeaders headers={this.props.mySpecs} />
                  <DynamicTableBody items={this.state.carList} deleteMe={this.deleteCar} saveMe={this.saveMe} />   
                </table>
            </div>
        );
    }
}