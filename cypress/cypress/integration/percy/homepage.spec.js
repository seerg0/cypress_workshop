import { login } from "../../utils/login";
import { logout } from "../../utils/logout";

describe("homepage", () => {
  before(() => {
    cy.visit("");
  });
  after(() => {});

  describe("without authorization", () => {
    it("snapshot homepage", () => {
      cy.get(".Header");
      cy.percySnapshot("Homepage without authorization");
    });

    it("Contains Home page text", () => {
      cy.get("h3").contains("Home page");
    });

    it("Contains login button", () => {
      cy.get("button").contains("login");
    });

    it("Contains articles link ", () => {
      cy.get(".Articles-link")
        .contains("Articles")
        .should("have.attr", "href", "/articles");
    });
  });

  describe("with authorization", () => {
    beforeEach(() => {
      cy.login("admin@admin.ru", "admin");
    });
    afterEach(() => {
      cy.logout();
    });

    it("snapshot homepage", () => {
      cy.get(".Header");
      cy.percySnapshot("Homepage with authorization");
    });

    it("Contains Home page text", () => {
      cy.get("h3").contains("Home page");
    });

    it("Contains logout button", () => {
      cy.wait(1000);
      cy.get("button").contains("logout");
    });

    it("Contains articles link ", () => {
      cy.get(".Articles-link")
        .contains("Articles")
        .should("have.attr", "href", "/articles");
    });
  });
});
