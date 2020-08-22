function namePuppy() {
    var parent = document.getElementById("textbox");
    var lineBreak = document.createElement("BR");
    var input = document.createElement("INPUT");
    input.type = "text";
    input.id = "pname";
    input.name = "pname";
    input.value = "Spot";
    parent.appendChild(lineBreak);
    parent.appendChild(input);
}

function finishNamingPuppy() {
    var puppyNameInput = document.getElementById("pname");
    setPuppyName(puppyNameInput.value);
    puppyNameInput.remove();
}