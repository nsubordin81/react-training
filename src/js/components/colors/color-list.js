import React from 'react';

export class ColorList extends React.Component {
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