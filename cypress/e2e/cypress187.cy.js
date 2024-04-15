
// it("register account", () => {
//     cy.visit("https://automationteststore.com/");
//     cy.contains("Login or register").click();
//     cy.get(".maintext").should("have.text", " Account Login");
//     cy.get(".maintext").contains("Account Login").should("be.visible");
//     cy.get("#accountFrm > fieldset > .btn").click();
//     cy.get(".maintext").contains("Create Account").should("be.visible");
//     cy.get("#AccountFrm_firstname").type("Mat");
//     cy.get("#AccountFrm_lastname").type("Kir");
//     const email = "test1" + Math.random() + "@gmail.com";
//     cy.get("#AccountFrm_email").type("test2@gmail.com");
//     cy.get("#AccountFrm_address_1").type("1 ragacis qucha");
//     cy.get("#AccountFrm_city").type("tbilisi");
//     cy.get("#AccountFrm_postcode").type("1234");
//     cy.get("#AccountFrm_country_id").select("Albania");
//     cy.get("#AccountFrm_zone_id").select("Berat");
//     cy.get("#AccountFrm_loginname").type("RAXDEBA");
//     cy.get("#AccountFrm_password").type("password123");
//     cy.get("#AccountFrm_confirm").type("password123");
//     cy.get("#AccountFrm_newsletter0").check();
//     cy.get("#AccountFrm_agree").check();
//     cy.get("#AccountFrm").submit();
//     cy.contains("Welcome back Mat").should("be.visible");
//     cy.get(".maintext").contains(" Your Account Has Been Created!").should("be.visible");


//     cy.login('ComptonG','comptonski');



// cy.LogOut();
// })

//     it("Register User", () => {
//       cy.visit("https://automationteststore.com/");
//       cy.get('#customer_menu_top > li > a').click();
//       cy.get('#accountFrm > fieldset > .btn').click();
//       cy.get('#AccountFrm_firstname').type("Matteo");
//       cy.get('#AccountFrm_lastname').type("Kirtadze");
//       cy.get('#AccountFrm_email').type("testmail@gmail.com");
//       cy.get('#AccountFrm_address_1').type("dolidzis 1");
//       cy.get('#AccountFrm_city').type("Tbilisi")
//       cy.get('#AccountFrm_country_id').select("United States");
//       cy.get('#AccountFrm_zone_id').select("California");
//       cy.get('#AccountFrm_postcode').type("187");
//       cy.get('#AccountFrm_loginname').type("ComptonG");
//       cy.get('#AccountFrm_password').type("compton187");
//       cy.get('#AccountFrm_confirm').type("compton187")
//       cy.get('#AccountFrm_newsletter1').check();
//       cy.get('#AccountFrm_agree').check();
//       cy.get('.col-md-2 > .btn').click();
// });
// });  

// it("Login User", () => {
//     cy.visit("https://automationteststore.com/");
//        cy.login('ComptonG','compton187')
//     cy.get('#customer_menu_top > li > a').click();
//     cy.get('#loginFrm_loginname').type("ComptonG")
    
//     cy.get('#loginFrm_password').type("comptonski")
//     cy.get('#loginFrm > fieldset > .btn').click();
//     cy.get('#customer_menu_top > :nth-child(1) > .top > .menu_text').should('be.visible','Welcome back Mattiass');
   
// })

    // beforeEach(()=>{
        // cy.visit("https://automationteststore.com/");
        // cy.login(testdata.userName,testdata.password)
    // })
    // it("Register User", () =>{
    //     cy.visit("https://automationteststore.com/");
    //     cy.get('#customer_menu_top > li > a').click();
    //     cy.get('#accountFrm > fieldset > .btn').click();
    //     cy.get('#AccountFrm_firstname').type(testdata.FirstName);
    //     cy.get('#AccountFrm_lastname').type(testdata.LastName);
    //     cy.get('#AccountFrm_email').type(testdata.Email);
    //     cy.get('#AccountFrm_telephone').type(testdata.Telephone);
    //     cy.get('#AccountFrm_fax').type(testdata.Fax);
    //     cy.get('#AccountFrm_company').type(testdata.Company);
    //     cy.get('#AccountFrm_address_1').type(testdata['Address 1']);
    //     cy.get('#AccountFrm_address_2').type(testdata['Address 2']);
    //     cy.get('#AccountFrm_country_id').select(testdata.Country);
    //     cy.get('#AccountFrm_city').type(testdata.City);
    //     cy.get('#AccountFrm_zone_id').select(testdata.RegionState);
    //     cy.get('#AccountFrm_postcode').type(testdata.Postcode);
    //     cy.get('#AccountFrm_loginname').type(testdata.LoginName);
    //     cy.get('#AccountFrm_password').type(testdata.Password);
    //     cy.get('#AccountFrm_confirm').type(testdata.PasswordConf)
    //     cy.get('#AccountFrm_newsletter1').check();
    //     cy.get('#AccountFrm_agree').check();
    //     cy.get('.col-md-2 > .btn').click();
       
//     // })
// it("LogIn with correct mail and password", () =>{
//     cy.visit( 'http://automationexercise.com');
//     cy.login(testdata.LoginName,testdata.Password)
// })
//     })
