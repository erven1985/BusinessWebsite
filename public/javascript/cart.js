
function myFunction() {

 var total = 0
  var price = 0
  console.log(document.cookie)
  var products = document.cookie.split('-');
  // console.log(products)
  var c = products.pop();
  // console.log('Yerlan' + products)
  var obj = {}
  for (i=0, k=0; i < products.length; i+=5, k++) {
    var newArry = products.slice(i, i+5)
    // console.log(newArry)
    total += parseInt(products[i+4], 10)
    price += parseInt(products[i+4]*products[i+2], 10)
    obj[k] = newArry
    // console.log(obj)
    

    $("#crt").html(" " + total);
    $("#crt2").html("Total:$" + price);

 };

 for(j=0; j < newArry.length; j++) { 
      // console.log(obj)
        // name
      $("#carttitle").append("<h5>" + obj[j][0] + "</h5>");
        // size
      $("#cartsize").append("<h5>" + obj[j][3] +  "</h5>");
        // quantity

      $("#cartamount").append("<h5>" + obj[j][4] + "</h5>");
        // price
      $("#cartprice").append("<h5>" + "$" +obj[j][2] + "</h5>");


  }

}