// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import "cypress-file-upload";

Cypress.Commands.add("login", (email, password) => {
  cy.visit("");
  cy.get("button").click();
  cy.get(":nth-child(1) > input").clear();
  cy.get(":nth-child(1) > input").type(email);
  cy.get(":nth-child(2) > input").clear();
  cy.get(":nth-child(2) > input").type(password);
  cy.get("form > div > button").click();
});

Cypress.Commands.add("logout", (email, password) => {
  cy.visit("/logout");
});

// Cypress.Commands.add(
//   "dropFile",
//   {
//     prevSubject: false,
//   },
//   (fileName) => {
//     Cypress.log({
//       name: "dropFile",
//     });
//     return cy
//       .fixture(fileName, "base64")
//       .then(Cypress.Blob.base64StringToBlob)
//       .then((blob) => {
//         // instantiate File from `application` window, not cypress window
//         return cy.window().then((win) => {
//           const file = new win.File([blob], fileName);
//           const dataTransfer = new win.DataTransfer();
//           dataTransfer.items.add(file);
//           return cy.document().trigger("drop", {
//             dataTransfer,
//           });
//         });
//       });
//   }
// );
