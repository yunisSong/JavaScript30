/* Get Our Elements */
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const ranges = player.querySelectorAll('[type="range"]')
const skipButtons = player.querySelectorAll('.player__button')


console.log(progressBar)
console.log(toggle)
console.log(ranges)
console.log(skipButtons)
/* Build out functions */

function togglePlay (e) {
    const methondName = video.paused ? 'play' :'pause';
    video[methondName]();
}
function updateButton (e) {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function rangeHandle (e) {
    video[this.name] = this.value;

}
function progressHandle (e) {
    if (video.currentTime === 0)
    {
        progressBar.style.flexBasis = `${0}%`;

    }else {
        const percent = (video.currentTime / video.duration) * 100;
        progressBar.style.flexBasis = `${percent}%`;
    }
}

function skipProcess (e) {
    video.currentTime += parseFloat(this.dataset.skip);
}

function changeVideoProcess (e) {
    const range = parseFloat(e.offsetX/progress.offsetWidth);
    video.currentTime =  video.duration * range;

}

/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', progressHandle)
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
let mouseDown = false;
ranges.forEach(progres => {
    progres.addEventListener('change', rangeHandle);
    progres.addEventListener('mousemove', rangeHandle);
});
skipButtons.forEach(button => {
    button.addEventListener('click',skipProcess);
})
progress.addEventListener('click', changeVideoProcess)

//设置初始化状态

updateButton();
progressHandle();



