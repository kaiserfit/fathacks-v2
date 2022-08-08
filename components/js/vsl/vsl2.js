$( document ).ready(function() {
    timer_init();
    $('.subscribe-plan').each(function(){
      $('input[type=radio]', this).get(0).checked = true;
  });
     
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
        // $("#loading").hide();
      }
        if (fhw != "") {
          // document.getElementById("co-box").style.display = 'block';
  }
  
  else { //initiate timer of vid
    // document.cookie = "fh-watched=1";
    document.cookie = "fh-played=1";
     
  
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
        //  "playbackRates": [0.75, 1, 1.25, 1.5],
         "controls": true,
         muted: true,
         sources: [{
          src:'https://d2rvo1g7c89cun.cloudfront.net/',
          type: "video/mp4",
          
        }],
         controls: true,
         fluid: true,
         autoplay: true,
         preload: "auto",
         poster:'components/assets/img/customplay.webp',
         plugins: { eventTracking: true }
     } );
  
     const hashVal  = [...crypto.getRandomValues(new Uint8Array(4))]
  .map((x,i)=>(i=x/255*61|0,String.fromCharCode(i+(i>9?i>35?61:55:48)))).join``
  const timeStamp = Date.now();    
  const visitId = hashVal+'-'+timeStamp; //unique ID of visitor
  var minWatched = 0;
  
  // async function myFunction() {
  //   $.post("https://pay.kaiserfitapp.com/apiv2/index.php", {a:1, id:visitId},
  // "json"
  // );
  // }
  
  // myFunction().then(
  //   function(value) { console.log(".") },
  //   function(error) { console.log("..") }
  // );
     player.eventTracking({plugins: { eventTracking: true }})
     
     $("#btnPlay").click(function(){
       if (userPlay === false){
         player.muted(false);
       player.currentTime(0);
       $(this).hide();
       $(".video-js .vjs-control-bar").css({"visibility":"visible"});
       $(".vjs-fullscreen-control").trigger("click");
       userPlay = true;
      //  setInterval(videoTrack, 1000);
     } else {
       player.play();
       $(this).hide();
       }
       
     
   });
  
   player.controlBar.progressControl.disable();
   player.on('tracking:firstplay', (e, data) => {
    console.log(data);
    
    //  $(".control-onload").css({"display":"block"});
     $("#loading").hide();
   });
  
   
   player.on('play', (e, data) => {
    if(userPlay){$("#btnResume").hide();}
  });
  
    // player.on('click', function(){
    //     if (player.paused()){
    //         player.play();
    //     } else {
    //         player.pause();
    //     }
    // })
   player.on('tracking:pause', (e, data) => {
    $("#btnResume").show();
   });

   $("#btnResume").click(function(){
    player.play();
    $(this).hide();
   });
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
        $(".unlock-btn").show();
        $(".watch-btn").hide();
      
    
        var x = $("#my-video").hasClass("vjs-fullscreen");
        if (x) {
          $(".vjs-fullscreen-control").trigger("click");
  
        }
         ttq.track('AddPaymentInfo');
       // fbq('track', 'AddPaymentInfo', {}, {eventID:event_id});
       // kTr('AddPaymentInfo');
       document.cookie = "fh-watched=1";
      //  $("#co-box").load("./content.html");
      
       // gtag('event', 'conversion', {'send_to': 'AW-10886811479/aSEvCKj287QDENeensco'});
       hook6 = true;
       }
     }
  
  
  
   });
    
   $(".watch-btn").click(function(){
    if (userPlay === false){
      player.muted(false);
    player.currentTime(0);
    $("#btnPlay").hide();
    $(".video-js .vjs-control-bar").css({"visibility":"visible"});
    $(".vjs-fullscreen-control").trigger("click");
    userPlay = true;
   //  setInterval(videoTrack, 1000);
  } else {
    player.play();
    $(".vjs-fullscreen-control").trigger("click");
    
    }
    
   });
  
   function videoTrack(){
    var t = player.currentTime();
    var second = parseInt(t);
    var m = second / 60;
    
    if ((m % 1) == 0 && m > minWatched){
      minWatched = m;
      // console.log('post')
        pvid();
    }
  }
  function pvid(){
    $.post("https://pay.kaiserfitapp.com/apiv2/index.php", {a:2, id:visitId, m:minWatched},
  
      "json"
    );
  }
  
  
        }); //end doc ready
  
        function timer_init(){
      var timeInSecs;
      var ticker;
    
    function startTimer(secs) {
    timeInSecs = parseInt(secs);
    ticker = setInterval(tick, 1000); 
    }
    
    function tick() {

    var secs = timeInSecs;
  
    if (secs > 0) {
    timeInSecs--; 
    }
    else {

     
    clearInterval(ticker);
    startTimer(1440*60); 
    }
    
    var days= Math.floor(secs/86400); 
    secs %= 86400;
    var hours= Math.floor(secs/3600);
    secs %= 3600;
    var mins = Math.floor(secs/60);
    secs %= 60;
    var pretty = ( (hours < 10 ) ? "0" : "" ) + hours + ":" + ( (mins < 10) ? "0" : "" ) + mins + ":" + ( (secs < 10) ? "0" : "" ) + secs;
    var xhours = ( (hours < 10 ) ? "0" : "" ) + hours;
    var xmins = ( (mins < 10) ? "0" : "" ) + mins;
      var xsec = ( (secs < 10) ? "0" : "" ) + secs;
     
    
      $(".unlock-timer").text(xhours+":"+xmins+":"+xsec);

    }
    
    startTimer(1440*60);
  }
    
  
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


        $(".unlock-btn").click(function(){
            window.location.href = "product-selection.html";
        });

   
  
  
  

    
   
           
    
  
 
  
  