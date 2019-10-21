//
console.log(document.forms.length);

function display(id) {
  var checked = 1;
  var txt = "";
  console.log(document.getElementById(id));
  document.getElementById(id).style.display = "none";
  document.getElementById(id).nextElementSibling.style.display = "block";
  var x = document.getElementById(id);
  console.log(x.childNodes);
  console.log(x.childNodes);
  var form = x.childNodes[5].elements;
  console.log(form);
  //var nextSibling = document.getElementById(id).nextElementSibling;
  //console.log(nextSibling.childNodes[3]);
  for (var i = 0; i < form.length; i++) {
    if (form[i].checked) {
      checked = 0;
      txt += form[i].value + " " + "<br>";
    }
  }
  if (document.getElementById("textarea").value != null)
    txt += document.getElementById("textarea").value + " " + "<br>";
  console.log(txt);
  var ques = x.childNodes[3].innerHTML;

  var text = ques + "<br>" + txt + "<br>";
  var iDiv = document.createElement("div");
  iDiv.id = "block";
  iDiv.className = "block";
  iDiv.innerHTML = text;
  document.getElementById("result").appendChild(iDiv);
  // // document.getElementById("result").innerHTML += txt + "<br>";
  document.getElementById("result").style.display = "block";
}

function previous(pre) {
  document.getElementById(pre).style.display = "none";
  document.getElementById(pre).previousElementSibling.style.display = "block";
  var res = document.getElementById("result");
  res.removeChild(res.lastChild);
}
