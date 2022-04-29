export function login() {
  cy.visit("");
  cy.get("button").click();
  cy.get(":nth-child(1) > input").clear();
  cy.get(":nth-child(1) > input").type("admin@admin.ru");
  cy.get(":nth-child(2) > input").clear();
  cy.get(":nth-child(2) > input").type("admin");
  cy.get("form > div > button").click();
}
