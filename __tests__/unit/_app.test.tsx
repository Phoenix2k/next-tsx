/// <reference types="jest"/>

import { RouterContext } from 'next/dist/next-server/lib/router-context';
import { NextRouter } from 'next/router';
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Renderer from 'react-test-renderer';
import NextApp from '../../src/pages/_app';

describe('Main application', (): void => {
  const mockComponent = (): JSX.Element => <>Child component</>;
  const mockRouter: Partial<NextRouter> = {
    push: (url: string) => Promise.resolve(!!url)
  };

  let container: HTMLElement | null | undefined;

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  it('renders and functions correctly', () => {
    act(() => {
      ReactDOM.render(
        // @ts-ignore: Test push method only
        <RouterContext.Provider children={mockComponent()} value={mockRouter} />,
        container
      );
    });
    const text: string = container.outerHTML;
    expect(text).toBeDefined();
    expect(text).toContain('<div>Child component</div>');
  });

  it('matches snapshot', (): void => {
    const snapshotRender = Renderer.create(
      // @ts-ignore: Test push method only
      <NextApp Component={mockComponent} pageProps router={mockRouter} />
    );
    const tree = snapshotRender.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
