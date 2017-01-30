import React from 'react'
import ReactDOM from 'react-dom'

const colors = ['green', 'yellow','black','red','white','blue']

class ColorList extends React.Component {
    
    
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
            </div>
        );
    }
}

const cars = [{make: 'toyota', model: 'camry', year: 2015, color: 'black', price: '$10,000'}, {make: 'honda', model: 'civic', year: 2009, color: 'white', price: '$9,000'}, {make: 'ford', model: 'focus', year: 2000, color: 'red', price: '$5,000'}]

class TaylorsCarEmporium extends React.Component {
    
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
            </div>
        );
    }
}

ReactDOM.render(<TaylorsCarEmporium myCars={cars}/>, document.querySelector('main'))
// ReactDOM.render(<ColorList myColors={colors} />, document.querySelector('main'))