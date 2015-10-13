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
function medida(valor)
{
	this.Valor: ;
	this.Tipo: ;
}

function calculate() {
  var result;
  var original = document.getElementById('original');
	//alert(original.value);
  var temp = original.value;

  //var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcC])/;
  var regexp =  /([-+]?\d+(?:\.\d*)?)([eE]?([-+]?\d+))?(\s*[cCfF])/;

  var m = temp.match(regexp);

  if (m) {
    var numero = m[1];
    var exponente = m[3];
    var type = m[4];
    numero = parseFloat(numero);
    exponente = parseInt(exponente);

    var auxiliar=10;
    if(exponente)
    {

    if(exponente < 0)
    {
	exponente = -exponente;
	for(i=1;i<exponente;i++)
	{
		auxiliar = auxiliar*10;
	}
	numero = numero/auxiliar;
    }else
    {
        for(i=1;i<exponente;i++)
        {
                auxiliar = auxiliar*10;
        }
        numero = numero*auxiliar;
    }
   }
    if (type == 'c' || type == 'C') {

   	result = (numero * 9/5)+32;
     	result = result.toFixed(3)+"º F";
    }
    else {

      result = (numero - 32)*5/9;
      result = result.toFixed(3)+"º C";
    }
    converted.innerHTML = result;
  }
  else {
    converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
  }
}
