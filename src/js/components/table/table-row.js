import React from 'react';

export class TableRow extends React.Component {
    static propTypes = {
        item: React.PropTypes.object,
        deleteMe: React.PropTypes.func.isRequired,
        editMe: React.PropTypes.func.isRequired
    }

    delete = (e) => {
        this.props.deleteMe(this.props.item.id)
    }

    edit = (e) => {
        console.log("in the event handler do I have setState?" + this.setState);
        this.props.editMe(this.props.item.id)
    }

    render() {
        return ( 
            <tr key={this.props.item.id}>
                <td>{this.props.item.make}</td>
                <td>{this.props.item.model}</td>
                <td>{this.props.item.year}</td>
                <td>{this.props.item.color}</td>
                <td>{this.props.item.price}</td>
                <td><button type='button' onClick={this.edit}>edit</button></td>
                <td><button type='button' onClick={this.delete}>delete</button></td>
            </tr>
        );
    }
}