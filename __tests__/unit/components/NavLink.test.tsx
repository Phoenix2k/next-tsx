/// <reference types="jest"/>

import { ThemeProvider } from 'emotion-theming';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import { NextRouter } from 'next/router';
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Renderer from 'react-test-renderer';
import NavLink from '../../../src/components/NavLink';
import config from '../../../src/config';

describe('Navigation link', () => {
  let container: HTMLElement | null | undefined;

  const mockCallBack = jest.fn();
  const mockEvent = { preventDefault: jest.fn() };
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

  it('renders and functions correctly', () => {
    act(() => {
      ReactDOM.render(
        // @ts-ignore: Test push method only
        <RouterContext.Provider value={mockRouter}>
          <NavLink href="/test-link" onClick={mockCallBack(mockEvent)}>
            Test link
          </NavLink>
        </RouterContext.Provider>,
        container
      );
    });
    const link: HTMLAnchorElement = container.querySelector('.nav-link');
    expect(link).toBeDefined();
    expect(link.href).toBe('/test-link');
    expect(link.textContent).toBe('Test link');
    act(() => {
      link.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });

  it('matches snapshot', () => {
    const snapshotRender = Renderer.create(
      // @ts-ignore: Test push method only
      <RouterContext.Provider value={mockRouter}>
        <ThemeProvider theme={config.theme}>
          <NavLink href="/test-link" onClick={mockCallBack(mockEvent)}>
            Test link
          </NavLink>
        </ThemeProvider>
      </RouterContext.Provider>
    );
    const tree = snapshotRender.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
