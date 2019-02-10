//Polyfill

cssVars();



//This opens/closes the mobile nav

$('.nav-promt').click(function () {

    if ($('.nav-inner').attr('aria-expanded') == 'false') {

        $('.nav-inner').attr('aria-expanded', 'true');

    } else {

        $('.nav-inner').attr('aria-expanded', 'false');
    }
})



//Image Gallery LightBox 

function imageGallery() {
    if (!$('.image-gallery').length) {
        return;
    }

    $('.image-gallery a').simpleLightbox();
}

imageGallery();
