
/* Put together by http://www.twoblokeswithapostie.com */
/* --------------------------------------------------- */


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