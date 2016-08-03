var React = require('react');
var {store} = require('./store');

// On data return from API Call , dispatch Completed search action with photos


module.exports = React.createClass({
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
    onClick: function() {
    },
    renderStars: function(value){
    	var stars = [];
    	for (let i =0; i < value; i++){
        		stars.push(<i className="glyphicon glyphicon-star"/>);
        	}
        return(stars);

    },
    renderAttributes: function(attribute) {
    	return( <tr key={attribute.name}>
        <td>{attribute.name}</td>
        <td>
        {	
        	this.renderStars(attribute.value)
        	
        }	
        </td>
      </tr>);
    },
    render: function() {
        return ( <div>< h1><span>< input className="back"type="image" src="img/back.png " onClick={() => this.onClick()}/></span>                         
                           {this.state.playerType.name}, Ready for Battle!                  
                    < /h1>
                    <img className="done" src={this.state.playerType.image} height="500" width="500"/>
                    <table className="table"><tbody>
                    {	// render photo once for each element in photos
					this.state.playerType.attributes.map(function(attribute){
						return this.renderAttributes(attribute);
					}.bind(this))
					
				}</tbody></table>

                 </div>

                         
            
        );
    }
});