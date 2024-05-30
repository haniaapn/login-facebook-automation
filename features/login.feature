Feature: Facebook Login Page

  Background:
    Given I am on the Facebook login page

  Scenario Outline: Unsuccessful login with invalid password
    When I enter an email "<email>" and password "<password>"
    And I click on the Log in button
    Then I should see an error message "<error_message>"

    Examples:
      | email              | password  | error_message                           |
      | <yourvalidemail>   | pwfalse   | Kata sandi yang Anda masukkan salah.    | 

  Scenario Outline: Unsuccessful login with empty credentials
    When I enter an email "<email>" and password "<password>"
    And I click on the Log in button
    Then I should see an error message "<error_message>"
    Examples:
      | email                         | password  | error_message                                                                 |
      |                               |           | Email atau nomor ponsel yang Anda masukkan tidak terhubung ke akun.  |

  Scenario Outline: Successful login with valid credentials
    When I enter an email "<email>" and password "<password>"
    And I click on the Log in button
    Then I should be redirected to my Facebook homepage

    Examples:
      | email                         | password        |
      | <yourvalidemail>              | <yourvalidpass> |
