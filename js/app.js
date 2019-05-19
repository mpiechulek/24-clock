// jshint esversion:6

//Adding time hh:mm:ss
const startTime = function() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector('.clock_digits').innerHTML = `${h}:${m}:${s}`;
    let t = setTimeout(startTime, 500);
};

// Adding zero
const checkTime = function(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
};

// loading audio
const playSound = function() {
    document.querySelector('.audio').play();
    let x = setTimeout(playSound, 1);
    // document.querySelector('.audio').pause();
};

playSound();
startTime();