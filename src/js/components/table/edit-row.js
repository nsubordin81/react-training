import React from 'react';

export class EditRow extends React.Component {
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

        this.props.saveMe(newCar)

        this.setState({
            carMake:  '',
            carModel: '',
            carYear:  '',
            carColor: '',
            carPrice: '',
        })
    }

    cancelNewCar = (e) => {
        this.props.cancelMe();
    }

    render() {
        return (
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

                    <td>
                        <button type="button" onClick={this.addNewCar}>Save</button>
                    </td>

                    <td>
                        <button type="button" onClick={this.cancelNewCar}>Cancel</button>
                    </td>
                </tr>
        );
    }
}