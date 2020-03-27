import React from 'react';

import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <h1>Lambda Eats</h1>
            <Link to='/'>Home</Link>
            <Link to='/help'>Help</Link>
        </div>
    )
}

export default Header;