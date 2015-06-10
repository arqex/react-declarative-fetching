var React = require('react'),
	Router = require('react-router'),
	App = require('./ui/App'),
	Home = require('./ui/Home'),
	Posts = require('./ui/Posts'),
	Post = require('./ui/Post'),
	Users = require('./ui/Users'),
	User = require('./ui/User')
;

var Route = Router.Route,
	NotFoundRoute = Router.NotFoundRoute,
	DefaultRoute = Router.DefaultRoute
;
var routes = (
	<Route name="app" path="/" handler={ App } location="history" >
		<DefaultRoute name="home" handler={ Home } />

		<Route name="posts" path="/posts" handler={ Posts } />
		<Route name="post" path="/post/:id" handler={ Post } />
		<Route name="users" path="/users" handler={ Users } />
		<Route name="user" path="/user/:id" handler={ User } />

    	<NotFoundRoute name="notfound" handler={ Home } />
	</Route>
);

module.exports = routes;
