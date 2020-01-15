import { shallow } from 'enzyme';
import React from 'react';
import Renderer from 'react-test-renderer';
import Home from '../../../src/pages';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '',
      pathname: 'home',
      query: '',
      route: '/'
    };
  }
}));

describe('Home page', () => {
  it('renders "Home page" heading', () => {
    const shallowRender = shallow(<Home />);
    expect(shallowRender.find('h1').text()).toEqual('Home page');
  });
  it('matches snapshot', () => {
    const snapshotRender = Renderer.create(<Home />);
    const tree = snapshotRender.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
