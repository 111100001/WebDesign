function changeColor(color) {
    alert("Chosen color: " + color);
}

function changeDesign(designNum) {
    document.getElementById("designText").value = "This is Design " + designNum;
    document.getElementById("sofaImage").src = "design" + designNum + ".jpg";
}