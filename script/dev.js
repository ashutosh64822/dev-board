
let clickCount = 0;
const defaultColor = "#ffffff";

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById('get-theme-color').addEventListener('click', function () {
    clickCount++;

    if (clickCount <= 7) {
        document.body.style.backgroundColor = getRandomColor();
    }

    if (clickCount === 7) {
        setTimeout(() => {
            document.body.style.backgroundColor = 'oklch(97% 0.014 254.604)';
            clickCount = 0;
        });
    }
});

function getCurrentTimeAMPM() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return hours + ':' + minutes + ':' + seconds + ' ' + ampm;
}

let btns = document.querySelectorAll('.task-btn');
let messageBox = document.getElementById('messageBox');



for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function (event) {
        alert('Board Updated Successfully');
        let taskName = this.getAttribute('data-task');
        let time = getCurrentTimeAMPM();

        let para = document.createElement('p');
        para.innerText = `You have Complete The Task ${taskName} at ${time}`;
        para.classList.add('para-style');
        messageBox.appendChild(para);
        

        let countTask = document.getElementById('count-task').innerText;
        let finalTask = countTask - 1;
        document.getElementById('count-task').innerText = finalTask;

        let completeTask = document.getElementById('complete-task').innerText;
        let intCompleteTask = parseInt(completeTask);
        let completeFinalTask = intCompleteTask + 1;
        document.getElementById('complete-task').innerText = completeFinalTask;

        for (let i = 0; i < btns.length; i++) {
            if (!btns[i].disabled) {
                btns[i].disabled = true;
                break;
            }
        }

    });
}

