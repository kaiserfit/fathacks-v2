$(document).ready(function(){

});
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function getRandomArbitrary(min, max) {
    return  Math.floor(Math.random() * (max - min) + min);
}
function getComments(){
    $('#product-reviews').html('');
    var idx = $(".rev-page.active").index();
    function custom_sort(a, b) {
        return new Date(b.created).getTime() - new Date(a.created).getTime();
    }

    commentsArray.sort(custom_sort);
    $.each(commentsArray , function(key, value){
        if (value.page === idx){
            
          
           var x =(value.created === "") ? "" : new Date(value.created);
           let formattedDate = (x==="")? "": months[x.getMonth()] + ' '+x.getDate() +', ' + x.getFullYear();
            $('#product-reviews').append('<div class="rev-section clearfix">'+
            '<div class="rev-head ">'+
            '<p class="rev-person-name pull-left"><strong>'+ value.fullname +      
            '</strong></p>'+
            
            '<p class="rev-date pull-right">'+ formattedDate  +'</p>'+
            '</div>'+
            '<p class="rev-title">'+ 
            '<img src="components/img_assets/stars.webp" alt="stars" height="15" width="85"><br class="visible-xs">'+
           
            '&nbsp;&nbsp;&nbsp;<strong>'+ value.title +'</strong></p>'+
            '<div class="rev-content">'+ value.content +'</div>'+
            '<div class="rev-vote clearfix">'+
            '<p class="pull-right" style="margin-top: 12px;"><i>Was this review helpful?</i>&nbsp;&nbsp;'+  
            '<a href="javascript:void(0);" class=""><i class="fas fa-thumbs-up user-vote" aria-hidden="true"></i></a>&nbsp;<span class="like-count">'+ value.upvote_count +'</span> &nbsp;&nbsp;'+  
            '<a href="javascript:void(0);"  class=""><i class="fas fa-thumbs-down user-vote" ></i></a>&nbsp;<span class="dislike-count">0</span> </p>'+
            
            '</div>'+
            
            '</div><hr>');

        }
    });

    $(".user-vote").click(function(){
        var me = $(this);
        var userUpvoted = me.parent().parent().find('.fa-thumbs-up').hasClass('liked');
        if ($(this).hasClass('liked')){
            return false;
        }
       
        let up = me.hasClass('fa-thumbs-up');
        let r = me.parent().parent().find('.user-vote');
        r.removeClass('liked');
        me.addClass('liked');
        
        var uvc =  parseInt(me.parent().parent().find('.like-count').text());
        // var dvc =  parseInt(me.parent().parent().find('.dislike-count').text());
        if (up){ //user wants to upvote
            me.parent().parent().find('.dislike-count').text('0');
            me.parent().parent().find('.like-count').text((uvc + 1));
           
        } else {
            if (userUpvoted){
                me.parent().parent().find('.like-count').text((uvc - 1));
            }
            me.parent().parent().find('.dislike-count').text('1');
        }
     
        });

       

    }


$(".rev-page").click(function(){
   
    $(".rev-page").removeClass(' active');
    $(this).addClass('active');
    getComments();
    $('html, body').animate({
        scrollTop: $("#product-reviews").offset().top -20
    }, 'slow');
});

$(".rev-arrows").click(function(e){
  
   var nav = $(this).data('id');
   var idx = $(".rev-page.active").index();


  if (idx === 1 && nav === 'prev'){
    return false;
  }

  if (idx === 10 && nav === 'next'){
    return false;
  }
   var t = (nav === 'next') ? (idx + 1) : (idx - 1);

  
   $(".rev-page").removeClass(' active');
   $(".rev-page").eq(t-1).addClass('active');

   getComments();
   $('html, body').animate({
    scrollTop: $("#product-reviews").offset().top -20
}, 'slow');
    // $(".rev-page").removeClass(' active');
    // $(this).addClass('active');

});








getComments();