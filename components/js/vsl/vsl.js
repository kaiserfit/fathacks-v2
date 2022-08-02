$( document ).ready(function() {

  $('.subscribe-plan').each(function(){
    $('input[type=radio]', this).get(0).checked = true;
});
    var tokenx = "";
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



  const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
  var mm = monthNames[today.getMonth()];
  var yyyy = today.getFullYear();
function ordinal_suffix_of(i) {
  var j = i % 10,
      k = i % 100;
  if (j == 1 && k != 11) {
      return i + "st";
  }
  if (j == 2 && k != 12) {
      return i + "nd";
  }
  if (j == 3 && k != 13) {
      return i + "rd";
  }
  return i + "th";
          }
var ee = ordinal_suffix_of(dd);
var today1 = ee + ' ' + mm + ' ' + yyyy;
$("#curdate").text(today1);
$("#curdate").css('font-weight', '700');



      }); //end doc ready



      var hook1 = false;
    var hook2 = false;
    var hook3 = false;
    var hook4 = false;
    var hook5 = false;
    var hook6 = false;
    var hookFinal = false;


      var userPlay = false;
      const player = videojs('my-video');
    //   const player = videojs('my-video', {
    //     "playbackRates": [0.75, 1, 1.25, 1.5],
    //     "controls": true,
    //     muted: true,
       
    //     fluid: true,
    //     autoplay: true,
    //     plugins: { eventTracking: true }
    // } );
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
      
      // setInterval(videoTrack, 1000);
  });

  function forward(){
    var t = player.currentTime() + 10;
    player.currentTime(t);
  }

  function rewind(){

    var t = player.currentTime();
    if (t > 10){
      t = t-10;
      player.currentTime(t);
    } else {
      player.currentTime(0);
    }
  }

  player.on('tracking:firstplay', (e, data) => {
    $(".control-onload").css({"display":"block"});
  });
 
  // player.on('play', (e, data) => $("#btnPlay").hide());
  // player.on('tracking:pause', (e, data) => console.log(data));
  // player.on('tracking:pause', (e, data) => $("#btnPlay").show());
  player.on('timeupdate', function(){
    var time = player.currentTime();

    // if (time >= 60 && time < 300){
    //   if (hook1 === false) {
    //     ttq.track('CompleteRegistration');
    //     // fbq('track', 'AddToCart', {}, {eventID:event_id});
    //     // kTr('AddToCart');
    //     gtag('event', 'conversion', {'send_to': 'AW-10886811479/6K6WCIrh87QDENeensco'});
    //     hook1 = true;
    //   }
    // }

    // if (time >= 300 && time < 600){
    //   if (hook2 === false) {
    //     ttq.track('Download');
    //     // fbq('track', 'AddToWishList', {}, {eventID:event_id});
    //     // kTr('AddToWishList');
    //     gtag('event', 'conversion', {'send_to': 'AW-10886811479/fJd-CNrm87QDENeensco'});
    //     hook2 = true;
    //   }
    // }

    // if (time >= 600 && time < 900) {
    //   if (hook3 === false) {
    //     // fbq('track', 'Search', {}, {eventID:event_id});
    //     // kTr('Search');
    //     gtag('event', 'conversion', {'send_to': 'AW-10886811479/ksVsCOng8bQDENeensco'});
    //     hook3 = true;
    //   }
    // }

    // if (time >= 900 && time < 1800) {
    //   if (hook4 === false) {
    //     ttq.track('Subscribe');
    //   // fbq('track', 'CompleteRegistration', {}, {eventID:event_id});
    //   // kTr('CompleteRegistration');
    //   gtag('event', 'conversion', {'send_to': 'AW-10886811479/tWHeCMfu87QDENeensco'});
    //   hook4 = true;
    //   }
    // }

    // if (time >= 1800 && time < 3000) {
    //   if (hook5 === false) {
    //     // fbq('track', 'Subscribe', {}, {eventID:event_id});
    //     // kTr('Subscribe');
    //     gtag('event', 'conversion', {'send_to': 'AW-10886811479/T6AxCITw87QDENeensco'});
    //     hook5 = true;
    //   }
    // }

    // if (time >= 3000) {
    //   if (hookFinal === false) {
      
    //     gtag('event', 'conversion', {'send_to': 'AW-10886811479/aSEvCKj287QDENeensco'});
    //     hookFinal = true;
    //   }
    // }

    if (time >= 2690){
      if (hook6 === false) {
        // ttq.track('AddPaymentInfo');
      // fbq('track', 'AddPaymentInfo', {}, {eventID:event_id});
      // kTr('AddPaymentInfo');
      document.cookie = "fh-watched=1";
      $("#co-box").show();
      // gtag('event', 'conversion', {'send_to': 'AW-10886811479/aSEvCKj287QDENeensco'});
      hook6 = true;
      }
    }



  });
      
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
  
 
          $('.bronze-pack').change(function() {
            
            var priceText = $(this).parent().next();
           if ($(this).val() === "bronze-saver") {
            priceText.html(
              '<p style="font-size:2rem">Save 15%</p>'+
              '<p class="product-price">$59 <span class="per-bottle"> / bottle</span></p>'
            )
           } else {
            priceText.html(
              
              '<span class="product-price">$69</span><span class="per-bottle"> / bottle</span>'
            )
           }
          });

          $('.gold-pack').change(function() {
           
            var priceText = $(this).parent().next();
           if ($(this).val() === "gold-saver") {
            priceText.html(
              '<p style="font-size:2rem">Save 17%</p>'+
              '<p class="product-price">$49 <span class="per-bottle"> / bottle</span></p>'
            )
           } else {
            priceText.html(
              
              '<span class="product-price">$59</span><span class="per-bottle"> / bottle</span>'
            )
           }
          });

          $('.platinum-pack').change(function() {
           
            var priceText = $(this).parent().next();
           if ($(this).val() === "platinum-saver") {
            priceText.html(
              '<p style="font-size:2rem">Save 20%</p>'+
              '<p class="product-price">$39 <span class="per-bottle"> / bottle</span></p>'
            )
           } else {
            priceText.html(
              
              '<span class="product-price">$49</span><span class="per-bottle"> / bottle</span>'
            )
           }
          });
  

$('.checkout-button, .otp-btn').click(function() {
  

  var plan = $(this).parent().find('.subscribe-plan');
  
  var rdb = plan.find("input[type='radio']:checked");
 
  var page = getCookie('page');
  var dba= rdb.val();
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



