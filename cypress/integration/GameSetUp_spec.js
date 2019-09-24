describe("game set up", () => {
    
    beforeEach(() => {
        cy.visit('/');
      });
    
    it('Visits the page', () => {
        cy.contains('Word Puzzle Game!')
    })

    it('Starts a new game', () => {
        cy.contains('New Game').click()
    })
})