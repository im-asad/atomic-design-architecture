import styled from 'styled-components';

export const DashboardContainer = styled.div`
    display: flex;
    margin-top: 30px;
`;

export const DashboardContentContainer = styled.div`
    width: 75%;
`;

export const SidebarContainer = styled.div`
    width: 25%;
`;

export const AppbarContainer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 5px 20px;
    border-bottom: 1px solid var(--border-grey);
    box-shadow: 0 1px 6px var(--border-grey);
`;

export const GreyCardContainer = styled.div`
    background: var(--bg-grey);
    padding: 20px;
    margin: 10px auto;
    width: 80%;
    border-radius: 8px;
`;

export const DarkGreyContainer = styled.div`
    background: var(--dark-grey-bg);
    width: fit-content;
    padding: 3px 10px;
    border-radius: 8px;
    margin-top: 6px;
`;