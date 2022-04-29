import { login } from "../../utils/login";
import { logout } from "../../utils/logout";

describe("articles", () => {
  afterEach(() => {
    cy.visit("");
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
      cy.visit("");
    });

    it("snapshot articles page", () => {
      cy.get(".Articles-link").click();
      cy.get("h1").contains("Articles");

      cy.eyesOpen({
        appName: "My App",
        testName: "articles page",
      });
      cy.eyesCheckWindow({
        tag: "articles page",
        target: "window",
        fully: true,
      });
      cy.eyesClose();
    });
  });
});
