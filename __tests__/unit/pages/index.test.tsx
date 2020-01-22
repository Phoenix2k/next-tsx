/// <reference types="jest"/>

import { shallow } from 'enzyme';
import { NextRouter } from 'next/router';
import Renderer from 'react-test-renderer';
import Home from '../../../src/pages/index';

jest.mock('next/router', () => ({
  useRouter(): Partial<NextRouter> {
    return {
      route: '/home'
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
