var { createStore } = require('redux');
var characterTypes = [{ name: 'Wizard', attributes: [{ name: 'wisdom', value: 0 }, { name: 'magic', value: 0 }, { name: 'charisma', value: 0 }, { total: 10 }], image: 'img/Wizard.png' },
    { name: 'Ninja', attributes: [{ name: 'wisdom', value: 0 }, { name: 'body', value: 0 }, { name: 'speed', value: 0 }, { total: 10 }], image: 'img/ninja.png' },
    { name: 'Archer', attributes: [{ name: 'accuracy', value: 0 }, { name: 'speed', value: 0 }, { name: 'charisma', value: 0 }, { total: 10 }], image: 'img/archer.png' },
    { name: 'Knight', attributes: [{ name: 'armour', value: 0 }, { name: 'speed', value: 0 }, { name: 'charisma', value: 0 }, { total: 10 }], image: 'img/knight.png' },
    { name: 'Golem', attributes: [{ name: 'strength', value: 0 }, { name: 'defence', value: 0 }, { name: 'charisma', value: 0 }, { total: 10 }], image: 'img/golem.png' },

];

var initialState = {
    characterIndex: 0,
    playerType: characterTypes[0],
    done: false
};

var exports = module.exports = {};



function indexCounter (state, upDown) {
    
    if (upDown == 0) {
        if (state.characterIndex < characterTypes.length - 1) {
            state.characterIndex += 1;
        } else {
            state.characterIndex = 0;
        }
    } else {
        if (state.characterIndex > 0) {
            state.characterIndex -= 1;
        } else {
            state.characterIndex = characterTypes.length - 1;
        }
    }

    state.playerType= characterTypes[state.characterIndex];
    return state;
}

var attributeCounter = function (state, upDown, attribute){

    function searchForAttributeIndex(nameKey, myArray){
        for (let i=0; i < myArray.length; i++) {
                if (myArray[i].name === nameKey) {
                    return i;
                }
        }
    }

    let indexOfAttribute = searchForAttributeIndex(attribute.name, state.playerType.attributes);
    let totalObj = state.playerType.attributes[state.playerType.attributes.length-1];

    if (upDown == 0 && totalObj.total>=1 ) {
        state.playerType.attributes[indexOfAttribute].value += 1;
        totalObj.total -= 1;
        
    } else {
        if(state.playerType.attributes[indexOfAttribute].value>0 && totalObj.total!==0){
            state.playerType.attributes[indexOfAttribute].value -= 1;
            totalObj.total += 1;
        }
        
    }
    return state.playerType.attributes[indexOfAttribute];
}

///https://github.com/reactjs/redux/blob/master/docs/basics/Reducers.md
function appReducer(state = initialState, action) {


    switch (action.type) {
        // WHen the API returns the array of photos, 
        // still in  list view  
        case "ON_UPDATE_TYPE":
            indexCounter(state, action.upDown);
            return Object.assign({}, state);
            // WHen the back button is clicked 
            //change view back to list view
        case "ON_UPDATE_ATTRIBUTE":
            attributeCounter(state, action.upDown, action.attribute);
            return Object.assign({}, state, { playerType: characterTypes[state.characterIndex]});
          

        case "ON_DONE":
            return Object.assign({}, state, { done: action.done });
            // initial / default state 
            // photos array and photo
        default:
            return state
    }
};


var store = createStore(appReducer);

exports.store =store;
exports.attributeCounter = attributeCounter;
exports.indexCounter = indexCounter;