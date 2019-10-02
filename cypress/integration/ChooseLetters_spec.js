describe("choosing letters", () => {
    beforeEach(() => {
        cy.visit('/');
        cy.contains('New Game').click();
    });
    
    describe('Consonant button', () => {
        it("produces a consonant", () => {
            cy.contains('Consonant').click
        });
    });

    describe('Vowel button', () => {
        it("produces a vowel", () => {
            cy.contains('Vowel').click
        });
    });
});