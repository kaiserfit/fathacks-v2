$( document ).ready(function() {
    timer_init();
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
         autoplay: true,
         muted: true,
         sources: [{
          src:'https://d2rvo1g7c89cun.cloudfront.net/',
          type: "video/mp4",
          
        }],
         controls: true,
         fluid: true,
         preload: "auto",
         poster:'components/assets/img/customplay.webp',
         plugins: { eventTracking: true }
     } );
  
     player.ready(function(){
        console.log("Video is Ready");
     });

  

     player.eventTracking({plugins: { eventTracking: true }})
     
     $("#btnPlay").click(function(){
       if (userPlay === false){
         player.muted(false);
       player.currentTime(0);
       $(this).hide();
       $(".video-js .vjs-control-bar").css({"visibility":"visible"});
       $(".vjs-fullscreen-control").trigger("click");
       userPlay = true;
    
     } else {
       player.play();
       $(this).hide();
       }
       
     
   });
  
   player.controlBar.progressControl.disable();
   player.on('tracking:firstplay', (e, data) => {
    player.muted(false);
    $("#loading").hide();
     $(".control-onload").css({"display":"block"});
   });
  
   
   player.on('play', (e, data) => {
    if(userPlay){$("#btnResume").hide();}
   
  });
  
 
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
    
  

        $(".unlock-btn").click(function(){
            window.location.href = "product-selection.html";
        });

   
  
  
  

    
   
           
    
  
 
  
  