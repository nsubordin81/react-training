import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {connect} from 'react-redux';

const items = ['Raindrops', 'roses', 'whiskers', 'kittens'];

class MyFavList extends React.Component {
    render() {
        return (
            <UpdateableList myItems={this.props.items} addToList={this.props.addToList} />
        )
    }
}

class ListItem extends React.Component {
    render() {
        return (
            <li>{this.props.item}</li>
        )
    }
}

class UpdateableList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            favoriteItem: ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
    };

    addItem = () => {
        this.props.addToList(this.state.favoriteItem)
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.myItems.map( item =>
                        <ListItem item={item} />
                    )}
                </ul>
                <input type='text' id='favorite-item-input' name='favoriteItem' value={this.state.inputValue} onChange={this.onChange}></input>
                <button onClick={this.addItem}>Add Item</button>
            </div>
        )
    }
}

const addItem = value => ({
    type: 'ADD',
    value
})

const reducer = (state = items, action) => {

    if(action == null) return state; 

    console.log('state: ', state, 'action: ', action);
        switch(action.type) {
            case 'ADD':
                return state.concat(action.value);
            default:
                return state;
        }
}

const mapStateToProps = appState => {

    //props passed into the Component
    return {
        items: appState
    }

}

const mapDispatchToProps = dispatch => {
    //props passed into the component
    return {
        addToList: (item) => dispatch(addItem(item)),
    }
};




const appStore = createStore(reducer);

const MyFavListContainer = connect(mapStateToProps, mapDispatchToProps)(MyFavList);

ReactDOM.render(<MyFavListContainer store={appStore} />, document.querySelector('main'));