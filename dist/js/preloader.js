window.onload = function () {
  var img = document.querySelector('img[src^="https://adfocus.ru/"]');
  img.remove();
    var $preloader = $('#preloader'),
        $svg_anm   = $('#preloader .icon');
    $svg_anm.fadeOut();
    $preloader.delay(500).fadeOut();

    CountBox();
}