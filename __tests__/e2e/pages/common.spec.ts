/// <reference types="../../cypress/support"/>

import config from '../../../src/config';

const pageKeys = Object.keys(config.pages);

describe('Generic tests for all pages\n', () => {
  pageKeys.forEach((pageKey) => {
    const { navLabel, slug: pageSlug, title: pageTitle, url: pageUrl } = config.pages[pageKey];
    let altPageKey = pageKey;

    do {
      altPageKey = pageKeys[(pageKeys.length * Math.random()) << 0];
    } while (altPageKey === pageKey);

    const { slug: altPageSlug, title: altPageTitle, url: altPageUrl } = config.pages[altPageKey];

    describe(pageTitle, () => {
      before(() => {
        cy.visit(pageUrl);
      });

      describe('Head', () => {
        it('has a meta description', () => {
          cy.get('head meta[name="description"]')
            .should('have.length', 1)
            .and('have.attr', 'content')
            .and('not.be.empty');
        });

        it('has a meta title', () => {
          cy.get('head title')
            .and('have.length', 1)
            .and('not.be.empty');
        });
      });

      describe('Body', () => {
        describe('Header', () => {
          it('has a header', () => {
            cy.get('header')
              .should('be.visible')
              .and('not.be.empty');
          });
        });

        describe('Navigation', () => {
          it('has a navigation', () => {
            cy.get('nav')
              .should('be.visible')
              .and('not.be.empty');
          });

          it('has only one active navigation link', () => {
            cy.get('.nav-link--active').should('have.length', 1);
          });

          it('active navigation link color is green', () => {
            cy.get('.nav-link--active').should(
              'have.css',
              'color',
              config.theme.colors.navLinkActive
            );
          });

          it('current page is marked as active', () => {
            cy.get(`nav a[href="${pageUrl}"]`).should(
              'have.class',
              config.theme.classes.navLinkActive
            );
          });

          it('current page link has the right content', () => {
            cy.get(`nav a[href="${pageUrl}"]`).contains(navLabel);
          });

          it('navigates to a random page and comes back', () => {
            cy.get(`nav a[href="${altPageUrl}"]`)
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
});
