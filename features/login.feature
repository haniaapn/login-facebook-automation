Feature: Facebook Login Page
  As a Facebook user
  I want to login to my account
  So that I can access my Facebook homepage

  Background:
    Given I am on the Facebook login page

  Scenario Outline: Successful login with valid credentials
    When I enter an email "<username>" and password "<password>"
    And I click on the "Log In" button
    Then I should be redirected to my Facebook homepage

    Examples:
      | email                         | password  |
      | hania.pratiwi.hpn@gmail.com   | FbHania11 |

  Scenario Outline: Unsuccessful login with invalid password
    When I enter a email "<username>" and password "<password>"
    And I click on the "Log In" button
    Then I should see an error message "<error_message>"

    Examples:
      | email                         | password  | error_message                                   |
      | hania.pratiwi.hpn@gmail.com   | FbHania10 | The password that you've entered is incorrect.  | 

  Scenario Outline: Unsuccessful login with invalid email
    When I enter an email "<username>" and password "<password>"
    And I click on the "Log In" button
    Then I should see an error message "<error_message>"
    Examples:
      | email                         | password  | error_message                                                |
      | examplwnr5423@gmail.com       | FbHania11 | The email address you entered isn't connected to an account. |

  Scenario Outline: Unsuccessful login with empty credentials
    When I enter an email "<username>" and password "<password>"
    And I click on the "Log In" button
    Then I should see an error message "<error_message>"
    Examples:
      | email                         | password  | error_message                                                                 |
      |                               |           | The email address or mobile number you entered isn't connected to an account. |


