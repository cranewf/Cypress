Cypress.Commands.add("login", (mail, password) => {
  cy.contains("Log in").click();
  cy.get("#mail").type(mail);
  cy.get("#pass").type(password);
  cy.contains("Submit").click();
});

Cypress.Commands.add(
  "addBook",
  (title, description, cover, bookFile, authors) => {
    cy.contains("Add new").click();
    cy.get("#title").type(title);
    cy.get("#description").type(description);
    cy.get("#fileCover").selectFile(cover);
    cy.get("#fileBook").selectFile(bookFile);
    cy.get("#authors").type(authors);
    cy.contains("Submit").click();
  }
);
