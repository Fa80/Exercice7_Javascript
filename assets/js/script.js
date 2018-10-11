function clic(){
  var Pointure = document.getElementById("shoeSize").value;
  var Annéedenaissance = document.getElementById("yearOfBirth").value;
  var result = (((((Pointure* 2) + 5) * 50) - Annéedenaissance) + 1768);
  if (!isNaN(Pointure) && (!isNaN(Annéedenaissance))){
      return result;
}else {
  alert("Ta pointure et/ou ton année doit être un nombre !");
}
}
