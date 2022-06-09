
setInterval(() => {
    let liveTime = document.querySelector('.logo-zone__time');
    let date = new Date();
    let time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    liveTime.innerText = time;
}, 1000)

const slide_container = document.querySelector('.slide');
const dot1 = document.querySelector('#dot1');
const dot2 = document.querySelector('#dot2');
const dot3 = document.querySelector('#dot3');
const slide_item = document.querySelector('.slide_item')


dot1.addEventListener('click', () => {
    slide_container.style.transform = 'none';
})

dot2.addEventListener('click', () => {
    slide_container.style.transform = 'translateX(-40%)';
})


dot3.addEventListener('click', () => {
    slide_container.style.transform = 'translateX(-80%)';
    slide_container.style.overflow = 'scroll'

})