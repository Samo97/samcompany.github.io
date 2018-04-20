$(document).ready(function () {



    $(window).scroll(function () {
        if ($(document).scrollTop() > 50){
            $('nav').addClass('shrink');
        }
        else{
            $('nav').removeClass('shrink');
        }
    });



    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1200);
    });





    $('#container').imagesLoaded( function() {


        $('.portfolio-btn').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

        var $grid = $('.grid').isotope({

            // set itemSelector so .grid-sizer is not used in layout
            itemSelector: '.grid-item',
            percentPosition: true,
            stagger: 70,
            masonry: {
                // use element for option
                columnWidth: '.grid-item'
            }
        })
    });

});