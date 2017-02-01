import React from 'react'
import ReactDOM from 'react-dom'


const result = [
        {type: 'Add', value: 1},
        {type: 'Subtract', value: 2},
        {type: 'Add', value: 3},
        {type: 'subtract', value: 4},
        {type: 'Add', value: 5}
    ].reduce((state, action) => {
    console.log('state: ', state, 'action: ', action);
        switch(action.type) {
            case 'Add':
                return state + action.value;
            case 'Subtract':
                return state - action.value;
        }
}, 0);

console.log('this works');
// ReactDOM.render(<ColorTool myColors={colors} />, document.querySelector('main'))