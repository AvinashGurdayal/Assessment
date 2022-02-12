//Create url global variable to be used throughout test
const visitSite = () => {
    cy.visit('https://www.workpoints.co.za/')
    cy.url().should('eq', 'https://www.workpoints.co.za/')

  }
//Create global variable for input link
const clickLink = (inputLink : string) =>{
    cy.get(inputLink).click({force: true})
} 

//Check it site is online
it('Visit WorkPoints', () => {

    visitSite() 
})

it('Click About Button', () => {

    visitSite();
    cy.get('#btnAbout > .v-btn__content').should('be.visible');
    clickLink('#btnAbout > .v-btn__content');

})

it('Click Get In Touch Button', () => {

    visitSite();
    cy.get('#btnGetInTouch > .v-btn__content').should('be.visible');
    clickLink('#btnGetInTouch > .v-btn__content');
    cy.url().should('eq', 'https://workpointsv3.encentivize.co.za/getInTouch');
})

it('Click Login Button', () => {

    visitSite();
    cy.get('.v-toolbar__items > :nth-child(3) > #btnLogin').should('be.visible');
    clickLink('.v-toolbar__items > :nth-child(3) > #btnLogin');
    cy.get('.v-toolbar__items > :nth-child(3) > #btnLogin').should('have.attr', 'href', 'https://workpointsv3.encentivize.co.za')

})

it('Check if Login Url is Working', () => {

    cy.visit('https://workpointsv3.encentivize.co.za/');
    cy.url().should('eq', 'https://workpointsv3.encentivize.co.za/');

})

it('Click Second Get In Touch Button', () => {

    visitSite();
    cy.get('button#excGetInTouch').should('be.visible');
    clickLink('button#excGetInTouch');
    cy.url().should('eq', 'https://workpointsv3.encentivize.co.za/getInTouch');
})

it('Click Third Get In Touch Button', () => {

    visitSite();
    cy.get('button#priceGetInTouch').should('be.visible');
    clickLink('button#priceGetInTouch');
    cy.url().should('eq', 'https://workpointsv3.encentivize.co.za/getInTouch');
})

it('Click Experian Logo Button', () => {

    visitSite();
    clickLink('.experian-logo');
    cy.get('.experian-logo').should('be.visible')

})

it('Check About WorkPoints Heading Element', () => {

    visitSite();
    cy.get('#about > :nth-child(1) > .sub-title').should('have.text','About Workpoints')
})

it('Check About WorkPoints Subtext Element', () => {

    visitSite();
    cy.get('#about > :nth-child(1) > .sub-text').should('have.text','A web-based behaviour platform designed to energise and engage your employees.')
})

it('Check Create Title Element', () => {

    visitSite();
    cy.get(':nth-child(2) > .aboutPointLayout > :nth-child(2) > .pointTitle').should('have.text','Create')
})

it('Check Create Description Element', () => {

    visitSite();
    cy.get(':nth-child(2) > .aboutPointLayout > :nth-child(3) > .pointDesc').should('have.text','achievable objectives for everyone.')
})

it('Check Create Pic Element', () => {

    visitSite();
    cy.get(':nth-child(2) > .aboutPointLayout > .mt-12 > .pointImg').should('be.visible').and(($image) => {expect($image[0].clientWidth).to.be.greaterThan(0)
})

})
it('Check Get in Touch Form Element', () => {

    visitSite();
    clickLink('button#priceGetInTouch');
    cy.get('#names').type('John Doe{enter}').should('have.value','John Doe')
    cy.get('#organization').type('Experian{enter}').should('have.value','Experian')
    cy.get('#emailAddress').type('john.doe@experian.com{enter}').should('have.value','john.doe@experian.com')
    cy.get('#location').type('Stellenbosch{enter}').should('have.value','Stellenbosch')
    cy.get('#progSize').type('50{enter}').should('have.value','50')
    cy.get('#telephone').type('0218886000{enter}').should('have.value','0218886000')
    cy.get('#moreDetails').type('Hello, I’m John Doe and this is me running automation tests on your system. “[IGNORE THIS EMAIL]” John.')
    cy.get('#moreDetails').should('have.value','Hello, I’m John Doe and this is me running automation tests on your system. “[IGNORE THIS EMAIL]” John.')
    cy.get('#sendButton').click()
    cy.wait(5000)
    cy.get('.layout > .white--text > .v-btn__content').click()
})
it('Check Engage Title Element', () => {

    visitSite();
    cy.get(':nth-child(1) > .aboutPointLayout > :nth-child(2) > .pointTitle').should('have.text','Engage')
})

