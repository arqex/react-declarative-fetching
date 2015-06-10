var React = require('react'),
	Json = require('react-json'),
	Table= require('react-json-table')
;

var User = React.createClass({
	statics: {
		deps: function( params ){
			return {
				user: '/users/' + params.id,
				posts: '/posts?userId=' + params.id
			};
		}
	},

	render: function() {
		var user = this.props.user;
		return (
			<div className="user">
				<h2>{ user.name }</h2>
				<Json value={ user } />
				<h2 className="userPosts">{ user.name }&#39;s posts</h2>
				<Table rows={ this.props.posts } />
			</div>
		);
	}
});

module.exports = User;
