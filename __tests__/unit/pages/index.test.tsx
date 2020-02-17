/// <reference types="jest"/>

import { ThemeProvider } from 'emotion-theming';
import { shallow } from 'enzyme';
import { NextRouter } from 'next/router';
import Renderer from 'react-test-renderer';
import config from '../../../src/config';
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
    const snapshotRender = Renderer.create(
      <ThemeProvider theme={config.theme}>
        <Home />
      </ThemeProvider>
    );
    const tree = snapshotRender.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
