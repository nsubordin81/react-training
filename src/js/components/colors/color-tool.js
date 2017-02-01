import React from 'react';

import { ColorHeader } from './color-header';
import { ColorList } from './color-list';
import { ColorForm } from './color-form';

export class ColorTool extends React.Component {
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
