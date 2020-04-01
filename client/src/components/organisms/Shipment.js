import React from 'react';

export default class Shipment extends React.Component {
    render() {
        const { shipment } = this.props;
        return (
            <div>
                {shipment.name}
            </div>
        );
    }
}