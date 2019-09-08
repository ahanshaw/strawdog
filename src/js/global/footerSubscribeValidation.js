function footerSubscribeValidation() {
    var emailValidation = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i,
        emailInput = $('.c-footer__newsletter input[type=email]'),
        emailSubmit = $('.c-footer__newsletter input[type=submit]'),
        error = $('.c-footer__newsletter .error');

    emailInput.change(function() {
        if (emailValidation.test(emailInput.val())) {
            emailSubmit.removeAttr('disabled');
            error.hide();
        }
        else {
            error.show();
        }
    });
}

export { footerSubscribeValidation };
