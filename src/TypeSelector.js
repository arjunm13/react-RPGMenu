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

    onClick: function(upDown) {
     
        
        store.dispatch({ type: 'ON_UPDATE_TYPE', upDown : upDown });
    },

    render: function() {
        console.log(this.state.playerType);
        return ( <div >
                     < h1>
                         < span>< input className="arrows" ref="upDown" value='0' type="image" src="img/LeftButton.png " onClick={() => this.onClick(0)}/></span> 
                           {this.state.playerType.name}
                     < span>< input className="arrows" ref="upDown" value='1' type="image" src="img/RightButton.png " onClick={() => this.onClick(1)} /></span>
                    < /h1>
                    <img src={this.state.playerType.image} height="500" width="500"/>
            < /div>
        );
    }
});