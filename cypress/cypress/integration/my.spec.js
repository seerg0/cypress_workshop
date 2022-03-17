// my.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* ==== Test Created with Cypress Studio ==== */
it('test1', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('localhost:3002');
  cy.get('.title').should('have.text', 'Список постов');
  cy.get(':nth-child(1) > .styles_submit-box__ybU75 > .styles_textarea__qlQpR').click();
  cy.get(':nth-child(1) > .styles_submit-box__ybU75 > .styles_button__h7h5h').click();
  cy.get(':nth-child(1) > .styles_submit-box__ybU75 > .styles_textarea__qlQpR').click();
  cy.get(':nth-child(1) > .styles_submit-box__ybU75 > .styles_textarea__qlQpR').should('be.visible');
  cy.get('.User-box > :nth-child(1)').click();
  /* ==== End Cypress Studio ==== */
});
