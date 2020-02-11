/// <reference types="../../cypress/support"/>

import { activeLink, pages } from '../config';

const pageKeys = Object.keys(pages);

describe('Running generic tests for all pages...\n', () => {
  pageKeys.forEach((pageKey) => {
    const { slug: pageSlug, title: pageTitle, url: pageUrl } = pages[pageKey];
    let altPageKey = pageKey;

    do {
      altPageKey = pageKeys[(pageKeys.length * Math.random()) << 0];
    } while (altPageKey === pageKey);

    const { slug: altPageSlug, title: altPageTitle, url: altPageUrl } = pages[altPageKey];

    describe(pageTitle, () => {
      before(() => {
        cy.visit(pageUrl);
      });

      describe('Header', () => {
        it('has a header', () => {
          cy.get('header').should('be.visible');
        });
      });

      describe('Navigation', () => {
        it('has a navigation', () => {
          cy.get('nav').should('be.visible');
        });

        it('current page is marked as active', () => {
          cy.get(`[href="${pageUrl}"]`)
            .first()
            .should('have.class', activeLink.class);
        });

        it('current page link color is green', () => {
          cy.get(`[href="${pageUrl}"]`)
            .first()
            .should('have.css', 'color', activeLink.color);
        });

        it('has only one active navigation link', () => {
          cy.get('.nav-link--active').should('have.length', 1);
        });

        it('navigates to a random page and comes back', () => {
          cy.get(`[href="${altPageUrl}"]`)
            .first()
            .click();
          cy.wait(250);
          cy.itemProp('title').contains(altPageTitle);
          if (Cypress.config('video')) {
            cy.screenshot(altPageSlug);
          }
          cy.get(`[href="${pageUrl}"]`)
            .first()
            .click();
          cy.wait(250);
          cy.itemProp('title').contains(pageTitle);
        });
      });

      describe('Main container', () => {
        it('has a main container', () => {
          cy.get('main').should('be.visible');
          if (Cypress.config('video')) {
            cy.screenshot(pageSlug);
          }
        });

        it('has a main title', () => {
          cy.itemProp('title').should('be.visible');
        });

        it('has the correct main title', () => {
          cy.itemProp('title').contains(pageTitle);
        });
      });

      describe('Footer', () => {
        it('has a footer', () => {
          cy.get('footer').should('be.visible');
        });
      });
    });
  });
});
