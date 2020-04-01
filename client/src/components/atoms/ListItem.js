import React from 'react';
import styled from 'styled-components';

const StyledListItem = styled.div`
    background: ${props => props.active ? 'var(--bg-grey)' : '#FFFFFF'};
    font-size: 16px;
    font-weight: 500;
    color: #65676B;
    padding: 10px;
    width: 70%;
    margin: 0 auto;
`;

export const SidebarListItem = (props) => {
    return (
        <StyledListItem active={props.active}>
            {props.label}
            <i className="fas fa-shipping-fast" />
        </StyledListItem>
    )
};