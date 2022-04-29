import { login } from "../../utils/login";
import { logout } from "../../utils/logout";

describe("articles", () => {
  afterEach(() => {
    cy.visit("/");
  });

  describe("without authorization", () => {
    it("Should redirect to login page", () => {
      cy.visit("/articles");
      cy.url().should("include", "/login");
    });
  });

  describe("with authorization", () => {
    before(() => {
      login();
    });

    after(() => {
      logout();
    });

    it("snapshot articles page", () => {
      cy.visit("/articles");
      cy.get("h1").contains("Articles");
      cy.percySnapshot("Articles page", {
        percyCSS: `ul { display: none; }`,
      });
    });
  });
});
