let startTime;

!function (){
    startTime = new Date().getTime();
}()

function loadTimer(element) {
    let currTime = new Date().getTime();
    let pgLoadTime = (currTime - startTime) / 1000
    element.innerHTML += 'Page Loaded in ' + pgLoadTime + ' seconds';
}