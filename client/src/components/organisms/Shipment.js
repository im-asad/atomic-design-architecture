import React from 'react';
import { GreyCardContainer, DarkGreyContainer } from "../atoms/Container";

export default class Shipment extends React.Component {
    render() {
        const { shipment } = this.props;
        return (
            <GreyCardContainer>
                <b>{shipment.name}</b>
                <DarkGreyContainer>
                    <div><b>Origin</b></div>
                    {shipment.origin}
                </DarkGreyContainer>
            </GreyCardContainer>
        );
    }
}