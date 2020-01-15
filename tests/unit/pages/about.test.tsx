import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import About from '../../../src/pages/about';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '',
      pathname: 'about',
      query: '',
      route: '/about'
    };
  }
}));

describe('About page', () => {
  it('renders "About page" heading', () => {
    const shallowRender = shallow(<About />);
    expect(shallowRender.find('h1').text()).toEqual('About page');
  });
  it('matches snapshot', () => {
    const snapshotRender = renderer.create(<About />);
    const tree = snapshotRender.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
