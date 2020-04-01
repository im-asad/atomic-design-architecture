import React from 'react';
import Appbar from "../organisms/Appbar";
import Sidebar from "../organisms/Sidebar";
import { DashboardContainer, DashboardContentContainer } from "../atoms/Container";

export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Appbar/>
                <DashboardContainer>
                    <Sidebar/>
                    <DashboardContentContainer>
                        {this.props.children}
                    </DashboardContentContainer>
                </DashboardContainer>
            </div>
        )
    }
}