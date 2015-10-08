$(document).ready(function()
{
	$("#original").focusin(function()
	{
		$(this).css("border-radius","0px");
		$(this).css("border-color","red");
	});
	$("#original").focusout(function()
	{
		$(this).css("border-radius","10px");
		$(this).css("border-color","black");
	});
	$("#calcular_temperatura").click(function()
	{
		  $("#resultado").fadeIn();
			calculate();
	});
});

function calculate() {
  var result;
	var tipo_conversion;
  var original = document.getElementById('original');
	//alert(original.value);
  var temp = original.value;
  var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcC])/;

  var m = temp.match(regexp);

  if (m) {
    var num = m[1];
    var type = m[2];
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
			//tipo_conversion = "Desde grados Celsius a grados Fahrenheit";
      result = (num * 9/5)+32;
     	result = "<i>"+result.toFixed(3)+"º F</i>";
		 }
    else {
			//tipo_conversion = "Desde grados Fahrenheit a grados Celsius";
      result = (num - 32)*5/9;
      result = "<i>"+result.toFixed(3)+"º C</i>";
    }
	  //conversion.innerHTML = tipo_conversion;
    converted.innerHTML = result;
  }
  else {
    converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
  }
}
