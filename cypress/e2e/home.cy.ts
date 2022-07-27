describe("Navigation", () => {
    it("should navigate to the projects page on button", () => {
        cy.visit("/");

        cy.get('a[href*="projects"]').click();

        cy.url().should("include", "/projects");

        cy.get("h1").contains("Projects");
    });

    it("should navigate to the projects page on header list", () => {
        cy.visit("/");

        cy.get('li[href*="projects"]').click();

        cy.url().should("include", "/projects");

        cy.get("h1").contains("Projects");
    });

    it("should navigate to the skills page on button", () => {
        cy.visit("/");

        cy.get('a[href*="skills"]').click();

        cy.url().should("include", "/skills");

        cy.get("h1").contains("Skills");
    });

    it("should navigate to the skills page on header list", () => {
        cy.visit("/");

        cy.get('li[href*="skills"]').click();

        cy.url().should("include", "/skills");

        cy.get("h1").contains("Skills");
    });
});

describe("Copy email to clipboard", () => {
    it("should copy email to clipboard", () => {
        cy.visit("/");

        cy.get(".mail-copy").click();

        cy.window().then((win) => {
            win.navigator.clipboard.readText().then((text) => {
                expect(text).to.eq("scho.yannick@gmail.com");
            });
        });
    });
});

export {};
