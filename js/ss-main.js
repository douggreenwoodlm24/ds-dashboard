// RE-RUN JAVASCRIPT WHEN BACK BUTTON PRESSED
window.onunload = function(){}; 



// CHECK DEVICE SIZE
$(document).ready(function() {
    // run test on initial page load
    checkSize();
    // run test on resize of the window
    $(window).resize(checkSize);
});

//Functions dependent on device size
function checkSize(){
    if ($(".mediaCheck").css("float") === "left" ){
        // IF DEVICE SIZE IS LESS THAN 992
        //console.log("Small device");

    } else if ($(".mediaCheck").css("float") === "none" ){
        // IF DEVICE SIZE IS MORE THAN 992
        //console.log("Large device");

    }
}




// FILTER BY PRICE SLIDER
$("#ss-filterbyprice").slider({});


//PRODUCT DETAIL PAGE TABS
// tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs li").click(function() {
		
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
	/* if in drawer mode */
	$(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
	  
	  $("ul.tabs li").removeClass("active");
	  $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
	
	
	/* Extra class "tab_last" 
	   to add border to right side
	   of last tab */
	$('ul.tabs li').last().addClass("tab_last");
	


// PRODUCT DETAIL THUMBNAIL CAROUSEL
$('#lightSlider').lightSlider({
    gallery: true,
    item: 1,
    loop: true,
    slideMargin: 0,
    //adaptiveHeight: true,
    thumbItem: 5
    
});

// CHANGE AVAILABLE CREDIT BACKGROUND COLOR BASED ON VALUE
$(document).ready(function(){
    // sample values
    //var availableCredit = 120000; // example green value
    var availableCredit = 50000; // example amber value
    //var availableCredit = 5; // example red value
    var avaiableCreditThousandSeparators = availableCredit.toLocaleString();
    // set display value
    $('#availableCredit i').text(avaiableCreditThousandSeparators);
    if(availableCredit<500){
        $('#bg-availableCredit').removeClass('bg-red bg-amber bg-green').addClass('bg-red');
    } else if (availableCredit<3000) {
        $('#bg-availableCredit').removeClass('bg-red bg-amber bg-green').addClass('bg-amber');
    } else {
        $('#bg-availableCredit').removeClass('bg-red bg-amber bg-green').addClass('bg-green');
    }
});


// PLUS/MINUS INCREMENTER 
$(function(){
    // This button will increment the value
    $('.qtyplus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        var $container = $(this).closest('.cart-quantity-button');
        var $field = $container.find('input[name=' + $(this).attr('field') + ']');
        var currentVal = parseInt($field.val(), 10);
        if (!isNaN(currentVal)) {
            $field.val(currentVal + 1);
        } else {
            $field.val(0);
        }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        var $container = $(this).closest('.cart-quantity-button');
        var $field = $container.find('input[name=' + $(this).attr('field') + ']');
        var currentVal = parseInt($field.val(), 10);
        if (currentVal===0){
        	 $field.val(0);
        } else {
        	if (!isNaN(currentVal)) {
                $field.val(currentVal - 1);
            } else {
                $field.val(0);
            }
        };
    });
});

// OPEN ALL ACCORDIONS (PRODUCT DETAIL PAGE)
//$('#accordion-open-all').css('display','none');  // TEMPORARY: hide the Open/Close All button
// Page load values:
var accordionsNowOpen = false;
$('#accordion-open-all').text('Open all');

// Event
$('#accordion-open-all').on('click', function () {
    //$('#accordion .spec-accordion-content').collapse('hide');
    $('#accordion .spec-accordion-content').removeClass('show');
    $('#accordion .spec-accordion-title').removeClass('collapsed').attr('aria-expanded','false');
    if(accordionsNowOpen===false){
//        // if accordions are closed and want to open them
//        //$('#accordion .spec-accordion-content').collapse('show');
        $('#accordion .spec-accordion-title').removeClass('collapsed').attr('aria-expanded','true');
        $('#accordion .spec-accordion-content').addClass('show');
        $('#accordion-open-all').text('Close all');
        accordionsNowOpen = true;
    } else {
//        // if accordions are open and want to close them
//        //$('#accordion .spec-accordion-content').collapse('hide');
        $('#accordion .spec-accordion-content').removeClass('show');
        $('#accordion .spec-accordion-title').removeClass('collapsed').attr('aria-expanded','false');
        $('#accordion-open-all').text('Open all');
        accordionsNowOpen = false;
    };
    //console.log('accordionsNowOpen = ' + accordionsNowOpen);
});