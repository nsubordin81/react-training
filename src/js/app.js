import React from 'react'
import ReactDOM from 'react-dom'

const createAddAction = value => ({
    type: 'ADD',
    value
})

const createSubtractAction = value => ({
    type: 'SUBTRACT',
    value
})

const result = [
        createAddAction(1),
        createSubtractAction(2),
        createAddAction(3),
        createSubtractAction(4),
        createAddAction(5)
    ].reduce((state, action) => {
    console.log('state: ', state, 'action: ', action);
        switch(action.type) {
            case 'ADD':
                return state + action.value;
            case 'SUBTRACT':
                return state - action.value;
        }
}, 0);

console.log('this works');
// ReactDOM.render(<ColorTool myColors={colors} />, document.querySelector('main'))