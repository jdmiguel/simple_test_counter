import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Counter from '.';

Enzyme.configure( {adapter: new EnzymeAdapter()} );

/**
 * Factory function to create a shallowWrapper for the Counter Component
 * @function setup
 * @param {object} props - Component props especificf for this setup 
 * @param {any} state - Initial state for setup
 * @returns {ShallowWrapper}
 */

const setup = (props={},state = null) => {
    const wrapper = shallow(<Counter {...props}/>);
    if(state) wrapper.setState(state);
    return wrapper;
}

/**
 * Return ShalloWrapper containing node(s) with the given data value
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {string} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */


const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('renders without error', () => {
    const wrapper = setup();
    const counterComponent = findByTestAttr(wrapper,'component-counter');
    expect(counterComponent.length).toBe(1);
});

test('renders increment button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper,'increment-button');
    expect(button.length).toBe(1);
});

test('renders counter display', () => {
    const wrapper = setup();
    const counterDisplay = findByTestAttr(wrapper,'counter-display');
    expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
    const wrapper = setup();
    const initialCounterState = wrapper.state('count');
    expect(initialCounterState).toBe(0);
});

test('clicking button increments counter display', () => {
    const counter = 0;
    const wrapper = setup(null, { counter });

    // find button and test
    const button = findByTestAttr(wrapper,'increment-button');
    button.simulate('click');
    wrapper.update();

    // find display and test value
    const counterDisplay = findByTestAttr(wrapper,'counter-display');
    expect(counterDisplay.text()).toContain(counter + 1);
});