import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({icon, title}) => {

	return (
		<nav className='navbar bg-primary'>
			<h1>
				<i className={icon} /> {title}
			</h1>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">Sobre</Link>
				</li>
			</ul>
		</nav>
	)
}

Navbar.defaultProps = {
	title: "Secretaria de Prevenção de Catástrofes",
	icon: "fas fa-vector-square", //fab fa-github fas fa-plane 
}

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
}

export default Navbar