import React from 'react'

import { DynamicTableHeaders } from '../table/table-header';

export class CarForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            carMake:  '',
            carModel: '',
            carYear:  '',
            carColor: '',
            carPrice: ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    addNewCar = (e) => {
         const newCar = {
         make: this.state.carMake,
         model: this.state.carModel,
         year: this.state.carYear,
         color: this.state.carColor,
         price: this.state.carPrice
        }

        this.props.addCar(newCar)

        this.setState({
            carMake:  '',
            carModel: '',
            carYear:  '',
            carColor: '',
            carPrice: '',
        })
    }

    render() {
        return (
            <form>
                <table>
                    <DynamicTableHeaders headers={this.props.mySpecs} />
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="car-make-input"></label>
                                <input type="text" id="car-make-input" name="carMake"
                                    value={this.state.carMake} onChange={this.onChange} />
                            </td>
                        
                            <td>
                                <label htmlFor="car-model-input"></label>
                                <input type="text" id="car-model-input" name="carModel"
                                    value={this.state.carModel} onChange={this.onChange} />
                            </td>
                       
                            <td>
                                <label htmlFor="car-year-input"></label>
                                <input type="text" id="car-year-input" name="carYear"
                                    value={this.state.carYear} onChange={this.onChange} />
                            </td>
                       
                            <td>
                                <label htmlFor="car-color-input"></label>
                                <input type="text" id="car-color-input" name="carColor"
                                    value={this.state.carColor} onChange={this.onChange} />
                            </td>
                        
                            <td>
                                <label htmlFor="car-price-input"></label>
                                <input type="text" id="car-price-input" name="carPrice"
                                    value={this.state.carPrice} onChange={this.onChange} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="button" onClick={this.addNewCar}>Add Car</button>
            </form>
        );
    }
}
