
jQuery(document).ready(function() {

    /*
        Background slideshow
    */
    $.backstretch([
      "assets/img/backgrounds/1.jpg"
    , "assets/img/backgrounds/2.jpg"
    , "assets/img/backgrounds/3.jpg"
    ], {duration: 3000, fade: 750});

    /*
        Tooltips
    */
    $('.links a.home').tooltip();
    $('.links a.blog').tooltip();

    /*
        Form validation
    */
    $('.register form').submit(function(){
        var fileds = ['name', 'email', 'device', 'subject', 'message'];

        // remove warnings
        for (let fieldName of fileds) {
            $(this).find(`label[for='${fieldName}'] span`).remove();
        }

        var valid = true;
        for (let fieldName of fileds) {
            var $field = $(this).find(`input#${fieldName}`);
            if ($field.val() == null || $field.val() == '') {
                showInvalidMessageForFiled(fieldName)
                valid = false;
            }            
        }

        if (valid) {
            setTimeout(function() {
                alert('Thank you for contacting us. \nWe have received your request and will respond to you within 24 hours');
                location.reload();
            }, 500);
        }

        return false;
    });

    function showInvalidMessageForFiled(fieldName) {
        $('.register form').find(`label[for='${fieldName}']`).append(`<span style='display:none' class='red'> - Please enter a valid ${fieldName}.</span>`);
        $('.register form').find(`label[for='${fieldName}'] span`).fadeIn('medium');
    }
});


