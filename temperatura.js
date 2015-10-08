$(document).ready(function()
{
	$("#calcular_temperatura").click(function()
	{
		$("#resultado_temperatura").show("slow");
		calculate();
	});
	$("#temperatura").focusin(function()
	{
			$("#temperatura").css("border-radius","0px");
			$("#temperatura").css("border-color","red");
			$("#temperatura").attr("placeholder","Ejemplos: 32F,55F,67F,...");
			$("#temperatura").attr()
	});
	$("#temperatura").focusout(function()
	{
			$("#temperatura").css("border-radius","20px");
			$("#temperatura").css("border-color","grey");
	});
});

function calculate() {
  var result;
  var original = $("#temperatura").val();
  var temp = original;
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
    $("#resultado_temperatura").html("Resultado->"+result);
  }
  else {
    $("#resultado_temperatura").html("ERROR! Try something like '-4.2C' instead");
  }
}
