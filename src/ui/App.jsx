var React = require('react'),
	Router = require('react-router'),
	Header = require('./Header'),
	Qajax = require('qajax'),
	Q = require('q')
;


var RouteHandler = Router.RouteHandler;

var App = React.createClass({
	contextTypes: {
		router: React.PropTypes.func
	},

	getInitialState: function(){
		return {
			// Last URL loaded
			currentPath: false,
			// Whenever it is fetching dependencies
			loadingDeps: false,
			// Fetched data for the current route component
			handlerDeps: {}
		};
	},

	render: function() {
		var handler = <h1>Loading...</h1>;

		if( !this.state.loadingDeps )
			handler = React.createElement(RouteHandler, this.state.handlerDeps );

		return (
			<div>
				<Header />
				<div className="content wrapper">
				{ handler }
				</div>
				<footer>By <a target="_blank" href="http://arqex.com/1058/define-the-data-to-fetch-declaratively-with-react">arqex</a>. <a target="_blank" href="https://github.com/arqex/react-declarative-fetching">Fork it on Github</a></footer>
			</div>
		);
	},

	componentWillMount: function(){
		if( this.isURLChanged() ){
			this.fetchDependencies();
		}
	},

	componentWillReceiveProps: function( nextProps, nextState, context ){
		if( this.isURLChanged() ){
			this.fetchDependencies();
		}
	},

	isURLChanged: function(){
		return this.context.router.getCurrentPath() !== this.state.currentPath;
	},

	fetchDependencies: function(){
		// We are going to refresh the dependencies
		this.setState({
			currentPath: this.context.router.getCurrentPath(),
			handlerDeps: {}
		});

		var handler = this.getRouteHandler();
		// If there is nothing to fetch return
		if( !handler || !handler.deps )
			return;

		// We are going to fetch data
		this.setState( { loadingDeps: true } );

		var me = this,
			router = this.context.router,
			handlerDeps = handler.deps( router.getCurrentParams(), router.getCurrentQuery() )
		;

		this.fetch( handlerDeps )
			.then( function( deps ){
				// Update the deps to load the route handler
				me.setState({
					loadingDeps: false,
					handlerDeps: deps
				});
			})
			.catch( function( err ){
				console.log( err.stack || err );
			})
		;
	},


	getRouteHandler: function(){
		var currentRoutes = this.context.router.getCurrentRoutes(),
			i = 0,
			handler = currentRoutes[0]
		;

		// Find this component as route handler
		while( currentRoutes[ i ].handler !== this.constructor )
			i++;

		// Return the next handler, our child
		return currentRoutes[ i + 1 ].handler;
	},

	fetch: function( handlerDeps ){
		// Get handler keys
		var propNames = Object.keys( handlerDeps ),
			// Create an array of fetch promises
			promises = propNames.map( function( prop ){
				var dep = handlerDeps[ prop ];

				return Qajax( 'http://jsonplaceholder.typicode.com' + dep );
			})
		;

		// When all the promises are fullfiled
		return Q.all( promises )
			.then( function( responses ){
				// Let's create a props object with the
				// data fetched
				var deps = {};
				for (var i = 0; i < propNames.length; i++) {
					deps[propNames[i]] = JSON.parse( responses[i].responseText );
				}
				return deps;
			})
		;
	},
});

module.exports = App;
