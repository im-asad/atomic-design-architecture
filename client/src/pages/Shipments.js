import React from "react";
import Dashboard from "../components/templates/Dashboard";

/* import actions */
import { getShipments } from "../actions/shipment.actions";
import Shipment from "../components/organisms/Shipment";

export default class Shipments extends React.Component {
    state = {shipments: []};
    async componentDidMount() {
        const shipments = await getShipments();
        this.setState({shipments})
    }
    render() {
        console.log("THIS IS THE STATE: ", this.state);
        const { shipments } = this.state;
        return (
            <Dashboard>
                SHIPMENTS PAGE
                <div>
                    {shipments.map((shipment) => <Shipment shipment={shipment} key={shipment.id} />)}
                </div>
            </Dashboard>
        )
    }
}