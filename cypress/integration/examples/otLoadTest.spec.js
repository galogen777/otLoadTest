
context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://37.230.152.123/OTWG20/#/login')
    })


    it('Login to OT Gateway', () => {
        for (let i = 0; i < 10; i++) {
            cy.get('login-input:nth-child(1) > input')
                .type('emp1').should('have.value', 'emp1');


            cy.get('login-input:nth-child(2) > input')
                .type('1', { force: true })
                .should('have.value', '1')

            cy.get('.login-button-login').click();

            cy.get('.CatalogueFolders', {timeout: 7000}).find('.CatalogueFolder')
                .then((items)=>{
                    const itemsCount = Cypress.$(items).length;
                    if (itemsCount===1) {
                        cy.get('.CatalogueFolders').find('.CatalogueFolder');
                        cy.get('.CatalogueFolder').click();
                    }

                });



            // cy.get('.CatalogueFolders').find('.CatalogueFolder[id=569797]');
            // cy.get('.CatalogueFolder[id=569797]').click();
            cy.wait(1000);
            // cy.get('a[id="569798"]').click({force: true});


            for (let i = 0; i < 10; i++) {


                let num = Math.floor(Math.random()*3);
                cy.get('.CatalogueFolders')
                    .find('.CatalogueFolder')
                    .filter((index, element )=>{

                        if(index===num) return element;
                    }).click()

                cy.wait(300);
                cy.get('a[id="569798"]').click({force: true});
            }
            cy.get('.logout-button').click();
            cy.wait(700);
        }//for login
    })


})
