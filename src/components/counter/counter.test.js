import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Counter from '.';

Enzyme.configure( {adapter: new EnzymeAdapter()} );

test('renders without error', () => {
    const wrapper = shallow(<Counter/>);
    const counterComponent = wrapper.find("[data-test='component-counter']");
    expect(counterComponent.length).toBe(1);
});

test('renders increment counter', () => {

});

test('renders counter display', () => {

});

test('counter starts at 0', () => {

});

test('clicking button increments counter display', () => {

});