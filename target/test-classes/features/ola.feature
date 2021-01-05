Feature: OLA CORP script

  Background: open the browser and navigate to facebook page
    Given User is on OLA page

  Scenario Outline: open OLA corporate
    When Enter all the mandatory fields "<Name>" ,"<EmailAddress>","<country>" ,"<CompanyName>" ,"<dialingcode>" ,"<PhoneNumber>" ,"<Department>" ,"<NumberofEmployees>" ,"<Comments>"
    Then click on login button

    Examples: 
      | Name | EmailAddress    | country | CompanyName | dialingcode | PhoneNumber | Department | NumberofEmployees | Comments                   |
      |      | aaaaa@gmail.com | INDIA   | ibm         | +91         |  9003477898 | Admin      | Less than 50      | selenium with BDD Examples |

  Scenario Outline: open OLA corporate for name validation for more than 100 character
    When Enter all the mandatory fields "<Name>" ,"<EmailAddress>","<country>" ,"<CompanyName>" ,"<dialingcode>" ,"<PhoneNumber>" ,"<Department>" ,"<NumberofEmployees>" ,"<Comments>"
    Then click on login button

    Examples: 
      | Name                                                                                                                                    | EmailAddress   | country | CompanyName | dialingcode | PhoneNumber | Department | NumberofEmployees | Comments                   |
      | duvashhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhgggggahahahahahahahajajakakaakahakakahahhhhhhhhhhhhhhahahahahahahahahahaha | duva@gmail.com | UK      | ibm         | +44         |  9003477898 | HR         | 201 to 2,500      | selenium with BDD Examples |

  Scenario Outline: open OLA corporate for name validation for less than 100 character
    When Enter all the mandatory fields "<Name>" ,"<EmailAddress>","<country>" ,"<CompanyName>" ,"<dialingcode>" ,"<PhoneNumber>" ,"<Department>" ,"<NumberofEmployees>" ,"<Comments>"
    Then click on login button

    Examples: 
      | Name                                                                | EmailAddress    | country   | CompanyName | dialingcode | PhoneNumber | Department | NumberofEmployees | Comments                   |
      | duvashhhhhhhhhgggggahahahahahahahajajakahhhhhhahahahahahahahahahaha | xxxxx@gmail.com | AUSTRALIA | ibm         | +61         |  9003477898 | Finance    | 50 to 200         | selenium with BDD Examples |

  Scenario Outline: open OLA corporate name equal to null
    When Enter all the mandatory fields "<Name>" ,"<EmailAddress>","<country>" ,"<CompanyName>" ,"<dialingcode>" ,"<PhoneNumber>" ,"<Department>" ,"<NumberofEmployees>" ,"<Comments>"
    Then click on login button

    Examples: 
      | Name       | EmailAddress    | country     | CompanyName | dialingcode | PhoneNumber | Department  | NumberofEmployees | Comments                   |
      | duvarakesh | yyyyy@gmail.com | NEW ZEALAND | ibm         | +91         |  9003477898 | Travel desk | More than 2,500   | selenium with BDD Examples |
