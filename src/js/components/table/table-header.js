import React from 'react';

export class DynamicTableHeaders extends React.Component {
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