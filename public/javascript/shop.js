


$(document).ready(function(){

switch1();

$("#textone").click(function(){
    if ($("#ulone").is(":hidden")) {
     $("#ulone").slideDown("slow");
   } else {
      $("#ulone").slideUp("slow");
   }
});

$("#texttwo").click(function(){
   if ($("#ultwo").is(":hidden")) {
     $("#ultwo").slideDown("slow");
   } else {
      $("#ultwo").slideUp("slow");
   }
});

$("#textthree").click(function(){
    if ($("#ulthree").is(":hidden")) {
     $("#ulthree").slideDown("slow");
   } else {
      $("#ulthree").slideUp("slow");
   }
});

$("#textfour").click(function(){
    if ($("#ulfour").is(":hidden")) {
     $("#ulfour").slideDown("slow");
   } else {
      $("#ulfour").slideUp("slow");
   }
});

$("#textfive").click(function(){
    if ($("#ulfive").is(":hidden")) {
     $("#ulfive").slideDown("slow");
   } else {
      $("#ulfive").slideUp("slow");
   }
});

$("#textsix").click(function(){
    if ($("#ulsix").is(":hidden")) {
     $("#ulsix").slideDown("slow");
   } else {
      $("#ulsix").slideUp("slow");
   }
});

$("#textseven").click(function(){
    if ($("#ulseven").is(":hidden")) {
     $("#ulseven").slideDown("slow");
   } else {
      $("#ulseven").slideUp("slow");
   }
});

$("#texteight").click(function(){
    if ($("#uleight").is(":hidden")) {
     $("#uleight").slideDown("slow");
   } else {
      $("#uleight").slideUp("slow");
   }
});

$("#textnine").click(function(){
    if ($("#ulnine").is(":hidden")) {
     $("#ulnine").slideDown("slow");
   } else {
      $("#ulnine").slideUp("slow");
   }
});

$('button.addCart').click(function(event) {
  var a = $(".item_Size", $(event.target).parent() ); 
  var b = $(".item_quantity", $(event.target).parent() );
  data = $(this).attr('id').split('-');
  var c = data[0]  + "-" +data[1]+ "-" + data[2] + "-" + a.val()+ "-" + b.val() + "-";
  console.log(c);
  document.cookie += c;
  var total = 0
  var price = 0
  var products = document.cookie.split('-');
  var c = products.pop();
  var obj = {}
  for (i=0, k=0; i < products.length; i+=5, k++) {
    var newArry = products.slice(i, i+5)
    // console.log(products)
    total += parseInt(products[i+4], 10)
    price += parseInt(products[i+4]*products[i+2], 10)
    obj[k] = newArry
    // console.log(obj)

    $("#simpleCart_quantity").html(" " + total + " items");
    $("#price").html("Total: $" + price);

}

return false;
  
 });



});



var switch1 = function(){

$("#three, #six, #nine, #twelve, #fifteen, #eighteen, #twentyone, #twentyfour, #twentyseven").animate({opacity:0},3000, "swing", switch2);

}

var switch2 = function(){

$("#two, #five, #eight, #eleven, #fourteen, #seventeen, #twenty, #twentythree, #twentysix").animate({opacity:0},3000, "swing", switch3);

}
var switch3 = function(){

$("#two, #five, #eight, #eleven, #fourteen, #seventeen, #twenty, #twentythree, #twentysix").animate({opacity:1},3000, "swing", switch4);

}
var switch4 = function(){

$("#three, #six, #nine, #twelve, #fifteen, #eighteen, #twentyone, #twentyfour, #twentyseven").animate({opacity:1},3000, "swing", switch1);

}

