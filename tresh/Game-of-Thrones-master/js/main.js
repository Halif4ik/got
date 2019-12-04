const email = document.getElementById("auth_email");
const pass = document.getElementById("auth_pass");
let flag = false;

function isEmail(){
    const regExpEmail =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if (!email.value.match(regExpEmail)) {
        email.classList.add('invalid');
        document.getElementById("errorEmail").innerHTML = 'Please enter a valid email.';
    } else if(email.classList.contains('invalid')){
        email.classList.remove('invalid');
        document.getElementById("errorEmail").innerHTML = '';
        flag = false;
    }
}

email.onblur = () => {
    if(!flag) {
        isEmail();
        flag = true;
    }
};

email.onkeyup = () => {
    if (flag) {
        isEmail();
    }
};

function isPass(){
    const regExpPass = /(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g;
    if(!pass.value.match(regExpPass)){
        pass.classList.add('invalid');
        document.getElementById("errorPass").innerHTML = 'Although there would be one capital letter, ' +
            'small, number and a minimum of 8 characters';
    } else if(pass.classList.contains('invalid')){
        pass.classList.remove('invalid');
        document.getElementById("errorPass").innerHTML = '';
    }
}

pass.onblur = () => {
    if(!flag) {
        isPass();
        flag = true;
    }
};

pass.onkeyup = () => {
    if (flag) {
        isPass();
    }
};

document.getElementById("registration").addEventListener('click', () =>{
    let flag;
    if (email.value === "" && pass.value === "" || email.classList.contains('invalid') || pass.classList.contains('invalid')){
        document.getElementById("error-email-password").style.cssText = 'display:block;';
        return;
    }

    document.getElementById("form-registration").className = 'form-hide';
    document.getElementById("about-user").classList.remove('form-hide');
    document.getElementById("about-user").className = 'form-show';
    document.getElementById("error-email-password").className = 'form-hide';

    const username = document.getElementById("username");
    const authUserHome = document.getElementById("auth_userHome");
    const userPreferences = document.getElementById("auth_preferences");

    function isUserName(){
        const regExpUsername = /^[A-Za-z]{3,50}/g;
        if (!username.value.match(regExpUsername)) {
            username.classList.add('invalid');
            document.getElementById("errorUsername").innerHTML = 'Please enter a valid username.';
        } else if (username.classList.contains('invalid')) {
            username.classList.remove('invalid');
            document.getElementById("errorUsername").innerHTML = '';
            flag = false;
        }
    }

    username.onblur = () => {
        if(!flag) {
            isUserName();
            flag = true;
        }
    };

    username.onkeyup = () => {
        if (flag) {
            isUserName();
        }
    };

    function isAuthUserHome(){
        const regExpAuthUserHome = /^[A-Za-z]/g;
        if (!authUserHome.value.match(regExpAuthUserHome) || authUserHome.value === "Select House") {
            authUserHome.classList.add('invalid');
            document.getElementById("errorAuthUserHome").innerHTML = 'Please select a valid House.';
        } else if (authUserHome.classList.contains('invalid')) {
            authUserHome.classList.remove('invalid');
            document.getElementById("errorAuthUserHome").innerHTML = '';
            flag = false;
        }
    }

    authUserHome.onselectstart = () => {
        if(!flag) {
            isAuthUserHome();
            flag = true;
        }
    };

    authUserHome.onkeyup = () => {
        if (flag) {
            isAuthUserHome();
        }
    };

    function isUserPreferences(){
        const regExpUserPreferences = /^[A-Za-z0-9]{15, }/g;
        if (!userPreferences.value.match(regExpUserPreferences)) {
            userPreferences.classList.add('invalid');
            document.getElementById("errorAuthPreferences").innerHTML = 'Please enter a valid Preferences.';
        } else if (userPreferences.classList.contains('invalid')) {
            userPreferences.classList.remove('invalid');
            document.getElementById("errorAuthPreferences").innerHTML = '';
            flag = false;
        }
    }

    userPreferences.onblur = () => {
        if(!flag) {
            isUserPreferences();
            flag = true;
        }
    };

    userPreferences.onkeyup = () => {
        if (flag) {
            isUserPreferences();
        }
    };

    document.getElementById("aboutUser").addEventListener('click', () => {
        if ( !username.classList.contains('invalid') && username.value !=="" &&
            !authUserHome.classList.contains('invalid') && authUserHome.value !== "" &&
            !userPreferences.classList.contains('invalid') && userPreferences.value !== ""){

            document.getElementById("about-user").classList.remove('form-show');
            document.getElementById("about-user").className = 'form-hide';
            document.getElementById("registered").style.cssText = 'display:block;';

            document.getElementById("error-username-auth_userHome-auth_preferences").className = 'form-hide';
        }else {
            document.getElementById("error-username-auth_userHome-auth_preferences").className = 'form-show';
        }
    });
});


