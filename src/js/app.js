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

class ColorForm extends React.Component {
    static propTypes = {
        addColor: React.PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            newColor: ''
        };
    }

    onChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    addNewColor = (e) => {
        this.props.addColor(this.state.newColor);
        this.setState({
            newColor: ''
        });
    }

    render() {
        return (
        <form>
            <div>
                <label htmlFor="new-coor-input"> New Color </label>
                <input type="text" id="new-color-input" name="newColor"
                    value={this.state.newColor} onChange={this.onChange} />
            </div>
            <button type="button" onClick={this.addNewColor}>Add Color</button> 
        </form>
        );
    }
}

class ColorTool extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            colors: this.props.myColors.concat()
        };
    }

    static propTypes = {
        myColors: React.PropTypes.array
    };


    addColor = (newColor) => {
        this.setState({
            colors: this.state.colors.concat(newColor)
        })
    }
    
    render() {
        return (
            <div> 
                <ColorHeader />
                <ColorList items={this.state.colors} />
                <ColorForm addColor={this.addColor} />
            </div>
        );
    }
}

const cars = [{make: 'toyota', model: 'camry', year: 2015, color: 'black', price: '$10,000'}, {make: 'honda', model: 'civic', year: 2009, color: 'white', price: '$9,000'}, {make: 'ford', model: 'focus', year: 2000, color: 'red', price: '$5,000'}];

const carSpecs = ['Make','Model','Year','Color','Price'];


class DynamicTableHeaders extends React.Component {
    render() {
        return (
            <thead>
                <tr>
                    {
                        this.props.headers.map(header =>
                        <th key={header}>{header}</th>
                    )}
                </tr>
            </thead>
        );
    }
}

class DynamicTableBody extends React.Component {
    render() {
         return (
            <tbody>
                {
                    this.props.items.map((item, index) =>
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
}

class CarForm extends React.Component {
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

class TaylorsCarEmporium extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            carList: this.props.myCars
        }
    }

    addCar = (newCar) => {
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
                  <DynamicTableBody items={this.state.carList} />   
                </table>
                <CarForm addCar={this.addCar} mySpecs={this.props.mySpecs}/>
            </div>
        );
    }
}

ReactDOM.render(<TaylorsCarEmporium myCars={cars} mySpecs={carSpecs}/>, document.querySelector('main'))
// ReactDOM.render(<ColorTool myColors={colors} />, document.querySelector('main'))