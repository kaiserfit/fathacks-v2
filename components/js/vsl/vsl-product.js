$('.subscribe-plan').each(function(){
    $('input[type=radio]', this).get(0).checked = true;
});
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
  
 
         
  

$('.checkout-button').click(function() {
  

  var plan = $(this).parent().find('.subscribe-plan');
  
  var rdb = plan.find("input[type='radio']:checked");
 
  var page = getCookie('page');
  var dba= rdb.val();
  var testidx = getCookie('testid'); //change this to the id of the active test


    if (testidx != '') { //there is an active test;
      vrecordCheckout(page)

  } else { //there is no running test
 
    setTimeout(function(){
      window.location.href = "https://kaizerfit.com/checkout/?dba="+ dba;
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