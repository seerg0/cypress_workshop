describe("profile", () => {
  afterEach(() => {
    cy.visit("");
  });

  describe("without authorization", () => {
    it("Should redirect to login page", () => {
      cy.visit("/profile");
      //   cy.url().should("include", "/login");
    });
  });

  describe("with authorization", () => {
    beforeEach(() => {
      cy.login(Cypress.env("email"), Cypress.env("password"));
    });
    afterEach(() => {
      cy.logout();
    });

    // it("snapshot profile page", () => {
    //   cy.get(".Articles-link").click();
    //   cy.get("h1").contains("Articles");

    //   cy.eyesOpen({
    //     appName: "My App",
    //     testName: "articles page",
    //   });
    //   cy.eyesCheckWindow({
    //     tag: "articles page",
    //     target: "window",
    //     fully: true,
    //   });
    //   cy.eyesClose();
    // });

    /* ==== Test Created with Cypress Studio ==== */
    it("update profile name", function () {
      /* ==== Generated with Cypress Studio ==== */
      cy.get("img").click();
      cy.get("form > :nth-child(1) > input").clear();
      cy.get("form > :nth-child(1) > input").type("qwe");

      cy.get(".sc-hKwDye").attachFile("man.png", {
        subjectType: "drag-n-drop",
      });

      cy.wait(10000);

      cy.get('[type="submit"]').click();

      //   cy.get(".sc-hKwDye").trigger("dragenter");
      //   cy.dropFile("man.png");
      //   cy.get('[type="submit"]').click();
      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      //   cy.get(".sc-hKwDye").click();
      /* ==== End Cypress Studio ==== */
    });
  });
});
