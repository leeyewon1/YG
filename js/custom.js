$(function () {
    // $('#content').YTPlayer({
    //     videoURL: 'https://www.youtube.com/embed/eQNHDV7lKgE',
    //     containment: '.visual_content .movie_case',
    //     showControls: false,
    //     optimizeDisplay: false,
    //     autoPlay: false,
    // });

    // let movie = true;

    // AOS.init({
    //     once: true,
    // });
    // $(window).on('load', function () {
    //     AOS.refresh();
    // });
    // 출처: https://blog.wdev.kr/entry/aosjs-aosjs-애니메이션-플러그인-캐쉬-오류 [blog.wdev.kr:티스토리]

    $('.mopen').on('click', function () {
        $('.gnb').toggleClass('on');
        $(this).find('.hamburger').toggleClass('is-active');
    });

    $('.visual_content .movie_play').on('click', function () {
        if (movie) {
            $('#content').YTPPlay();
        }
        else {
            $('#content').YTPPause();
        }

        $(this).toggleClass('on');
        movie = !movie;
    });

    $('.tab_menu li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        $('.tab_menu li').removeClass('on');
        $('.tab_menu li').eq(idx).addClass('on');

        $('.tab_content .banner_itm').removeClass('on')
        $('.tab_content .banner_itm').eq(idx).addClass('on')
    });

    $('.icon i').on('click', function (e) {
        e.preventDefault();
        $('.history .inner .inner_box').toggleClass('on')
    });

    $(window).on('wheel', function (e) {
        console.log(e.originalEvent.deltaY);
        let _delta = e.originalEvent.deltaY;
        if (_delta > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }
    });



    $('.totop').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 900);
    });

    $(window).on('scroll', function () {
        const sct = $(window).scrollTop();
        if (sct > 300) {
            $('.totop').addClass('on');
            // $('.Header').addClass('on');
        } else {
            $('.totop').removeClass('on');
            // $('.Header').removeClass('on');
        }
    });





});


$(document).ready(function () {
    AOS.init();
});