describe("game set up", () => {
    
    beforeEach(() => {
        cy.visit('/');
      });
    
    it('Visits the page', () => {
        cy.contains('Word Puzzle Game!')
    })

    it('Starts a new game', () => {
        cy.contains('New Game').click()
        cy.contains('Choose 9 letters by using the buttons below')
        cy.contains('Consonant')
        cy.contains('Vowel')
    })
})