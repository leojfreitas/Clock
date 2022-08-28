const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const milisegundos = document.getElementById('milisegundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let mi = dateToday.getMinutes();
    let seg = dateToday.getSeconds();
    let mls = dateToday.getMilliseconds();

    if (hr < 10 ) hr = '0'+ hr;
    if (mi < 10 ) mi = '0'+ mi;
    if (seg < 10 ) seg = '0'+ seg;
    if (mls < 10 ) mls = '0'+ mls;

    horas.textContent = hr;
    minutos.textContent = mi;
    segundos.textContent = seg;
    milisegundos.textContent = mls;

})