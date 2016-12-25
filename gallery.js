function changeImgMargin(value) {
    var elem =  $('.gallery :first-child');
    var mrg = parseInt(elem.css('margin-left'));
    elem.css('margin-left', (mrg + value).toString() + 'px');
}

function close_img(){
    $('.fullsize').css('visibility', 'hidden');
}

$(document).ready(function () {
    var imgWidth = ($(document).width() / 100 * 90) / 5;
    $('.arrow-left').click(function() {
        if ($('.first-img').offset()['left'] < 0) {
            changeImgMargin(imgWidth)
        }
    });

    $('.arrow-right').click(function() {
        if ($('#last-img').position()['left'] > $(document).width()) {
            changeImgMargin(-imgWidth)
        };
    });

    $('.close').click(close_img);

    $('.gallery img').css('width', imgWidth + 'px');
    $('#first-img').css('margin-left', -imgWidth + 'px');
});

function showFull(num) {
    $('.fullsize').css('visibility', 'visible');
    $('.fullsized-img').attr('src', 'bigimgs/' + num + '.jpg')

    fullsizeFunctions(num);
}

function fullsizeFunctions(num) {
    $('.big-arrow-left').click(function() {
        if (num > 1)
            num--;
        else
            num = 9;
        $('.fullsized-img').attr('src', 'empty');
        $('.fullsized-img').attr('src', 'bigimgs/' + num + '.jpg');
    });

    $('.big-arrow-right').click(function() {
        if (num < 9)
            num++;
        else
            num = 1;
        $('.fullsized-img').attr('src', 'empty');
        $('.fullsized-img').attr('src', 'bigimgs/' + num + '.jpg');
    });
}