it('Check Engage Description Element', () => {

    visitSite();
    cy.get(':nth-child(1) > .aboutPointLayout > :nth-child(3) > .pointDesc').should('have.text','your employees and increase job satisfaction.')
})

it('Check Engage Pic Element', () => {

    visitSite();
    cy.get(':nth-child(1) > .aboutPointLayout > .mt-12 > .pointImg').should('be.visible').and(($image) => {expect($image[0].clientWidth).to.be.greaterThan(0)
    })

})

it('Check Incentivise Title Element', () => {

    visitSite();
    cy.get(':nth-child(3) > .aboutPointLayout > :nth-child(2) > .pointTitle').should('have.text','Incentivise')
})

it('Check Incentivise Description Element', () => {

    visitSite();
    cy.get(':nth-child(3) > .aboutPointLayout > :nth-child(3) > .pointDesc').should('have.text','customised behavior for each individual.')
})

it('Check Incentivise Pic Element', () => {

    visitSite();
    cy.get(':nth-child(3) > .aboutPointLayout > .mt-12 > .pointImg').should('be.visible').and(($image) => {expect($image[0].clientWidth).to.be.greaterThan(0)
    })

})

it('Check Reward Title Element', () => {

    visitSite();
    cy.get(':nth-child(4) > .aboutPointLayout > :nth-child(2) > .pointTitle').should('have.text','Reward')
})

it('Check Reward Description Element', () => {

    visitSite();
    cy.get(':nth-child(4) > .aboutPointLayout > :nth-child(3) > .pointDesc').should('have.text','through peer and management recognition.')
})

it('Check Reward Pic Element', () => {

    visitSite();
    cy.get(':nth-child(4) > .aboutPointLayout > .mt-12 > .pointImg').should('be.visible').and(($image) => {expect($image[0].clientWidth).to.be.greaterThan(0)
    })

})
it('Check Drive Title Element', () => {

    visitSite();
    cy.get(':nth-child(5) > .aboutPointLayout > :nth-child(2) > .pointTitle').should('have.text','Drive')
})

it('Check Drive Description Element', () => {

    visitSite();
    cy.get(':nth-child(5) > .aboutPointLayout > :nth-child(3) > .pointDesc').should('have.text','your organisational culture and instill your values.')
})

it('Check Drive Pic Element', () => {

    visitSite();
    cy.get(':nth-child(5) > .aboutPointLayout > .mt-12 > .pointImg').should('be.visible').and(($image) => {expect($image[0].clientWidth).to.be.greaterThan(0)
    })

})
it('Check Develop Title Element', () => {

    visitSite();
    cy.get(':nth-child(6) > .aboutPointLayout > :nth-child(2) > .pointTitle').should('have.text','Develop')
})

it('Check Develop Description Element', () => {

    visitSite();
    cy.get(':nth-child(6) > .aboutPointLayout > :nth-child(3) > .pointDesc').should('have.text','motivate and retain top talent.')
})

it('Check Develop Pic Element', () => {

    visitSite();
    cy.get(':nth-child(6) > .aboutPointLayout > .mt-12 > .pointImg').should('be.visible').and(($image) => {expect($image[0].clientWidth).to.be.greaterThan(0)
    })

})