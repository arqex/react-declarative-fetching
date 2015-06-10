var React = require('react'),
	Router = require('react-router'),
	routes = require('./routes.jsx')
;

// Load styles
require('./style.scss');

Router.run( routes, Router.HistoryLocation, function( Handler ){
	React.render(
		React.createElement( Handler ),
		document.body
	);
});
