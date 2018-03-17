$(document).ready(function(){
    var scrollStart = 0;
    var pageContent = $('#page-content');
    var offset = pageContent.offset();
    if (pageContent.length){
        $(document).scroll(function() {
            scrollStart = $(this).scrollTop();
            if(scrollStart > offset.top) {
                $('#page-navigation-multipurpose').addClass('bg-white animated slideInDown').removeClass('bg-transparent');
                $('.navbar-brand .white').addClass('d-none');
                $('.navbar-brand .color').removeClass('d-none');
            } else {
                $('#page-navigation-multipurpose').addClass('bg-transparent').removeClass('bg-white animated slideInDown');
                $('.navbar-brand .color').addClass('d-none');
                $('.navbar-brand .white').removeClass('d-none');
            }
        });
    }
});