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

//VOLTA PRO TOPO
$(document).ready(function() {
    $('#gotopo').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
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

        // WD = -120 QUANDO DESCE
        // WD = 120 QUANDO SOBE

        var a = document.getElementsByClassName('topico');
        if (wd < 0) {
            //condicao quando desce pra travar o i quando t >= valorTal

            for (var i = 0; i < a.length; i++) {
                // console.log('desce a[' + i + '].getClientRects()[0].top = ' + a[i].getClientRects()[0].top);
                // console.log('é pra dar break >=80?');
                var t = a[i].getClientRects()[0].top;
                // console.log('T de ' + i + '=' + t)
                if (t >= 80) break;
            }
        } else {
            //condicao quando sobe pra travar o i
            for (var i = a.length - 1; i >= 0; i--) {
                // console.log('sobe a[' + i + '].getClientRects()[0].top = ' + a[i].getClientRects()[0].top);
                // console.log('é pra dar break < -20?');
                var t = a[i].getClientRects()[0].top;
                // console.log('T de ' + i + '=' + t);
                if (t < -20) break;
            }
        }

        if (i >= 0 && i < a.length) {
            // console.log('window: ' + $(window).scrollTop())
            // console.log('a[' + i + '].offset: ' + a[i].offsetTop)
            // console.log(a[i].clientHeight)
            // console.clear();
            // console.log('|||||||||||||||||||||||||||||');
            // console.log('Você está no ' + (i - 1))
            // console.log('Tamanho de  ' + i + ' = ' + a[i].clientHeight)
            // console.log('posicao no scroll de ' + i + ' = ' + a[i].offsetTop)
            // console.log('posicao no scroll da tela = ' + $(window).scrollTop())
            // console.log('Valor para pular(posicao de ' + i + ' - (tamanhode' + i + ' + 600)): ' + (a[i].offsetTop - (a[i - 1].clientHeight + 600)))

            //subindo
            if (wd > 0) {
                //     console.log('window: ' + $(window).scrollTop())
                //     console.log('a[' + i + '].offset: ' + a[i].offsetTop);
                //     console.log('diferença = ' + ($(window).scrollTop() - a[i].offsetTop));
                //     console.log('---------------');
                //     console.log('window: ' + $(window).scrollTop())
                //     console.log('a[' + (i + 1) + '].offset: ' + a[i + 1].offsetTop);
                //     console.log('diferença = ' + ($(window).scrollTop() - a[i + 1].offsetTop));
                //     console.log('|||||||||||||||||||||||||||||');
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
            //descendo
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
// console.clear();

$(document).ready(function() {
    $('p img').hover(function() {
        $('#darkness').fadeTo(200, 1);
    }, function() {
        $('#darkness').fadeTo(200, 0, function() {
            $(this).hide();
        });
    });
});

$(document).ready(function() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("barra-topo").style.top = "0";
        } else {
            document.getElementById("barra-topo").style.top = "-50px";
        }
        prevScrollpos = currentScrollPos;
    }
});