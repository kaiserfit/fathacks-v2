
  var topx = true;
  var vsl = false; //if vsl was watched
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
        
          window.location.href = "/checkout/?dba="+ dba +"&spid="+ testidx +"&page="+page+"&product=qf"; //use these parameters for split testing
        },
         error: function(data){
           console.log(data);
         }
          });
  }



  function isInViewport(element) {
            if (element == null){
            return false;
            } else {
                    const rect = element.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }
        }






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
    
    
    secs %= 86400;
    var hours= Math.floor(secs/3600);
    secs %= 3600;
    var mins = Math.floor(secs/60);
    secs %= 60;
    
    var xhours = ( (hours < 10 ) ? "0" : "" ) + hours;
    var xmins = ( (mins < 10) ? "0" : "" ) + mins;
      var xsec = ( (secs < 10) ? "0" : "" ) + secs;
     
    
      $(".unlock-timer").text(xhours+":"+xmins+":"+xsec);

    }
    
    startTimer(1440*60);
  }
    
  function claim(){
   
        $('html, body').animate({
            scrollTop: $("#wrap-1").offset().top
        }, 1000);
  }

    

        $('.checkout-button').click(function() {
  

            var plan = $(this).parent().find('.subscribe-plan');
            
            var rdb = plan.find("input[type='radio']:checked");
           
            var page = getCookie('page');
            var dba= rdb.val();
            var testidx = getCookie('testid'); //change this to the id of the active test
         
          
           
              if (testidx != '') { //there is an active test;
          
              recordCheckout(testidx, page, dba);
                  
                  
              
            } else { //there is no running test
           
              setTimeout(function(){
                window.location.href = "/checkout/?dba="+ dba+"&product=qf";
              }, 200);
              
             }
            });
          
          
            $(".faq-question").click(function(){
              var x = $(this).find('.faq-arrow');
              var open = x.hasClass('open');
              var n = $(this).next('.faq-answer');
          
              x.toggleClass('open');
              if (open){
                n.removeClass('open');
              } else {
                n.addClass('open');
              }
            });
          
          
            $('.bronze-pack').change(function() {
                      
              var priceText = $(this).parent().next();
             if ($(this).val() === "bronze-saver") {
              priceText.html(
                
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
                
                '<p class="product-price">$39 <span class="per-bottle"> / bottle</span></p>'
              )
             } else {
              priceText.html(
                
                '<span class="product-price">$49</span><span class="per-bottle"> / bottle</span>'
              )
             }
            });

   
            function kTr(eventName){
              if (window.location.hostname === 'localhost') {
                return false;
              }
              var url = window.location.href;
              var navAgent = navigator.userAgent;
              var fbc = getCookie('_fbc');
              
            var data = {
                'eventName': eventName,
                'eventID': event_id,
                'URL': url,
                'userAgent': navAgent,
                'fbc': fbc,
                'ipv4Address': ipv4,
               
                }
            
                setTimeout(() => {
                   
                    $.ajax({
                        type: 'POST',
                        url: 'https://hook.integromat.com/rzwt665qate0d0bu5xhex9q7cr0lun7m',
                        crossDomain: true,
                        data: data,
                        dataType: 'json'
                  
                        }); //end ajax
            
                }, 500);
               
                
            }

    
   
            $( document ).ready(function() {

                $('.subscribe-plan').each(function(){
                 
                    $('input[type=radio]', this).get(0).checked = true;
                });
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
             
                 if (time >= 60 && time < 300){
                   if (hook1 === false) {
                    ttq.track('InitiateCheckout')
                    fbq('track', 'InitiateCheckout');
                     hook1 = true;
                   }
                 }
              
          

              
                 if (time >= 2940){
                   if (hook6 === false && userPlay) {
                    
                        $(".product-wrap").removeClass("hidden");
                        $(".unlock-text").hide();
                        $(".watch-btn").hide();
                        $("#btnPlay").hide();
                        $("#btnResume").hide();
                    
                        var x = $("#my-video").hasClass("vjs-fullscreen");
                        if (x) {
                          $(".vjs-fullscreen-control").trigger("click");
                            
                        }

                        $("#sticky").addClass("scrolled");
                        vsl = true;
            
                        
                    
                 
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
    
  
 
  
  