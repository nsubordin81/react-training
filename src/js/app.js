import React from 'react'
import ReactDOM from 'react-dom'

const colors = ['green', 'yellow','black','red','white','blue']

class ColorList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newColor: ''
        };

        // this is actually creating a new onChange function on the instance that is equal to 
        // the result of binding the parent's onChange function to the instance
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
    }
    
    render() {
        //return React.createElement('h1', null, 'Color List')
        return (
            <div> 
                <h1>Color List</h1>
                <ul>
                    {
                        this.props.myColors.map(myColor => 
                        <li>{myColor}</li>
                    )}
                </ul>
                <form>
                    <div>
                        <label htmlFor="new-color-input">New Color</label>
                        <input type="text" id="new-color-input" name="newColor"
                            value={this.state.newColor} onChange={this.onChange} />
                    </div>
                </form>
            </div>
        );
    }
}

const cars = [{make: 'toyota', model: 'camry', year: 2015, color: 'black', price: '$10,000'}, {make: 'honda', model: 'civic', year: 2009, color: 'white', price: '$9,000'}, {make: 'ford', model: 'focus', year: 2000, color: 'red', price: '$5,000'}]

class TaylorsCarEmporium extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            carMake:  '',
            carModel: '',
            carYear:  '',
            carColor: '',
            carPrice: ''
        }

        this.onChange = this.onChange.bind(this)
    }

//you can pass a callback to setState that runs right after the state is updated.
//set state normally registers the state change with a list of updates that will be batch applied later
    onChange(e) {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        }, () => console.log(this.state));
    }
    
    thead() {
        return (
            <thead>
                <tr>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Color</th>
                    <th>Price</th>
                </tr>
            </thead>
        );
    }

    tbody() {
        return (
            <tbody>
                {
                    this.props.myCars.map(myCar =>
                    <tr>
                        <td>{myCar.make}</td>
                        <td>{myCar.model}</td>
                        <td>{myCar.year}</td>
                        <td>{myCar.color}</td>
                        <td>{myCar.price}</td>
                    </tr>
                )}
            </tbody>
        );
    }
    
    render() {
        return (
            <div>
                <h1>Taylor's Car Emporium</h1>                
                <table>
                  {this.thead()}
                  {this.tbody()}   
                </table>
                <form>
                <table>
                    <thead>
                        <tr>
                            <th>Make</th>
                            <th>Model</th>
                            <th>Year</th>
                            <th>Color</th>
                            <th>Price</th>
                        </tr>
                    </thead>
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
            </form>
            </div>
        );
    }
}

ReactDOM.render(<TaylorsCarEmporium myCars={cars}/>, document.querySelector('main'))
// ReactDOM.render(<ColorList myColors={colors} />, document.querySelector('main'))