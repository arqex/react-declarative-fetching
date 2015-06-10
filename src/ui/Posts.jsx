var React = require('react'),
	RouterLink = require('react-router').Link,
	Table = require('react-json-table')
;

var Posts = React.createClass({
	statics: {
		deps: function(){
			return { posts: '/posts' };
		}
	},

	render: function() {
		return (
			<div className="postsPage">
				<h2>Posts</h2>
				<Table rows={ this.props.posts } columns={ this.getColumns() } />
			</div>
		);
	},

	getColumns: function(){
		return [
			{
				label: 'Title',
				cell: function( post ){
					return <RouterLink to="post" params={{id: post.id}}>{post.title}</RouterLink>;
				}
			},
			{
				label: 'Author',
				cell: function( post ){
					return <RouterLink to="user" params={{id: post.userId}}>{post.userId}</RouterLink>;
				}
			},
		];
	}
});

module.exports = Posts;
