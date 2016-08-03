var React = require('react');
var {store} = require('./store');
var AttributeSelector = require('./AttributeSelector');

module.exports= React.createClass({
	    getInitialState: function() {

        return {
            playerType: this.props.playerType
        };
    },
    componentWillReceiveProps: function(nextProps) {
        this.setState({
            playerType: nextProps.playerType
        });
    },

  render: function() {

  	var rows = [];
  	var key = 0;
    this.props.playerType.attributes.forEach(function(attribute) {
      rows.push(<AttributeSelector attribute={attribute} key={key} />);
      key +=1;
      
    });

  
    return (
    	
      <table className="table">
        <tbody className="table">{rows}</tbody>
      </table>
    );
  }
});