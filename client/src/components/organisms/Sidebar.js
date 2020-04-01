import React from 'react';
import { SidebarContainer } from "../atoms/Container";
import { SidebarListItem } from "../atoms/ListItem";

const Sidebar = (props) => {
    return (
        <SidebarContainer>
            <SidebarListItem active label="Shipments" />
        </SidebarContainer>
    )
};

export default Sidebar;