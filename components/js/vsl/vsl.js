$( document ).ready(function() {

 
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
        document.getElementById("co-box").style.display = 'block';

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
      var userPlay = false;
      const player = videojs('my-video', {
        "playbackRates": [0.75, 1, 1.25, 1.5],
        "controls": true,
        muted: true,
               
        fluid: true,
        autoplay: true,
        plugins: { eventTracking: true }
    } );


    $("#btnPlay").click(function(){
      if (userPlay === false){
        player.muted(false);
      player.currentTime(0);
      $(this).hide();
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

  player.on('tracking:firstplay', (e, data) => console.log(data));
  player.on('play', (e, data) => {
   
  });
  player.on('tracking:pause', (e, data) => $("#btnPlay").show());
  
      
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
 




    
          const tokent = getCookie("userToken");
      
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
                
                  window.location.href = "https://kaizerfit.com/kaisercoach-bundle-checkout.html?dba="+ dba +"&spid="+ testidx +"&page="+page; //use these parameters for split testing
                },
                 error: function(data){
                   console.log(data);
                 }
                  });
          }
  
 
  
  

$('.checkout-button').click(function() {
  
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
      window.location.href = "https://kaizerfit.com/kaisercoach-bundle-checkout.html?dba="+ dba;
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
        window.location.href = "https://kaizerfit.com/kaisercoach-bundle-checkout.html?dba="+ dba;
      }, 200);
      
     }
    
 
  
  
      
});



