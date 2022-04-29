describe("homepage", () => {
  before(() => {
    cy.visit("");
  });
  after(() => {});

  describe("without authorization", () => {
    it("snapshot homepage", () => {
      cy.get(".Header");

      cy.eyesOpen({
        appName: "My App",
        testName: "homepage without authorization",
      });
      cy.eyesCheckWindow({
        tag: "without authorization",
        target: "window",
        fully: true,
      });
      cy.eyesClose();
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
      cy.login(Cypress.env("email"), Cypress.env("password"));
    });
    afterEach(() => {
      cy.logout();
    });

    it("snapshot homepage", () => {
      cy.get(".Header");

      cy.eyesOpen({
        appName: "My App",
        testName: "homepage with authorization",
      });
      cy.eyesCheckWindow({
        tag: "with authorization",
        target: "window",
        fully: true,
      });
      cy.eyesClose();
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
