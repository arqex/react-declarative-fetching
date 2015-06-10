var React = require('react'),
	Json = require('react-json')
;

var Post = React.createClass({
	statics: {
		deps: function( params ){
			return { post: '/posts/' + params.id };
		}
	},

	render: function() {
		var post = this.props.post;
		return (
			<div className="post">
				<h2>{ post.title }</h2>
				<Json value={ post } />
			</div>
		);
	}
});

module.exports = Post;
