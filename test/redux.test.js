import expect from 'expect'

import { indexCounter, attributeCounter, store } from '../src/Store';


//import * as types from ''

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

var nextState = {
    characterIndex: 2,
    playerType: characterTypes[2],
    done: false
};




describe('actions', () => {
    it('Increase/decrease index', () => {
        // test both increiment and decrement, Should both equal character index = 1
        //incrimenting initial state and decrementing next state should equal
        expect(indexCounter(initialState, 0)).toEqual(indexCounter(nextState, 1));
    });

    it('Increase Attributes', () => {
        expect(attributeCounter(initialState, 0, initialState.playerType.attributes[0])).toEqual({ name: characterTypes[0].attributes[0].name, value: 1 });
    });

    it('Decrease Attributes', () => {
        expect(attributeCounter(initialState, 1, initialState.playerType.attributes[0])).toEqual({ name: characterTypes[0].attributes[0].name, value: 0 });
    });
});


store.subscribe(function() {
    this.setState(store.getState());
}.bind(this));


describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(
            store.dispatch(undefined, {})
        ).toEqual([{
            text: 'Use Redux',
            completed: false,
            id: 0
        }])
    })


})