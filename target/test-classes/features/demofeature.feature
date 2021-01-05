Feature: demo script

  Background: open the browser and navigate to facebook page
    Given User is on facebook page

  @smoke
  Scenario Outline: signup facebook page
    When Enter user name and password "<username>" ,"<password>"
    Then click on login button "<String1>" ,"<String2>"

    Examples: 
      | username | password | String1 | String2 |
      | duva     | pass1    | success | failed  |
      | user2    | pass2    | pass    | fail    |

  @smoke1
  Scenario Outline: signup facebook page for background
    When Enter user name and password "<username>" ,"<password>"
    Then click on login button "<String1>" ,"<String2>"

    Examples: 
      | username | password | String1 | String2 |
      | duva     | pass1    | XXXXXX  | YYYYYY  |
      | user2    | pass2    | AAAAAAA | BBBBBB  |
