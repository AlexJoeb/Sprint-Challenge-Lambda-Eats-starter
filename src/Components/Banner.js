import React from 'react'

import { Link } from 'react-router-dom';

import styled from 'styled-components';

export default function Banner() {
    return (
        <StyledBanner className='banner'>
            <h1>Your favorite food, at your doorstep.</h1>
            <Link to='/pizza'>Pizza anyone?</Link>
        </StyledBanner>
    )
}

const StyledBanner = styled.div`
    background: url(https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80) center center no-repeat;
    background-size: cover;
`;