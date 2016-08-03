// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var {store} = require('./store');
var TypeSelector = require('./TypeSelector');
var AttributeTable = require('./AttributeTable');
var DoneButton = require('./DoneButton');
var DoneScreen = require('./DoneScreen');

var characters = ['ARCHER', 'WIZARD', 'NINJA', 'KNIGHT'];



var App = React.createClass({

            getInitialState: function() {

                store.subscribe(function() {
                    this.setState(store.getState());
                }.bind(this));

                return store.getState();
            },

            renderContent: function() {
                if(this.state.done){
                    return(<DoneScreen playerType={this.state.playerType} />);

                }else{
                   return ( <div>
                        <TypeSelector playerType={this.state.playerType} />
                        <AttributeTable playerType={this.state.playerType} />
                        <DoneButton playerType={this.state.playerType} />
                        </div>);



                        // myGamepeice = new component(30, 30, "red", 1, 1);

                        // console.log(this.state.valueOf());
                        // return 'james';
                    } 
                }
                ,

                    render: function() {
                        return ( < div id="app" >

                            { this.renderContent() } < /div>
                        );
                    }

            });

        ReactDOM.render( < App / > ,
            document.getElementById("app")
        );