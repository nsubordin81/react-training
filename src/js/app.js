import React from 'react'
import ReactDOM from 'react-dom'

const colors = ['green', 'yellow','black','red','white','blue']

class ColorHeader extends React.Component {
   render() {
       return <h1>Color Tool</h1>;
   } 
}

class ColorList extends React.Component {
    static propTypes = {
        items: React.PropTypes.array
    };

    render() {    
        return <ul>
                    {
                        this.props.items.map(item => 
                        <li>{item}</li>
                    )}
                </ul>
    };
}

class ColorTool extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newColor: ''
        };

        // this is actually creating a new onChange function on the instance that is equal to 
        // the result of binding the parent's onChange function to the instance
        this.onChange = this.onChange.bind(this);
    }

    static propTypes = {
        myColors: React.PropTypes.array
    };

    onChange(e) {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
    }
    
    render() {
        //return React.createElement('h1', null, 'Color List')
        return (
            <div> 
                <ColorHeader />
                <ColorList items={this.props.myColors} />
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

const cars = [{make: 'toyota', model: 'camry', year: 2015, color: 'black', price: '$10,000'}, {make: 'honda', model: 'civic', year: 2009, color: 'white', price: '$9,000'}, {make: 'ford', model: 'focus', year: 2000, color: 'red', price: '$5,000'}];

const carSpecs = ['Make','Model','Year','Color','Price'];

class TaylorsCarEmporium extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            carMake:  '',
            carModel: '',
            carYear:  '',
            carColor: '',
            carPrice: '',
            carList: this.props.myCars
        }

        this.onChange = this.onChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

//you can pass a callback to setState that runs right after the state is updated.
//set state normally registers the state change with a list of updates that will be batch applied later
    onChange(e) {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    handleClick(e) {
        const newCar = {
         make: this.state.carMake,
         model: this.state.carModel,
         year: this.state.carYear,
         color: this.state.carColor,
         price: this.state.carPrice
        }

        this.setState({
            carMake:  '',
            carModel: '',
            carYear:  '',
            carColor: '',
            carPrice: '',
            carList: this.state.carList.concat([newCar])
        }, () => {console.log(this.state.carList)});
        
    }
    
    thead(headers) {
        return (
            <thead>
                <tr>
                    {
                    headers.map(header =>
                        <th key={header}>{header}</th>
                    )}
                </tr>
            </thead>
        );
    }

    tbody(items) {
        return (
            <tbody>
                {
                    items.map((item, index) =>
                    <tr key={index}>
                        <td>{item.make}</td>
                        <td>{item.model}</td>
                        <td>{item.year}</td>
                        <td>{item.color}</td>
                        <td>{item.price}</td>
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
                  {this.thead(this.props.mySpecs)}
                  {this.tbody(this.state.carList)}   
                </table>
                <form>
                <table>
                    {this.thead(this.props.mySpecs)}
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
                <button type="button" onClick={this.handleClick}>Add Car</button>
            </form>
            </div>
        );
    }
}

ReactDOM.render(<TaylorsCarEmporium myCars={cars} mySpecs={carSpecs}/>, document.querySelector('main'))
// ReactDOM.render(<ColorTool myColors={colors} />, document.querySelector('main'))