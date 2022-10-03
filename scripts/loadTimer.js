!function (){
    let startTime = new Date().getTime();

    function loadTimer() {
        let element = document.getElementById("load-timer")
        let currTime = new Date().getTime();
        let pgLoadTime = (currTime - startTime) / 1000
        element.innerHTML += 'Page Loaded in ' + pgLoadTime + ' seconds';
    }

    document.addEventListener("layoutCreated", _ => {loadTimer()})
}()