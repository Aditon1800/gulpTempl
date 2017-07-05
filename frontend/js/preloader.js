window.onload = function () {
    var $preloader = $('#preloader'),
        $svg_anm   = $('#preloader .icon');
    $svg_anm.fadeOut();
    $preloader.delay(500).fadeOut();

    CountBox();
}