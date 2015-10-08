$(document).ready(function()
{
	$("#calcular_temperatura").click(function()
	{
			calculate();
	});
});

function calculate() {
  var result;
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
      result = (num * 9/5)+32;
     	result = result.toFixed(3)+"º F";
		 }
    else {
      result = (num - 32)*5/9;
      result = result.toFixed(3)+"º C";
    }
    converted.innerHTML = result;
  }
  else {
    converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
  }
}
