describe('service is available', function () {
  beforeEach(function () {
      cy.viewport(1920, 1024)
      cy.visit('/')
  });

  it('should be available localhost:5173', function () {
      cy.visit('/')
      cy.contains('Соберите бургер')
  });

  it('should open ingredient details', function () {
      cy.get('[class^=burger-ingredients-item_mainDiv]').first().click()
      cy.contains('Детали ингредиента')
  });

  it('should close ingredient details by button', function () {
      cy.get('[class^=burger-ingredients-item_mainDiv]').first().click()
      cy.get('[class^=modal_closeButton]').click();
  });

  it('should tab', function () {
      cy.get('[class^=tab').last().click();
      cy.wait(1000).get('[class^=tab').first().click();
  })

 
})