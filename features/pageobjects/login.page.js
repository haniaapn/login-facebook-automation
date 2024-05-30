import Page from '/Users/haniapn/Documents/login-facebook-automation/features/pageobjects/page.js'

class LoginPage extends Page{
    open() {
        super.open('https://id-id.facebook.com/')
    }
    get emailInput(){
        return $('#email');
    }
    get passwordInput(){
        return $('#pass');
    }
    get loginButton(){
        return $('#u_0_9_Sv');
    }
    get homepageElement(){
        return $('svg[aria-label="Profil Anda"]')
    }

    get errorMsg(){
        return $('div[class="_9ay7"]')
    }



}