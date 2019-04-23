import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../../../../components/footer/footer.js';

describe('<Footer />', () => {
  it('lives', () => {
    let app = shallow(<footer/>);
    expect(app.find('footer').exists()).toBeTruthy();
  });
});
