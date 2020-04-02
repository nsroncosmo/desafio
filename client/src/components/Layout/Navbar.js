import PropTypes from 'prop-types';
import React from 'react';

const Navbar = ({icon, title}) => {

	return (
		<nav className='navbar bg-primary'>
			<h1>
				<i className="{icon}" /> {title}
			</h1>
			<ul>
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/about">Sobre</a>
				</li>
			</ul>
		</nav>
	)
}

Navbar.defaultProps = {
	title: "Secretaria de Controle de Aeroportos",
	icon: "fab fa-github", //fas fa-plane
}

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
}

export default Navbar