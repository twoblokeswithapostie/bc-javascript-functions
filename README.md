Business Catalyst JavaScript Collection
=============

Introduction
-------------

This is a collection of JavaScript functions us [Two Blokes](http://www.twoblokeswithapostie.com) want to share with Business Catalyst community. Please feel free to contribute.


Requirements
-------------

You need to add jQuery to the head of your document before linking this file. Here's a Google hosted link:

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
```

Functions
-------------

### function makeShippingSameAsBilling()

Usage: 

Use this function to populate the the shipping address field with the billing address fields on the Business Catalyst checkout form.

To use this function simply add a checkbox to your checkout form and make an onclick call to the function e.g.

```html
<input type="checkbox" onclick="makeShippingSameAsBilling();" />
```

### function changeEmptyCartMessage()

Usage:

changeEmptyCartMessage() function is called when the shopping is empty. In our example the Ajax is used to retrieve a web page called empty_cart_page.htm. This allows you to create a rich empty cart page with catalogues, products, links and anything else you think will improve the shop functionality and increase conversions.

### function UpdateProductExtras(c, p, res)

Usage:

Here we are overriding BC's UpdateProductExtras function and calling changeEmptyCartMessage. 

### $.alertMessageHolder = function(note, messageStyle)

Usage:

alertMessageHolder is a function that embeds the message into body. You must add <div id="alertMessageHolder"><p></p></div> to the top of the shoppign cart layout and all the captured alerts will be displayed inside the page body instead of popping up and distracting the customer.

The following is the function which captures alerts and passes them onto alertMessageHolder:

```javascript
window.alert = function(msg){
    messageStyle = 'success'; // Set style to success. We'll set it to error later on if the message is the Error message. Done so you can apply different styles    
    
    
    if ((msg.indexOf('ERROR:') >= 0) || (msg.indexOf('- ') >= 0))
    {
      messageStyle = 'error';  
    }   
    $.alertMessageHolder(msg, messageStyle);
    return false;
 }
 ```
  


