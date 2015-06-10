var React = require('react');

var Home = React.createClass({

	render: function() {
		return (
			<div>
				<h2>Welcome to the demo</h2>
				<div>This is a demostration of to how fetch data dependencies automatically with react using react-router. Those dependencies are defined declaratively inside the components.</div>
				<div><b><a href="#">See how react declarative fetching works in this article.</a></b></div>
				<div><b><a href="#">Get the source code of the demo on github</a></b></div>
			</div>
		);
	}

});

module.exports = Home;
