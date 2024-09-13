const presentations = [
    {
        name: 'Test',
        link: '<iframe src="https://yara-my.sharepoint.com/personal/a843105_yara_com/_layouts/15/Doc.aspx?sourcedoc={6bc09ee9-f756-4aa6-bd1f-b1ed7061cd5d}&amp;action=embedview&amp;wdAr=1.7777777777777777" width="476px" height="288px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>'
    },
    {
        name: 'Test 2',
        link: '<iframe src="https://yara-my.sharepoint.com/personal/a843105_yara_com/_layouts/15/Doc.aspx?sourcedoc={6bc09ee9-f756-4aa6-bd1f-b1ed7061cd5d}&amp;action=embedview&amp;wdAr=1.7777777777777777" width="476px" height="288px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>'
    },
]

const presentatioDurationInSeconds = 180; // 3 min

let = timeLeft = 0;
let countdownInterval = null;

const startNextPresentation = () => {
    const presentation_wrapper = document.getElementById('presentation');
    presentation_wrapper.innerHTML = '';
    presentation_wrapper.innerHTML = presentations.shift().link;
    const iframe = presentation_wrapper.firstChild
    iframe.className = 'iframe-presentation'
}

function updateCountdown() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('countdown').innerHTML = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    document.getElementById('countdown').hidden = false
    timeLeft--;
    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').hidden = true
        changeNextPresentionName();
        document.getElementById('presentation').innerHTML = '';
    }
}

const resetClock = () => {
    timeLeft = presentatioDurationInSeconds;
    countdownInterval = setInterval(updateCountdown, 1000);
}

const changeNextPresentionName = () => {
    const presentation_name = document.getElementById('presentation_name')
    if (presentations.length > 0) {
        presentation_name.innerText = presentations[0].name
    } else {
        presentation_name.innerText = 'That is the end :)'
        document.getElementById('next_presentation').hidden = true
    }
}

document.getElementById('countdown').hidden = true

changeNextPresentionName()
document.getElementById('next_presentation').addEventListener('click', () => {
    resetClock();
    startNextPresentation();
})




