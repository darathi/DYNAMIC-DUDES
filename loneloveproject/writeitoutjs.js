function load_text() {
    //   document.getElementById("output").value = "POUR YOUR FEELINGS............write it out";
    }

var changeFontStyle = function (font) {
    document.getElementById("output").style.fontFamily = font.value;
}


function bold_click() {
    document.getElementById("output").style.fontWeight = "bold";
}

function underline_click() {
    document.getElementById("output").style.textDecoration = "underline";
}

function italic_click() {
    document.getElementById("output").style.fontStyle = "italic";
}

function normal_click() {
    document.getElementById("output").style.fontStyle = "normal";
    document.getElementById("output").style.textDecoration = "none";
    document.getElementById("output").style.fontWeight = "normal";
}
function clear_click() {
    document.getElementById("output").style.fontStyle = "normal";
    document.getElementById("output").style.textDecoration = "none";
    document.getElementById("output").style.fontWeight = "normal";
    document.getElementById("output").style.fontFamily = "Arial";
}
function change(list)
{
    var val=list.options[list.selectedIndex].value;
    document.style.textarea.color=val;
}