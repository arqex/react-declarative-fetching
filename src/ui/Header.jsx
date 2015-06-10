var React = require('react'),
	Router = require('react-router')
;

var RouterLink = Router.Link;
var Header = React.createClass({

	render: function() {
		return (
			<div className="header">
				<div className="wrapper">
					<h1>React declarative data fetching demo</h1>
					<ul className="menu">
						<li><RouterLink to="home">Home</RouterLink></li>
						<li><RouterLink to="posts">Posts</RouterLink></li>
						<li><RouterLink to="users">Users</RouterLink></li>
						<li><RouterLink to="post" params={{id: 10}}>Post #10</RouterLink></li>
						<li><RouterLink to="user" params={{id: 5}}>User #5</RouterLink></li>
					</ul>
				</div>
			</div>
		);
	}

});

module.exports = Header;
