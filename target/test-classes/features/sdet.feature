Feature: Google search feature

  Scenario Outline: write String in google searchTextbox
    Given user navigate to google page
    When user enter string in search box "<values>"
    Then The Result will display

    Examples: 
      | values  |
      | IBM     |
      | Manipal |
      | Amit    |
