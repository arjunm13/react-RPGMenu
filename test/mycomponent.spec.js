// var React = require('react')
// var should = require('should')
// var TestUtils = require('react-addons-test-utils')
// var MyComponent = require('../src/TypeSelector')
// var ReactDOM = require('react-dom')
// var expect = require('expect')

// var characterTypes = [{ name: 'Wizard', attributes: [{ name: 'wisdom', value: 0 }, { name: 'magic', value: 0 }, { name: 'charisma', value: 0 }, { total: 10 }], image: 'img/Wizard.png' },
//     { name: 'Ninja', attributes: [{ name: 'wisdom', value: 0 }, { name: 'body', value: 0 }, { name: 'speed', value: 0 }, { total: 10 }], image: 'img/ninja.png' },
//     { name: 'Archer', attributes: [{ name: 'accuracy', value: 0 }, { name: 'speed', value: 0 }, { name: 'charisma', value: 0 }, { total: 10 }], image: 'img/archer.png' },
//     { name: 'Knight', attributes: [{ name: 'armour', value: 0 }, { name: 'speed', value: 0 }, { name: 'charisma', value: 0 }, { total: 10 }], image: 'img/knight.png' },
//     { name: 'Golem', attributes: [{ name: 'strength', value: 0 }, { name: 'defence', value: 0 }, { name: 'charisma', value: 0 }, { total: 10 }], image: 'img/golem.png' },

// ];

// var initialState = {
//     playerType: characterTypes[0],
//     done: false
// };


// describe('MyComponent', function () {
//   it('has button that fires a dom event for click', function () {
    

//     const shallowRenderer = TestUtils.createRenderer();
// shallowRenderer.render(React.createElement(MyComponent, { playerType : initialState.playerType}));

// let tree = shallowRenderer.getRenderOutput();
// let link = tree.props.children[0];
//   let linkText = link.props.children;
// console.log(linkText[0].props.children.props.onClick);
//  console.log('*******'); 
//   linkText[0].props.children.props.onClick();


// console.log(link);

	
// 	expect('Wizard').toEqual([
//   	'Wizard'
// ]);
	


//     // var buttonNode = React.this.
//     // should.exist(buttonNode)
//     // TestUtils.Simulate.click(buttonNode)
//   })
// })