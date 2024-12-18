describe("Book list", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Главная страница", () => {
    cy.contains("Books list").should("be.visible");
  });

  it("Успешный вход", () => {
    cy.login("test@test.com", "test");
    cy.contains("Log out").should("be.visible");
    cy.get(".pt-2").should("be.visible");
  });

  it("Неуспешный вход", () => {
    cy.login("test@test.com", "123");
    cy.get(".mb-3").should("be.visible");
  });

  it("Добавление книги", () => {
    cy.login("test@test.com", "test");
    cy.addBook(
      "Огурцы",
      "Поучительный рассказ",
      "./file/огурцы.jpg",
      "./file/Огурцы.txt",
      "Носов Н.Н."
    );
    cy.contains("Огурцы").should("be.visible");
  });

  it("Добавление книги в избранное", () => {
    cy.login("test@test.com", "test");
    let href1;
    cy.get('a:contains("Огурцы")')
      .filter(':contains("Add to favorite")')
      .invoke("attr", "href")
      .then((href) => {
        href1 = href;
      });
    cy.then(() => {
      cy.get(`[href="${href1}"]`).contains("Add to favorite").click();
      cy.get(`[href="${href1}"] >>> button`).should(
        "have.text",
        "Delete from favorite"
      );
    });
  });

  it("Переход во вкладку избранное", () => {
    cy.login("test@test.com", "test");
    cy.get('a:contains("Favorites")').click();
    cy.location("pathname").should("eq", "/favorites");
    cy.get('button:contains("Delete from favorite")').should("be.visible");
    cy.get('button:contains("Add to favorite")').should("not.exist");
  });
});
