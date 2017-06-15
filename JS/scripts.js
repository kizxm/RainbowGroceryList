$(document).ready(function() {



  $("#groceries").submit(function(event) {
    var groceryArray = ["ITEMONE", "ITEMTWO", "ITEMTHREE","ITEMFOUR", "ITEMFIVE"];
    // var item1 = $("input#ITEMONE").val();
    // var item2 = $("input#ITEMTWO").val();
    // var item3 = $("input#ITEMTHREE").val();
    // var item4 = $("input#ITEMFOUR").val();
    // var item5 = $("input#ITEMFIVE").val();
    var groceryValues = groceryArray.map(function(grocery) {
      return $("input#" + grocery).val();
    });
    groceryValues.sort();
    alert(groceryValues);
    event.preventDefault();
  });


});
