///<reference types="cypress"/>

describe('Registration Page for Enter a chance to Win sneakers pair', () => {
    beforeEach(() => {

        cy.visit('https://blue-bite-dev-3.bluebite.io/04425f7c-4fdd-47f6-85b3-b800d12bb9ca');
    });

    it('should fill out and submit the registration form for Enter a chance to Win sneakers pair', () => {

        cy.get('#input-3').type('Surendra');
        cy.get('#input-4').type('surya@gmail.com');
        cy.get('#input-8').type('32');
        cy.get('#input-9').type('Want to check my luck.');

        cy.get('.button-sc-1ta45yz-0').click();

        cy.contains('You have registed 1 submissions.').should('be.visible');
    });
});
