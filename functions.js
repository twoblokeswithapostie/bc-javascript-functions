
/* Put together by http://www.twoblokeswithapostie.com 	*/
/* --------------------------------------------------- 	*/
/* Always rememberr to make calls like this:    			*/
/* if($('#some-form-selector').length) {				*/ 
/*	funtionCall();										*/ 
/*  	}												*/ 




$(document).ready(function($){

// alertMessageHolder is a function that embeds the message into body. You must add
// <div id="alertMessageHolder"><p></p></div> to the top of the shoppign cart layout.

$.alertMessageHolder = function(note, messageStyle) {
    
    messageStyle = (messageStyle == 'error') ? 'alertMessageHolder_error' : 'alertMessageHolder_success'; 
    
    // messageStyle will render alertMessageHolder_error or alertMessageHolder_success. You need to use these class in your CSS to style the message box
     
    $('html').animate({ scrollTop: 0 }, 'slow', function(){
      $('#alertMessageHolder').fadeOut('fast', function(){
        $('#alertMessageHolder p').attr('class', messageStyle).html(note);
        $('#alertMessageHolder').fadeIn('slow');
      });
    });
  }

// Here we're capturing the messages from those BC alerts

window.alert = function(msg){
    messageStyle = 'success'; // Set style to success. We'll set it to error later on if the message is the Error message. Done so you can apply different styles    
    
    
    if ((msg.indexOf('ERROR:') >= 0) || (msg.indexOf('- ') >= 0))
    {
      messageStyle = 'error';  
    }   
    $.alertMessageHolder(msg, messageStyle);
  }
  return false;
  
}); 

// Here we are overriding BC's UpdateProductExtras function and calling changeEmptyCartMessage

function UpdateProductExtras(c, p, res) {
        if (res == -1) {
        changeEmptyCartMessage();
        }
}

// changeEmptyCartMessage() function is called when the shopping is empty. In this example the Ajax is used to retrieve 
// a web page called empty_cart_page.htm. This allows you to place anything you wish inside your message

function changeEmptyCartMessage() {
    var ajax_url = '/empty_cart_page.htm';
    $.ajax({
      url:     ajax_url,
      data:    '',
      success: function(output){
        $('#catCartDetails .cartLink').remove();
        $('#catCartDetails').html(output);
      }
    });
}



// To use this function simply add a checkbox to your checkout form and 
// make an onclick call to the function e.g.
// <input type="checkbox" onclick="makeShippingSameAsBilling();" />

function makeShippingSameAsBilling(){ 
      if ($("#ShippingAddress").val() == ""){                            
             $("#sShippingAddress").val($("#BillingAddress").val()); 
      }
      if ($("#ShippingCity").val() == ""){                            
             $("#ShippingCity").val($("#BillingCity").val()); 
      }
      if ($("#ShippingState").val() == ""){                            
             $("#ShippingState").val($("#BillingState").val()); 
      }
      if ($("#ShippingZip").val() == ""){                            
             $("#ShippingZip").val($("#BillingZip").val()); 
      }
      if ($("#ShippingCountry").val() == ""){                            
             $("#ShippingCountry").val($("#BillingCountry").val()); 
      }
 }

//END .ready()
});