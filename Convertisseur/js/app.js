console.log("yeah")

/*function checkingEuros() {
  document.getElementById('checkEuros').checked = true;
}
function uncheckingEuros() {
  document.getElementById('checkEuros').checked = false;
}*/

function ConvertirEnLivres()
{
  if (isNaN(Form1.Euros.value) == true)
  {
  alert('Saisis un nombre');
  Form1.Euros.value = '1';
  }
  else
  {
  Form1.Livres.value = Form1.Euros.value * 0.884;
  }
}
function ConvertirEnDollars()
{
  if (isNaN(Form1.Livres.value) == true)
  {
    alert('Saisis un nombre');
    Form1.Livres.value = '1';
  }
  else
  {
  Form1.Dollars.value = Form1.Livres.value * 1.28;
  }
}
function ConvertirEnYens()
{
  if (isNaN(Form1.Dollars.value) == true)
  {
    alert('Saisis un nombre');
    Form1.Dollars.value = '1';
  }
  else
  {
  Form1.Yens.value = Form1.Dollars.value * 112.82;
  }
}
function ConvertirEnEuros()
{
  if (isNaN(Form1.Yens.value) == true)
  {
  alert('Saisis un nombre');
  Form1.Yens.value = '1';
  }
  else
  {
  Form1.Euros.value = Form1.Yens.value * 0.0078;
  }
}
