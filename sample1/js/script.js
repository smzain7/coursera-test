$(function() {
  function incContrast (jumbotronx) {
    // var id=jumbotronx.id;
    document.getElementById(""+jumbotronx.id+"").style.filter = "contrast(120%)";
    var id2=document.getElementById(""+jumbotronx.id+"").getElementsByTagName('div')[0].id;
    document.getElementById(""+id2+"").style.fontSize = "4vw";
    document.getElementById(""+id2+"").style.color = "white";
  }
  function decContrast (jumbotronx) {
    document.getElementById(""+jumbotronx.id+"").style.filter = "contrast(100%)";
    var id2=document.getElementById(""+jumbotronx.id+"").getElementsByTagName('div')[0].id;
    document.getElementById(""+id2+"").style.fontSize = "3.75vw";
    document.getElementById(""+id2+"").style.color = "#FBFBFB";
  }
  window.$incContrast = incContrast;
  window.$decContrast = decContrast;
});