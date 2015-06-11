var React = require('react');

var Home = React.createClass({

	render: function() {
		return (
			<div>
				<h2>Welcome to the demo</h2>
				<div>This is a demostration of to how fetch data dependencies automatically with react using react-router. <br/>Those dependencies are defined declaratively inside the components.</div>
				<div><b><a target="_blank" href="http://arqex.com/1058/define-the-data-to-fetch-declaratively-with-react">See how react declarative fetching works in this article.</a></b></div>
				<div><b><a target="_blank" href="https://github.com/arqex/react-declarative-fetching">Get the source code of the demo on github.</a></b></div>
			</div>
		);
	}

});

module.exports = Home;
