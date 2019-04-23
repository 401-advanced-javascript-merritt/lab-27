/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../../../../components/counter/counter.js';

describe('<Counter />', () => {
  it('lives', () => {
    let app = shallow(<Counter/>);
    expect(app.find('section').exists()).toBeTruthy();
  });
  it('Should increment the count on plus click.', () => {
    let app = mount(<Counter />);
    let plus = app.find('.up');
    plus.simulate('click');
    expect(app.state('count')).toEqual(1);
    expect(app.find('span').text()).toContain('1');
  });
  it('Should decrease the count on minus click.', () => {
    let app = mount(<Counter />);
    let minus = app.find('.down');
    minus.simulate('click');
    expect(app.state('count')).toEqual(-1);
    expect(app.find('span').text()).toContain('-1');
  });
  it('Renders correctly', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
