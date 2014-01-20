function switch_stations() {
    var whence = document.getElementById('whence');
    var whither = document.getElementById('whither');
    var tmp = whence.value;
    whence.value = whither.value;
    whither.value = tmp;
}

$(document).ready(function () {
    $('.suggest').click(function() {
        $(this).parent().find('input[type=text]').val($(this).text());
    });
});
