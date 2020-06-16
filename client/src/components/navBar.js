import React from 'react';
import PropTypes from 'prop-types';
import '../styles/navBar.css';

NavBar.propTypes = {
    heading: String,
};

function NavBar(props) {
    return (
        <div>
            <div className="navbar">
                <div className="navbar-heading"> {props.heading} </div>
            </div>
        </div>
    );
}

export default NavBar;