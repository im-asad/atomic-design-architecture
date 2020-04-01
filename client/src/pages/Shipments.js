import React from "react";
import Dashboard from "../components/templates/Dashboard";
import Shipment from "../components/organisms/Shipment";
import { PageHeader } from "../components/atoms/Typography";

/* import actions */
import { getShipments } from "../actions/shipment.actions";

export default class Shipments extends React.Component {
    state = {shipments: []};
    async componentDidMount() {
        const shipments = await getShipments();
        this.setState({shipments})
    }
    render() {
        const { shipments } = this.state;
        return (
            <Dashboard>
                <PageHeader>Shipments</PageHeader>
                <div>
                    {shipments.map((shipment) => <Shipment shipment={shipment} key={shipment.id} />)}
                </div>
            </Dashboard>
        )
    }
}