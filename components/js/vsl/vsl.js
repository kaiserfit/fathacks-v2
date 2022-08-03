$( document ).ready(function() {

 
   
var v = getCookie('rec');
if (v === 'instant'){
  document.getElementById("co-box").style.display = 'block';
}
   
 function showCO(){
     document.getElementById("co-box").style.display = 'block'; 
     document.cookie = "fh-watched=1";
     productLoad();
   }

   function checkCookie() {

     var fhw = getCookie("fh-watched");
    var fsw = getCookie("fh-played");
    if (fsw != "") {
      // $(".video-play").hide();
    }
      if (fhw != "") {
        // document.getElementById("co-box").style.display = 'block';

}

else { //initiate timer of vid
  // document.cookie = "fh-watched=1";
  document.cookie = "fh-played=1";
    // setTimeout(showCO, 2690000);

}  

document.cookie="mobile="+window.mobileCheck();

     
}
   
   checkCookie();



   var hook1 = false;
   var hook2 = false;
   var hook3 = false;
   var hook4 = false;
   var hook5 = false;
   var hook6 = false;
   var hookFinal = false;


     var userPlay = false;
    //  const player = videojs('my-video');
     const player = videojs('my-video', {
       "playbackRates": [0.75, 1, 1.25, 1.5],
       "controls": true,
       muted: true,
       sources: [{
        src:'https://d2rvo1g7c89cun.cloudfront.net/',
        type: "video/mp4",
    
      }],
      controls: true,
       fluid: true,
       autoplay: true,
       plugins: { eventTracking: true }
   } );
   player.eventTracking({plugins: { eventTracking: true }})
   
   $("#btnPlay").click(function(){
     if (userPlay === false){
       player.muted(false);
     player.currentTime(0);
     $(this).hide();
     $(".video-js .vjs-control-bar").css({"visibility":"visible"});
     userPlay = true;
   } else {
     player.play();
     $(this).hide();
     }
     
   
 });


 player.on('tracking:firstplay', (e, data) => {
   console.log(data);
   $(".control-onload").css({"display":"block"});
 });

 
 // player.on('play', (e, data) => $("#btnPlay").hide());
 // player.on('tracking:pause', (e, data) => console.log(data));
 // player.on('tracking:pause', (e, data) => $("#btnPlay").show());
 player.on('timeupdate', function(){
   var time = player.currentTime();

   if (time >= 60 && time < 300){
     if (hook1 === false) {
       ttq.track('CompleteRegistration');
       // fbq('track', 'AddToCart', {}, {eventID:event_id});
       // kTr('AddToCart');
      //  gtag('event', 'conversion', {'send_to': 'AW-10886811479/6K6WCIrh87QDENeensco'});
       hook1 = true;
     }
   }

   if (time >= 300 && time < 600){
     if (hook2 === false) {
       ttq.track('Download');
       // fbq('track', 'AddToWishList', {}, {eventID:event_id});
       // kTr('AddToWishList');
      //  gtag('event', 'conversion', {'send_to': 'AW-10886811479/fJd-CNrm87QDENeensco'});
       hook2 = true;
     }
   }

   if (time >= 600 && time < 900) {
     if (hook3 === false) {
       // fbq('track', 'Search', {}, {eventID:event_id});
       // kTr('Search');
      //  gtag('event', 'conversion', {'send_to': 'AW-10886811479/ksVsCOng8bQDENeensco'});
       hook3 = true;
     }
   }

   if (time >= 900 && time < 1800) {
     if (hook4 === false) {
       ttq.track('Subscribe');
     // fbq('track', 'CompleteRegistration', {}, {eventID:event_id});
     // kTr('CompleteRegistration');
    //  gtag('event', 'conversion', {'send_to': 'AW-10886811479/tWHeCMfu87QDENeensco'});
     hook4 = true;
     }
   }

   if (time >= 1800 && time < 3000) {
     if (hook5 === false) {
       // fbq('track', 'Subscribe', {}, {eventID:event_id});
       // kTr('Subscribe');
      //  gtag('event', 'conversion', {'send_to': 'AW-10886811479/T6AxCITw87QDENeensco'});
       hook5 = true;
     }
   }

   if (time >= 3000) {
     if (hookFinal === false) {
     
      //  gtag('event', 'conversion', {'send_to': 'AW-10886811479/aSEvCKj287QDENeensco'});
       hookFinal = true;
     }
   }

   if (time >= 2690){
     if (hook6 === false) {
       ttq.track('AddPaymentInfo');
     // fbq('track', 'AddPaymentInfo', {}, {eventID:event_id});
     // kTr('AddPaymentInfo');
     document.cookie = "fh-watched=1";
     $("#co-box").load("./content.html");
    
     // gtag('event', 'conversion', {'send_to': 'AW-10886811479/aSEvCKj287QDENeensco'});
     hook6 = true;
     }
   }



 });
   




      }); //end doc ready



    

  function wg(){
    var wg = getCookie("challenge");
    if (wg !== "") {
      
    
    
      $(".wg-text").text(wg);
    
      
     
      $(".bundle-suggestion").html(
        'Based on your goal of losing:'+
       '<b class="wg-text">'+ wg + '</b><br>'+
        'We Suggest the Ultimate bundle'
      );
    
    } else {
   
      $(".bundle-suggestion").hide();
        
    }
  }
      
      function productLoad(){
        var email = getCookie('em');
        if (email != "") {
          $.ajax({
            type: 'POST',
            url: 'https://hook.integromat.com/lmma1cea3wx1ui8ns6oqmys8srojr7gd',
            crossDomain: true,
            data: {'email': email},
            dataType: 'json',
            success: function() {
            console.log("sadf");
            }
              }); 
        }
      }

      $('.scroll-product').click(function(){
        $('html, body').animate({
            scrollTop: $("#co-box").offset().top - 20 
        }, 'slow');
    });
 




    
      
          function recordCheckout(testidx, page, dba){ //function to record checkout click
            var mobile = getCookie('mobile');
            $.ajax({
                type: 'POST',
                url: 'https://pay.kaiserfitapp.com/split_test/checkout.php',
                crossDomain: true,
                data: {'testid': testidx,'page_name': page, 'mobile': mobile},
                dataType: 'json',
                success: function(data) {
                  // console.log(data);
                
                  window.location.href = "https://kaizerfit.com/checkout/?dba="+ dba +"&spid="+ testidx +"&page="+page; //use these parameters for split testing
                },
                 error: function(data){
                   console.log(data);
                 }
                  });
          }
  
 
         
  

