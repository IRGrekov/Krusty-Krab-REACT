describe('service is available', function () {
  beforeEach(function () {
    cy.viewport(1920, 1024)
    cy.visit('/')
  })

  it('should be available localhost:3000', function () {
    cy.visit('/')
    cy.contains('Соберите бургер')
  })

  it('should open ingredient details', function () {
    cy.get('[data-testid="burger-ingredient-item"]').first().click()
    cy.contains('Детали ингредиента')
  })

  it('should tab', function () {
    cy.get('[class^=tab').last().click()
    cy.wait(1000).get('[class^=tab').first().click()
  })

  it('should drag and drop ingredients and set bun', function () {
    cy.get('[data-testid="burger-ingredient-item"]').eq(0).trigger('dragstart')
    cy.get('[data-testid="burger-constructor"]').first().trigger('drop')
    cy.get('[data-testid="burger-ingredient-item"]').eq(3).trigger('dragstart')
    cy.get('[data-testid="burger-constructor"]').first().trigger('drop')
    cy.get('[data-testid="burger-ingredient-item"]').eq(7).trigger('dragstart')
    cy.get('[data-testid="burger-constructor"]').first().trigger('drop')
  })

  it('should delete ingredient from constructor', function () {
    cy.get('[data-testid="burger-ingredient-item"]').eq(0).trigger('dragstart')
    cy.get('[data-testid="burger-constructor"]').first().trigger('drop')
    cy.get('[data-testid="burger-ingredient-item"]').eq(3).trigger('dragstart')
    cy.get('[data-testid="burger-constructor"]').first().trigger('drop')
    cy.get('[data-testid="burger-ingredient-item"]').eq(7).trigger('dragstart')
    cy.get('[data-testid="burger-constructor"]').first().trigger('drop')
  })

  it('should visible order button', function () {
    cy.get('[data-testid="burger-ingredient-item"]').eq(0).trigger('dragstart')
    cy.get('[data-testid="burger-constructor"]').first().trigger('drop')
    cy.get('[data-testid="burger-ingredient-item"]').eq(3).trigger('dragstart')
    cy.get('[data-testid="burger-constructor"]').first().trigger('drop')
    cy.get('[data-testid="burger-ingredient-item"]').eq(7).trigger('dragstart')
    cy.get('[data-testid="burger-constructor"]').first().trigger('drop')
    cy.get('button').contains('Оформить заказ').click()
  })

  it('should authorization', function () {
    cy.get('[data-testid="burger-ingredient-item"]').eq(0).trigger('dragstart')
    cy.get('[data-testid="burger-constructor"]').first().trigger('drop')
    cy.get('[data-testid="burger-ingredient-item"]').eq(3).trigger('dragstart')
    cy.get('[data-testid="burger-constructor"]').first().trigger('drop')
    cy.get('[data-testid="burger-ingredient-item"]').eq(7).trigger('dragstart')
    cy.get('[data-testid="burger-constructor"]').first().trigger('drop')
    cy.get('button').contains('Оформить заказ').click()

    const email = 'bybacha@mail.ru'
    const password = '123321'
    cy.get('[data-testid="email-input"]').type(email)
    cy.get('[data-testid="password-input"]').type(password)
    cy.get('[data-testid="login-button"]').click()
  })

  it('should open order number', function () {
    cy.get('[data-testid="burger-ingredient-item"]').eq(0).trigger('dragstart')
    cy.get('[data-testid="burger-constructor"]').first().trigger('drop')
    cy.get('[data-testid="burger-ingredient-item"]').eq(3).trigger('dragstart')
    cy.get('[data-testid="burger-constructor"]').first().trigger('drop')
    cy.get('[data-testid="burger-ingredient-item"]').eq(7).trigger('dragstart')
    cy.get('[data-testid="burger-constructor"]').first().trigger('drop')
    cy.get('button').contains('Оформить заказ').click()

    const email = 'bybacha@mail.ru'
    const password = '123321'
    cy.get('[data-testid="email-input"]').type(email)
    cy.get('[data-testid="password-input"]').type(password)
    cy.get('[data-testid="login-button"]').click()

    cy.wait(1000).get('button').contains('Оформить заказ').click()
  })
})
