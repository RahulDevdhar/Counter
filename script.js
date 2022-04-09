let counter = 0;
function count1() {
    document.getElementById('counter').innerHTML = counter;
    counter += 1;
}
function count2() {

    document.getElementById('counter').innerHTML = counter;
    counter = 0;
}
function count() {

    document.getElementById('counter').innerHTML = counter;
    counter -= 1;
}