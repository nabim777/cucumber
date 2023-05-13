Feature: view details
    As a user
    I want to view details of a movie
    So that I can watch movie I want
    

    Scenario: view details of movie
        Given the user has browsed to the login page
        And the user has sucessfully logged in with username "nabinale" and password "123456"
        And search movie "Jhola"
        When user views movie "Jhola" in the list
        And user selects movie "Jhola" on the list
        Then the user should be redirected to the detail page of "Jhola"
