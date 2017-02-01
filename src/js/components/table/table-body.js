import React from 'react';

import { TableRow } from './table-row';
import { EditRow } from './edit-row';

export class DynamicTableBody extends React.Component {
    static propTypes = {
        items: React.PropTypes.array,
        deleteMe: React.PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            editableRowId: ''
        }
    }

    editMe = (item) => {
        this.setState({
            editableRowId: item
        });
    }

    cancelMe = (item) => {
        this.setState({
            editableRowId: ''
        })
    }

    render() {
         return (
            <tbody>
                {
                    this.props.items.map((item, index) => 
                    this.state.editableRowId !== item.id ? 
                        <TableRow item={item} deleteMe={this.props.deleteMe} editMe={this.editMe}/> :
                        <EditRow saveMe={this.props.saveMe} cancelMe={this.cancelMe} />
                )}
            </tbody>
        );
    }
}