// $('.checkout-button').click(function() {
  

//   var plan = $(this).parent().find('.subscribe-plan');
  
//   var rdb = plan.find("input[type='radio']:checked");
 
//   var page = getCookie('page');
//   var dba= rdb.val();
//   var testidx = getCookie('testid'); //change this to the id of the active test
//   var v = getCookie('vsltest');
//   if (v != '') {
//     var p = getCookie('rec');
//     vrecordCheckout(p);
//   }

 
//     if (testidx != '') { //there is an active test;

//     recordCheckout(testidx, page, dba); 

//   } else { //there is no running test
 
//     setTimeout(function(){
//       window.location.href = "https://kaizerfit.com/checkout/?dba="+ dba;
//     }, 200);
    
//    }
//   });


   $('#product-section-2 .product-pack').click(function() {

    var page = getCookie('page');
    var dba=$(this).data('sku');
    var testidx = getCookie('testid'); //change this to the id of the active test
    var v = getCookie('vsltest');
    if (v != '') {
      var p = getCookie('rec');
      vrecordCheckout(p);
    }

 
    if (testidx != '') { //there is an active test;
      // console.log('test');
      recordCheckout(testidx, page, dba); 
    } else { //there is no running test
   
      // console.log('no test');
      setTimeout(function(){
        window.location.href = "https://kaizerfit.com/checkout/?dba="+ dba;
      }, 200);
      
     }
    
 
  
  
      
});



