/// <reference types="jest"/>

import { ThemeProvider } from 'emotion-theming';
import { shallow } from 'enzyme';
import { NextRouter } from 'next/router';
import Renderer from 'react-test-renderer';
import About from '../../../src/pages/about';
import { theme } from '../../../src/theme';

jest.mock('next/router', () => ({
  useRouter(): Partial<NextRouter> {
    return {
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
    const snapshotRender = Renderer.create(
      <ThemeProvider theme={theme}>
        <About />
      </ThemeProvider>
    );
    const tree = snapshotRender.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
