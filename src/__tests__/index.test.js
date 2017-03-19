import React from 'react';
import { shallow } from 'enzyme';
import Index from '../';

describe('Index', () => {
  it('displays Testing! in test mode', () => {
    const wrapper = shallow(<Index test />);
    expect(wrapper.text()).toBe('Testing!');
  });

  it('displays Meow! in non-test mode', () => {
    const wrapper = shallow(<Index />);
    expect(wrapper.text()).toBe('Meow!');
  });
});
