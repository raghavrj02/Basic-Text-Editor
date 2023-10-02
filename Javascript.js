function f1() {
    document.getElementById("Result").style.fontWeight = "bold";
  }
  function f2() {
    document.getElementById("Result").style.fontStyle = "italic";
  }
  function f3() {
    var Result = document.getElementById("Result");
    if (Result.style.textDecoration == "underline") {
      Result.style.textDecoration = "none";
    } else {
      Result.style.textDecoration = "underline";
    }
  }
  function f4() {
    document.getElementById("Result").style.textAlign = "left";
  }
  function f5() {
    document.getElementById("Result").style.textAlign = "center";
  }
  function f6() {
    document.getElementById("Result").style.textAlign = "right";
  }
  function f7() {
    document.getElementById("Result").style.textTransform = "uppercase";
  }
  function f8() {
    document.getElementById("Result").style.textTransform = "lowercase";
  }
  function f9() {
    document.getElementById("Result").style.textTransform = "capitalize";
  }
  
  function f10() {
    document.getElementById("Result").style.fontWeight = "normal";
    document.getElementById("Result").style.textAlign = "left";
    document.getElementById("Result").style.fontStyle = "normal";
    document.getElementById("Result").style.textTransform = "capitalize";
    document.getElementById("Result").style.fontSize = "normal";
    document.getElementById("Result").value = " ";
  }
  function f11(e) {
    let value = e.value;
    document.getElementById("Result").style.fontSize = value + "px";
  }
  function f12(e) {
    let value = e.value;
    document.getElementById("Result").style.color = value;
  }
  window.addEventListener("load"),
    () => {
      e.value = "";
    };