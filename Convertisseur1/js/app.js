//var devises = {'euros':1, 'livres':'euros'*0.88};



function convertsEuro() {
  if (isNaN(Form1.Euros.value) == true)
  {
  alert('Saisis un nombre');
  Form1.Euros.value = '1';
  }
  else {
    var euros = Form1.Euros.value;
    var livres = euros * 0.90;
    var dollars = euros * 1.13;
    var yens = euros * 128.29;



    Form1.Livres.value = livres.toFixed(2);
    Form1.Dollars.value = dollars.toFixed(2);
    Form1.Yens.value = yens.toFixed(2);

  }
}
function convertsLivre() {
  if (isNaN(Form1.Livres.value) == true)
  {
  alert('Saisis un nombre');
  Form1.Livres.value = '1';
  }
  else {
    var livres = Form1.Livres.value;
    var euros = livres * 1.11;
    var dollars = livres * 1.26;
    var yens = livres * 142.79;

    Form1.Euros.value = euros.toFixed(2);
    Form1.Dollars.value = dollars.toFixed(2);
    Form1.Yens.value = yens.toFixed(2);

  }
}
function convertsYen() {
  if (isNaN(Form1.Yens.value) == true)
  {
  alert('Saisis un nombre');
  Form1.Yens.value = '1';
  }
  else {
    var yens = Form1.Yens.value;
    var euros = yens * 0.0078;
    var livres = yens * 0.0070;
    var dollars = yens * 0.0088;


    Form1.Euros.value = euros.toFixed(2);
    Form1.Livres.value = livres.toFixed(2);
    Form1.Dollars.value = dollars.toFixed(2);

  }
}
function convertsDollar() {
  if (isNaN(Form1.Dollars.value) == true)
  {
  alert('Saisis un nombre');
  Form1.Dollars.value = '1';
  }
  else {
    var dollars = Form1.Dollars.value;
    var euros = dollars * 0.88;
    var livres = dollars * 0.79;
    var yens = dollars * 113.44;


    Form1.Euros.value = euros.toFixed(2);
    Form1.Livres.value = livres.toFixed(2);
    Form1.Yens.value = yens.toFixed(2);

  }
}
//var devises = [euros, livres, dollars, yens];


//console.log(devises.length);
