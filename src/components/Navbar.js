/* eslint-disable react/jsx-indent */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Navbar extends React.Component {
	render() {
		return (
			<div className="Navbar">
				<div className="container-fluid">
					<span>Deck.</span>
					<span>TECHNOLOGY</span>
					<span>IDEAS</span>
					<span>LEADERSHIP</span>
					<span>VIDEO</span>
					<span>NEWS</span>
					<span>FINANCE</span>
					<span>ENTERTAINMENT</span>
					<img className="Navbar__burger-menu" src="" alt="Menú"/>
				</div>
			</div>
		)
	}
}

export default Navbar;
