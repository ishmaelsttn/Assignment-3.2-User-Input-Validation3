/* Ishmael Sutton*/
function Warning()
{
    alert("Alert");
  var Firstname = document.getElementById("Firstname").value;
  var Lastname = document.getElementById("Lastname").value;
  var Zipcode = document.getElementById("Zipcode").value;
  var bothnames = Firstname + " " + Lastname;
  let text = Firstname + " " + Lastname;
  if (text.length >20)
  {
  document.getElementById("submit").innerHTML = "Alert that the length of string is longer than 20";
  }
  else if ((Zipcode.length !=5) && (Zipcode.length <5))
  {
    document.getElementById("submit").innerHTML = "Zipcode is the incorrect ";
  }
  if (Zipcode.length ==5)
{
    document.getElementById("submit").innerHTML = "Zipcode is correct"
}

}