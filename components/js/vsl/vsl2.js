$( document ).ready(function() {
    timer_init();
     function checkCookie() {
  
       var fhw = getCookie("fh-watched");
      var fsw = getCookie("fh-played");

      var test = getCookie('testid');
      var r = getCookie('r');
      
      if (test != "" && r === "") {
        //there's a running split test

        vrecordLanding();
        
      }

  
  
  
  document.cookie="mobile="+window.mobileCheck()+";path=/";
  
       
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
         poster:'components/img_assets/loading.webp',
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
    console.log(data);
     $(".control-onload").css({"display":"block"});
   });
  
   
   player.on('play', (e, data) => {
    if(userPlay){$("#btnResume").hide();}
  
  });

 
 
   player.on('tracking:pause', (e, data) => {
    if(userPlay){$("#btnResume").show();}
   
   });

   $("#btnResume").click(function(){
    player.play();
    $(this).hide();
   });
   player.on('timeupdate', function(){
     var time = player.currentTime();
 
     if (time >= 60){
       if (hook1 === false) {
        ttq.track('InitiateCheckout')
        
         hook1 = true;
       }
     }

     if (time >= 2690){
       if (hook6 === false && userPlay) {
            $(".unlock-object").show();
            $(".watch-btn").hide();
            $("#btnPlay").hide();
            $("#btnResume").hide();
        
            var x = $("#my-video").hasClass("vjs-fullscreen");
            if (x) {
              $(".vjs-fullscreen-control").trigger("click");
      
            }
       
      
       
       document.cookie = "fh-watched=1";
    
      
       
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

   
  
  
  

    
   
           
    
  
 
  
  