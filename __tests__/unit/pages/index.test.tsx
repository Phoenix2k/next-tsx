/// <reference types="jest"/>

import { ThemeProvider } from 'emotion-theming';
import { shallow } from 'enzyme';
import { NextRouter } from 'next/router';
import Renderer from 'react-test-renderer';
import Home from '../../../src/pages/index';
import { theme } from '../../../src/theme';

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
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );
    const tree = snapshotRender.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
