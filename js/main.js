$(document).ready(function () {
    $("#biography").click(function () {
        $(".modal-biography").addClass("open");
        $(".hide-modal").click(function () {
            $(".modal-biography").removeClass("open");
        });
    });
});


$('.control-room-tabs li a').on('click', function (e) {
    let target = $(this).attr('id');
    e.preventDefault();
    $(this).addClass('active');
    $('.control-room-tabs li a ').not($(this)).removeClass('active');
    $('.tabs').find(target).show();
    $('.tabs .tab').not(target).hide();
});
$('.control-room-tabs li a').first().addClass('active');
$('.tabs .tab').first().addClass('open');
