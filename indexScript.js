function clock() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerText = time;
    setTimeout(clock, 1000);
}

clock();