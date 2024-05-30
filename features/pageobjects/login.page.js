
class LoginPage{

    async open() {
        await browser.url('https://id-id.facebook.com/login');
    }
    get emailInput(){
        return $('#email');
    }
    get passwordInput(){
        return $('#pass');
    }
    get loginButton(){
        return $('#loginbutton');
    }
    get homepageElement(){
        return $('svg[aria-label="Profil Anda"]')
    }

    get errorMsg(){
        return $('div[class="_9ay7"]')
    }

}

module.exports = new LoginPage()