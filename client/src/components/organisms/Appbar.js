import React from 'react';
import { AppbarContainer } from "../atoms/Container";
import { Logo } from "../atoms/Image";

const Appbar = (props) => {
    return (
        <AppbarContainer>
            <Logo src="https://freighthub.com/wp-content/themes/freighthub/img/logo/logo.svg" />
        </AppbarContainer>
    )
};

export default Appbar;