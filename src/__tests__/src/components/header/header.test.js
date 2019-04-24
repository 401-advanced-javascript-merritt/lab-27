import React from 'react';
import Header from '../../../../components/header/header.js';

describe('<Header />', () => {
  it('lives', () => {
    let app = shallow(<Header/>);
    expect(app.find('h1').exists()).toBeTruthy();
  });
});
