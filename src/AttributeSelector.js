var React = require('react');
var {store} = require('./store');

// On data return from API Call , dispatch Completed search action with photos


module.exports = React.createClass({

    getInitialState: function() {

        return {
            attribute: this.props.attribute
        };
    },
    componentWillReceiveProps: function(nextProps) {
        this.setState({
            attribute: nextProps.attribute
        });
    },

    onClick: function(updown, attribute) {

        store.dispatch({ type: 'ON_UPDATE_ATTRIBUTE', upDown : updown, attribute: attribute });

      
    },
    onDone: function(){
        store.dispatch({type: 'ON_DONE'});
    },

    render: function() {
        
        let key = this.props.attribute.name;
        let vals = this.props.attribute.value;
        
        if(this.props.attribute.total===undefined){return (<tr key={key}>
        <td>{key}</td>
        <td><span>< input className="adders" type="image" src="img/plus.svg " onClick={() => this.onClick(0 ,this.props.attribute)}/></span>{vals}<span>< input className="adders" type="image" src="img/minus.svg " onClick={() => this.onClick(1, this.props.attribute)} /></span></td>
      </tr>);}else {
            return(<tr className="total"><td>Battle Points</td><td>{this.props.attribute.total}</td></tr>);

        }
    }
});