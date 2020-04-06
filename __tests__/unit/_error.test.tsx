/// <reference types="jest"/>

import { RouterContext } from 'next/dist/next-server/lib/router-context';
import { NextRouter } from 'next/router';
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Renderer from 'react-test-renderer';
import ErrorPage from '../../src/pages/_error';

jest.mock('next/router', () => ({
  useRouter(): Partial<NextRouter> {
    return {
      route: '/404'
    };
  }
}));

describe('Error page', (): void => {
  let container: HTMLElement | null | undefined;
  const mockErrorPageProps = {
    AppTree: null as null,
    pathname: '',
    query: null as null
  };

  const mockRouter: Partial<NextRouter> = {
    push: (url: string) => Promise.resolve(!!url)
  };

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  it('renders correctly', () => {
    act(() => {
      ReactDOM.render(
        // @ts-ignore: Test push method only
        <RouterContext.Provider value={mockRouter}>
          <ErrorPage AppTree={null} pathname="" query={null} />
        </RouterContext.Provider>,
        container
      );
    });
    expect(document.getElementById('error-code').innerHTML).toMatch('Unknown');
  });

  it('props work as expected', async () => {
    let props = await ErrorPage.getInitialProps({
      ...mockErrorPageProps,
      // @ts-ignore: Test status code only
      res: { statusCode: 404 }
    });
    act(() => {
      ReactDOM.render(
        // @ts-ignore: Test push method only
        <RouterContext.Provider value={mockRouter}>
          <ErrorPage {...props} />
        </RouterContext.Provider>,
        container
      );
    });
    expect(document.getElementById('error-code').innerHTML).toMatch('404');

    // @ts-ignore: Test status code only
    props = await ErrorPage.getInitialProps({ ...mockErrorPageProps });
    act(() => {
      ReactDOM.render(
        // @ts-ignore: Test push method only
        <RouterContext.Provider value={mockRouter}>
          <ErrorPage {...props} />
        </RouterContext.Provider>,
        container
      );
    });
    expect(document.getElementById('error-code').innerHTML).toMatch('Unknown');
  });

  it('matches snapshot', (): void => {
    const snapshotRender = Renderer.create(<ErrorPage AppTree={null} pathname="" query={null} />);
    const tree = snapshotRender.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
