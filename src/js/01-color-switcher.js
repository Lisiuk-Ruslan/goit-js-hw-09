const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
};
// console.log(refs.body);
// console.log(refs.startBtn);
// console.log(refs.stopBtn);

let intervalId = null;

refs.startBtn.addEventListener('click', onstartBtnClick);
refs.stopBtn.addEventListener('click', onstopBtnClick);

function onstartBtnClick() {
    //   if (intervalId !== null) {
    //     return;
    //   }
    refs.startBtn.setAttribute('disabled', '');

    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();

        console.log('rendom color: ', refs.body.style.backgroundColor);
    }, 1000);

    console.log('intervalId:', intervalId);
}

function onstopBtnClick() {
    //   intervalId = null;
    refs.startBtn.removeAttribute('disabled');

    clearInterval(intervalId);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}