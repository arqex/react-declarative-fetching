var React = require('react'),
	RouterLink = require('react-router').Link,
	Table = require('react-json-table')
;

var Users = React.createClass({
	statics: {
		deps: function(){
			return { users: '/users' };
		}
	},

	render: function() {
		return (
			<div className="users">
				<h2>Users</h2>
				<Table rows={ this.props.users } columns={ this.getColumns() } />
			</div>
		);
	},

	getColumns: function(){
		return [
			{
				label: 'Name',
				cell: function( user ){
					return <RouterLink to="user" params={{id: user.id}}>{user.name}</RouterLink>;
				}
			},
			{ key: 'email', label: 'Email' },
			{ key: 'website', label: 'Website' },
		];
	}
});

module.exports = Users;
