describe("game set up", () => {
    
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
      });
    
    it('Visits the page', () => {
        cy.contains('Word Puzzle Game!')
    })

    it('Starts a new game', () => {
        cy.contains('New Game').click()
    })
})