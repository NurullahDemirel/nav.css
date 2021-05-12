
$(function() {

    $( "#for-menu" ).mouseover(function() {
        $(this).css({
            'border-bottom':'3px solid rgb(131, 183, 53)'
        });
    });

    $( "#for-menu" ).mouseout(function() {
    var deger=$(this).css('background-color').indexOf('rgb(');
    if( deger !=0){
        $(this).css({
            'border':'none'
        });
    }
    });


    $( "#for-categories" ).mouseover(function() {
        $(this).css({
            'border-bottom':'3px solid rgb(131, 183, 53)'
        });
    });

    $( "#for-categories" ).mouseout(function() {
        var deger=$(this).css('background-color').indexOf('rgb(');
        if( deger !=0){
            $(this).css({
                'border':'none'
            });
        }
    });

    $('#page-row').click(function (){
        if($('#page-row i').hasClass('fa-chevron-down')){ //eğer açıksa
            $(this).css({
                'background': 'transparent'
            });
            $('#page-inner').css({
                'display':'none'
            });
            $('#page-row i').removeClass('far fa-chevron-down').addClass('fa-chevron-right fal');

        }
        else{//açık değilse
            $(this).css({
                'background': 'rgb(131, 183, 53)'
        });
            $('#page-inner').css({
                'display':'block'
        });
            $('#page-row i').removeClass('fa-chevron-right fal').addClass('far fa-chevron-down');
        }
    });




    $('#pre-built-pages').click(function (){
        if($('#pre-built-pages i').hasClass('fa-chevron-down')){ //eğer açıksa
            $(this).css({
                'background': 'transparent'
            });
            $('#pre-built-pages-inner').css({
                'display':'none'
            });
            $('#pre-built-pages i').removeClass('far fa-chevron-down').addClass('fa-chevron-right fal');

        }
        else{//açık değilse
            $(this).css({
                'background': 'rgb(131, 183, 53)'
            });
            $('#pre-built-pages-inner').css({
                'display':'block'
            });
            $('#pre-built-pages i').removeClass('fa-chevron-right fal').addClass('far fa-chevron-down');
        }
    });


    $('#pre-built-layout').click(function (){
        if($('#pre-built-layout i').hasClass('fa-chevron-down')){ //eğer açıksa
            $(this).css({
                'background': 'transparent'
            });
            $('#pre-built-layout-inner').css({
                'display':'none'
            });
            $('#pre-built-layout i').removeClass('far fa-chevron-down').addClass('fa-chevron-right fal');

        }
        else{//açık değilse
            $(this).css({
                'background': 'rgb(131, 183, 53)'
            });
            $('#pre-built-layout-inner').css({
                'display':'block'
            });
            $('#pre-built-layout i').removeClass('fa-chevron-right fal').addClass('far fa-chevron-down');
        }
    });
    $('#for-categories').click(function (){
        $('#current-list').css({
            'display' :'none'
        });
        $('#for-menu').css({
            'border':'none',
            'background':'rgba(0,0,0,0)'
        });


        $('.new-list-tab').css({
            'display' :'block'
        });
        $(this).css({
            'border-bottom':'3px solid rgb(131, 183, 53)',
            'background':'#F5F5F5'
        });

    });

    $('#for-menu').click(function (){
        $('.new-list-tab').css({
            'display' :'none'
        });
        $('#for-categories').css({
            'border':'none',
            'background':'rgba(0,0,0,0)'
        });
        $('#current-list').css({
            'display' :'block',
        });
        $(this).css({
            'border-bottom':'3px solid rgb(131, 183, 53)',
            'background':'#F5F5F5'
        });
    });

    $('#menu-bar-icon').click(function (){
        $('#open-mobile').css('display','block');
        $('#navigation-menu').css('display','block');
    });



     $('#open-mobile').click(function (){
        $('#navigation-menu').css({
            'display':'none',
        });
        $('#open-mobile').css({
            'display':'none'
        });
    });
});
