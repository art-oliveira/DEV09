$(function() {
  $("#userSignInput").on("keyup", function(e) {
    var inputLength = $(this).val().length;
    $("#tiles").text(inputLength);
    updatePrice(inputLength);
  });

  $("#userFontInput, #userColorInput").on("click", function(e) {
    var inputFont = $('#userFontInput').is(":checked");
    var inputColor = $('#userColorInput').is(":checked");

    updatePrice($("#userSignInput").val().length, inputFont, inputColor);
  });

  $("#confirmOrder").on("click", function(e) {
    event.preventDefault();
    
    var previewMsg = $('#userSignInput').val()
    
    $('#preview').prepend(previewMsg);
    $('#preview').toggle({ 'right': '0px' }, 250);
  
  });
  
    $("#cancelPreview").on("click", function(e) {
    event.preventDefault();
    
    $('#preview').toggle();
  
  });
  
   $("#confirmPreview").on("click", function(e) {
    event.preventDefault();
    
     $('#userSignInput').append(previewMsg);
     previewMsg += "Order Confirmed";
   
  
  });
  
});

//update pricing
function updatePrice(signLength, fontUpgrade, colorUpgrade) {
  var costPerTile = 5;

  if (fontUpgrade == true && colorUpgrade == true) {
    costPerTile = 7;
  } else if (fontUpgrade == true && colorUpgrade == false) {
    costPerTile = 6;
  } else if (colorUpgrade == true && fontUpgrade == false) {
    costPerTile = 6;
  } else {
    costPerTile = 5;
  }

  var subTotal = signLength * costPerTile;
  var shipping = 7;

  if (signLength != 0) {
    shipping = 7;
  } else {
    shipping = 0;
  }

  var grandTotal = subTotal + shipping;

  $("#subTotal").text("$" + subTotal);
  $("#shipping").text("$" + shipping);
  $("#grandTotal").text("$" + grandTotal);

  return grandTotal;
}
