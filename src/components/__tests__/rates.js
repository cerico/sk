import React from 'react';
import { shallow } from 'enzyme';
import {Rates}  from '../Rates';
import Adapter from 'enzyme-adapter-react-16';

const dispatch = () => null;
const rates = [{'rates':{'AUD':25}}]

describe('<Rates />', () => {
  it('renders <Rates /> container', () => {
    const wrapper = shallow(<Rates />);
    expect(wrapper.find('ul').length).toBe(0);
  });

  it('renders <Rates /> container', () => {
    const wrapper = shallow(<Rates rates={rates}/>);
    expect(wrapper.find('ul').length).toBe(1);
  });
});
