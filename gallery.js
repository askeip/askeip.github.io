function changeImgMargin(value) {
    var elem =  $('.gallery :first-child');
    var mrg = parseInt(elem.css('margin-left'));
    elem.css('margin-left', (mrg + value).toString() + 'px');
}

function close_img(){
    $('.fullsized-img').remove();
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

function createImage(num) {
    $('.fullsized-img').remove();
    var img = document.createElement('img');
    img.src = 'bigimgs/' + num + '.jpg';
    img.className = "fullsized-img";
    $('.fullsize').append(img);
}

function showFull(num) {
    $('.fullsize').css('visibility', 'visible');

    createImage(num);
    fullsizeFunctions(num);
}

function fullsizeFunctions(num) {
    $('.big-arrow-left').click(function() {
        if (num > 1)
            num--;
        else
            num = 9;
        createImage(num);
    });

    $('.big-arrow-right').click(function() {
        if (num < 9)
            num++;
        else
            num = 1;
        $('.fullsized-img').attr('src', 'empty');
        $('.fullsized-img').attr('src', 'bigimgs/' + num + '.jpg');
        createImage(num);
    });
}


