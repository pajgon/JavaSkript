document.getElementById("app").innerHTML = `Ahoj kamo :D`;

//alert('Ahoj');

var x = 2;
/*var y = prompt('Zadej cislo', '');
//var z = x + y;

document.getElementById("vysledek").innerHTML = 'Vysledek je: ' + (x + +y);

document.getElementById("vysledek").innerHTML += '<br /><br />Rozdíl je ' + (x - (+y));


  var osmnact = confirm('UZ mi bylo 18 :)');
  alert(osmnact);
  */

function PrictiTri(x)

{
  return +x + 3;
}


//var cislo = prompt('Zadej cislo', '')
//alert(PrictiTri(cislo))

//for (var i = 0; i < 10; i++)
//{
 // alert(PrictiTri(i))
///}
var cislo = prompt('Zadej cislo', '')

if (cislo >= 18)
{
  alert('Osmnact?')
}
else
{
  alert('Obcanku mit')
}