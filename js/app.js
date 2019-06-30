// jshint esversion:6

//Adding time hh:mm:ss
const startTime = () => {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    h = h.toString().split('');
    m = m.toString().split('');
    s = s.toString().split('');

    // document.querySelector('.clock_digits').innerHTML = `${h}:${m}:${s}`;

    document.querySelector('.digit_1').innerHTML = `${h[0]}`;
    document.querySelector('.digit_2').innerHTML = `${h[1]}`;
    document.querySelector('.digit_3').innerHTML = `${m[0]}`;
    document.querySelector('.digit_4').innerHTML = `${m[1]}`;
    document.querySelector('.digit_5').innerHTML = `${s[0]}`;
    document.querySelector('.digit_6').innerHTML = `${s[1]}`;
	
	console.log("time");

    const t = setTimeout(startTime, 500);
};

// Adding zero
const checkTime = (i) => {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
};

// loading audio
const playSound = () => {
    document.querySelector('.audio').play();
    const x = setTimeout(playSound, 1);
};

playSound();
startTime();