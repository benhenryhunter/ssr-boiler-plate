import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ( { loggedIn } ) => (
    <div className="header">
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a href="#" className="navbar-brand d-flex align-items-center">
				<img height="48" src="https://bendickman.com/images/BensGuanaco.jpg"/>
			</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="navbar-collapse collapse" id="navbarHeader">
				<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
				<li className="nav-item">
					<a href="#">link</a>				    	
				</li>
				<li className="nav-item">
					<a href="#">link</a>				    	
				</li>
				<li className="nav-item">
					<a href="#">link</a>				    	
				</li>
				<li className="nav-item">
					<a href="#">link</a>				    	
				</li>
				<li className="nav-item">
					<a href="#">link</a>				    	
				</li>
				<li className="nav-item">
					<a href="#">link</a>				    	
				</li>
				</ul>
			</div>
		</nav>
	</div>
);

const mapStateToProps = ( state ) => ( {
    loggedIn: state.loggedIn,
} );

export default connect( mapStateToProps )( Header );
