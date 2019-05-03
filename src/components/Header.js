import React from 'react'

const Header = (props) => {
    return (
        <div id="header">
            <h1 id="header-title">{props.title}</h1>
            <h3 id="header-subtitle">{props.subtitle}</h3>
        </div>
    );
}

export default Header