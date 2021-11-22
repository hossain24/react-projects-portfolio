import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
    color: green;
    text-align: center;
`

const HeroStyled = () => {
    return (
        <>
            <HeroContainer>
                <h1>This is Styled!</h1>
            </HeroContainer>
        </>
    );
}

export default HeroStyled;
