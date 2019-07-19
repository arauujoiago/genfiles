//DESLIZA SUAVE
jQuery(document).ready(function($) {
    $('.scrollSuave').click(function(event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top - 70 }, 500);
    });
});

//OCULTA MENU
$(document).ready(function() {
    $('#exibe_oculta').click(function() {
        $('#menu_lateral,#menu_lateral_fundo, #topo_menu_lateral').fadeToggle('swing');
    });
});

$(document).ready(function() {
    $('#menu_menu_lateral').click(function() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            $('#menu_lateral,#menu_lateral_fundo, #topo_menu_lateral').fadeToggle('swing');
        }
    });
});

$(document).ready(function() {
    $(document).on("scroll", onScroll);
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('#menu_menu_lateral a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top - 70 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu_menu_lateral a').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}

(function() {
    var delay = false;

    $(document).on('mousewheel DOMMouseScroll', function(event) {
        if (delay) return;

        delay = true;
        setTimeout(function() { delay = false }, 200)

        var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

        var a = document.getElementsByClassName('topico');
        if (wd < 0) {
            for (var i = 0; i < a.length; i++) {
                var t = a[i].getClientRects()[0].top;
                if (t >= 80) break;
            }
        } else {
            for (var i = a.length - 1; i >= 0; i--) {
                var t = a[i].getClientRects()[0].top;
                if (t < -20) break;
            }
        }

        if (i >= 0 && i < a.length) {
            //SUBINDO
            if (wd > 0) {
                if ($(window).scrollTop() <= (a[i].offsetTop + 250)) {
                    $('html,body').animate({
                        scrollTop: a[i].offsetTop
                    });
                } else if ((($(window).scrollTop() + 50) <= (a[i + 1].offsetTop)) && (($(window).scrollTop() + 450) >= (a[i + 1].offsetTop))) {
                    $('html,body').animate({
                        scrollTop: a[i].offsetTop
                    });
                }

            }
            //DESCENDO
            if (wd < 0) {
                if (a[i - 1].clientHeight < ($('#espaçador').height())) {
                    $('html,body').animate({
                        scrollTop: a[i].offsetTop
                    });
                } else if ($(window).scrollTop() >= (a[i].offsetTop - ($('#espaçador').height() * 1.75))) {
                    $('html,body').animate({
                        scrollTop: a[i].offsetTop
                    });
                }
            }
        }
    });
})();

//ESCURER PAGINA QUANDO PASSAR O MOUSE EM UMA IMAGEM

$(document).ready(function() {
    $('p img').hover(function() {
        $('#darkness').fadeTo(200, 1);
    }, function() {
        $('#darkness').fadeTo(200, 0, function() {
            $(this).hide();
        });
    });
});

//ESCONDER BARRA DO TOPO QUANDO ROLAR A TELA NO MOBILE

$(document).ready(function() {
    var flag = 0;
    if ($(window).width() < 720) {
        window.onscroll = function() {
            document.getElementById("barra-topo").style.top = "0";
            if (flag == 0) {
                var x = setTimeout(function() {
                    if (!(document.getElementById("menu_lateral").style["display"] == "block")) {
                        document.getElementById("barra-topo").style.top = "-70px";
                    }
                    flag = 0;
                }, 2000);
            }
            flag = 1;

        }
    }
});