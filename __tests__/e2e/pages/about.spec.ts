/// <reference types="../../cypress/support"/>

import { activeLink, pages } from '../config';

describe(pages.about.title, () => {
  const { slug: pageSlug, title: pageTitle, url: pageUrl } = pages.about;
  const { slug: altPageSlug, title: altPageTitle, url: altPageUrl } = pages.home;

  before(() => {
    cy.visit(pageUrl);
  });

  it('has a header', () => {
    cy.get('header').should('be.visible');
  });

  it('has a navigation', () => {
    cy.get('nav').should('be.visible');
  });

  it('navigation link is marked as active', () => {
    cy.get(`[href="${pageUrl}"]`)
      .first()
      .should('have.class', activeLink.class);
  });

  it('navigation link is green', () => {
    cy.get(`[href="${pageUrl}"]`)
      .first()
      .should('have.css', 'color', activeLink.color);
  });

  it('has only one active navigation link', () => {
    cy.get('.nav-link--active').should('have.length', 1);
  });

  it('has a main container', () => {
    cy.get('main').should('be.visible');
    if (Cypress.config('video')) {
      cy.screenshot(pageSlug);
    }
  });

  it('has a title', () => {
    cy.itemProp('title').should('be.visible');
  });

  it('has the correct title', () => {
    cy.itemProp('title').contains(pageTitle);
  });

  it('has a footer', () => {
    cy.get('footer').should('be.visible');
  });

  it('loads another page and returns back when clicking on navigation links', () => {
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
