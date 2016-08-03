var React = require('react');
var {store} = require('./store');

// On data return from API Call , dispatch Completed search action with photos


module.exports = React.createClass({
    onClick: function() {
     
        
        store.dispatch({ type: 'ON_DONE', done: true });
    },

    render: function() {
        return ( 
                     <button type="button" className="btn btn-primary" onClick={this.onClick}>Ready !!</button>
                         
            
        );
    }
});