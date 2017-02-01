import React from 'react'
import ReactDOM from 'react-dom'

import { ColorTool } from './components/colors/color-tool';

import { TaylorsCarEmporium } from './components/cars/taylors-car-emporium'

const colors = ['green', 'yellow','black','red','white','blue']
const cars = [{id: '1', make: 'toyota', model: 'camry', year: 2015, color: 'black', price: '$10,000'}, {id: '2', make: 'honda', model: 'civic', year: 2009, color: 'white', price: '$9,000'}, {id: '3', make: 'ford', model: 'focus', year: 2000, color: 'red', price: '$5,000'}];

const carSpecs = ['Make','Model','Year','Color','Price'];


class CarToolContainer extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            cars: []
        };
    }

    componentDidMount() {   
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(cars => {
                    this.setState({
                        cars: cars.concat()
                    })
            });
    }
    
    render() {
        return (//<div>
            <TaylorsCarEmporium
            myCars={this.state.cars} mySpecs={this.props.carSpecs} />
            // {this.state.cars.map(car =>
            //     <div>{car.color}</div>
            // )}
            // </div>
        )
    }
}

class DemoForm extends React.PureComponent {

    constructor(props) {
        super(props); 

        this.state = {
            inputText: '',
            inputNumber: 0,
            inputDate: '',
            inputRange: '',
            inputColor: '#f3a122',
            inputCheckbox: true,
            inputRadio: 'radio2',
            inputTextArea: '',
            selectDropDown: '',
            selectListBox: '',
            selectMultiSelect: []
        };
    }

    onChange = (e) => {

        let controlValue = {};

        switch (e.currentTarget.type) {
            case 'number':
                controlValue = Number(e.currentTarget.value);
                break;
            case 'checkbox':
                controlValue = e.currentTarget.checked;
                break;
            default:
                if (e.currentTarget.multiple) {
                    controlValue = Array.from(e.currentTarget.options)
                        .filter(option => option.selected)
                        .map(option => option.value);
                }

                controlValue = e.currentTarget.value;
                break;
        }

        this.setState({
            [e.currentTarget.name]: controlValue
        });
    }

    render() {
        return <form>
            <div>
                <label>Input Text:</label>
                <input type="text" name="inputText" required value={this.state.inputText} onChange={this.onChange} />
                <br /><span>{this.state.inputText}, {typeof this.state.inputText}</span>
            </div>
              <div>
                <label>Input Number:</label>
                <input type="number" name="inputNumber" value={this.state.inputNumber} onChange={this.onChange} />
                <br /><span>{this.state.inputNumber}, {typeof this.state.inputNumber}</span>
            </div>
             <div>
                <label>Input Date:</label>
                <input type="date" name="inputDate" value={this.state.inputDate} onChange={this.onChange} />
                <br /><span>{this.state.inputDate}, {typeof this.state.inputDate}</span>
            </div>
             <div>
                <label>Input Range:</label>
                <input type="range" name="inputRange" min='20' max='60' value={this.state.inputRange} onChange={this.onChange} />
                <br /><span>{this.state.inputRange}, {typeof this.state.inputRange}</span>
            </div>
             <div>
                <label>Input Color:</label>
                <input type="color" name="inputColor" value={this.state.inputColor} onChange={this.onChange} />
                <br /><span>{this.state.inputColor}, {typeof this.state.inputColor}</span>
            </div>
            <div>
                <label>Input Checkbox:</label>
                <input type="checkbox" name="inputCheckbox" value={this.state.inputCheckbox} onChange={this.onChange} />
                <br /><span>{this.state.inputCheckbox ? 'true' : 'false'}, {typeof this.state.inputCheckbox}</span>
            </div>
            <fieldset>
                <legend>Keith is a legend!</legend>
                <div>
                    <label>Input Radio 1:</label>
                    <input type="radio" name="inputRadio" checked={this.state.inputRadio === 'radio1'} value="radio1" onChange={this.onChange} />
                </div>
                <div>
                    <label>Input Radio 2:</label>
                    <input type="radio" name="inputRadio" checked={this.state.inputRadio === 'radio2'} value="radio2" onChange={this.onChange} />
                </div>
                <div>
                    <label>Input Radio 3:</label>
                    <input type="radio" name="inputRadio" checked={this.state.inputRadio === 'radio3'} value="radio3" onChange={this.onChange} />
                </div>
                <br /><span>{this.state.inputRadio}, {typeof this.state.inputRadio}</span>
            </fieldset>

             <div>
                <label>Input TextArea:</label>
                <textarea  name="inputTextarea" value={this.state.textarea} onChange={this.onChange} />
                <br /><span>{this.state.inputTextarea ? 'true' : 'false'}, {typeof this.state.textarea}</span>
            </div>
            <div>
                <label>Select DropDown:</label>
                <select  name="selectDropDown" value={this.state.selectDropDown} onChange={this.onChange} >
                    <option value='1'> first one</option>
                    <option value='2'> second one</option>
                    <option value='3'> third one</option>
                    <option value='4'> fourth one</option>
                </select>
                <br /><span>{this.state.selectDropDown ? 'true' : 'false'}, {typeof this.state.selectDropDown}</span>
            </div>
             <div>
                <label>select list box:</label>
                <select  name="selectListBox" size="5" value={this.state.selectListBox} onChange={this.onChange} >
                    <option value='1'> first one</option>
                    <option value='2'> second one</option>
                    <option value='3'> third one</option>
                    <option value='4'> fourth one</option>
                </select>
                <br /><span>{this.state.selectListBox ? 'true' : 'false'}, {typeof this.state.selectListBox}</span>
            </div>
             <div>
                <label>select muti select:</label>
                <select  name="selectMultiSelect" size="5" multiple value={this.state.selectMultiSelect} onChange={this.onChange} >
                    <option value='1'> first one</option>
                    <option value='2'> second one</option>
                    <option value='3'> third one</option>
                    <option value='4'> fourth one</option>
                </select>
                <br /><span>{this.state.selectMultiSelect ? 'true' : 'false'}, {typeof this.state.selectMultiSelect}</span>
            </div>

        </form>
    }

}

ReactDOM.render(<DemoForm />, document.querySelector('main'))

    //    let components = (
    //         <div>
    //     <TaylorsCarEmporium myCars={theCars} mySpecs={carSpecs}/>
    //     <ColorTool myColors={colors} />
    //         </div>
    //     )

    //     ReactDOM.render(components, document.querySelector('main'))

// ReactDOM.render(<CarToolContainer carSpecs={carSpecs} />, document.querySelector('main'))
// ReactDOM.render(<ColorTool myColors={colors} />, document.querySelector('main'))