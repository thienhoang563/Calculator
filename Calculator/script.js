function getValueA() {
   return document.getElementById('numA').value;
}
function getValueB() {
    return document.getElementById('numB').value;
}
function setResult(valueAsign) {
    document.getElementById('result').value = valueAsign;
}
function add(numA, numB) {
    return parseFloat(numA) + parseFloat(numB);
}
function sub(numA, numB) {
    return parseFloat(numA) - parseFloat(numB);
}
function mul(numA, numB) {
    return parseFloat(numA) * parseFloat(numB);
}
function div(numA, numB) {
    return parseFloat(numA) / parseFloat(numB);
}
function mod(numA, numB) {
    return parseFloat(numA) % parseFloat(numB);
}