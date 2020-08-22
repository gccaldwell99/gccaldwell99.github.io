currentEvent = {text: 'Once upon a time, there was a world filled with splendor and beauty...'};

function generateEventText(event) {
    if(event.options) {
        let text = typeof event.text === 'function' ? event.text() : event.text + '\n';
        Object.keys(event.options).forEach(option => {
            let optionText = event.options[option].text;
            optionText = typeof optionText === 'function' ? optionText() : optionText;
            text = text + '\n' + option + '. ' +  optionText;
        });
        return text;
    } else {
        return typeof event.text === 'function' ? event.text() : event.text;
    }
}

function renderPicture(picture) {
    var parent = document.getElementById("imagebox");
    var image = document.createElement("IMG");
    image.src = picture;
    image.className = "center fade-in";
    image.id = "picture";
    parent.appendChild(image);
}

function removePicture() {
    var image = document.getElementById("picture");
    image.remove();
}

function nextEvent() {
    currentEvent = currentThread.shift();
    if(currentEvent.action) {
        currentEvent.action();
    }
    if(currentEvent.picture) {
        renderPicture(currentEvent.picture);
    }
    if(currentEvent.removePicture) {
        removePicture();
    }
    var elem = document.getElementById("main-text");
    var newElem = elem.cloneNode(true);
    newElem.innerText = generateEventText(currentEvent);
    elem.parentNode.replaceChild(newElem, elem);
}

function transitionToStageTwo() {
    
}

function processGameEvent(event) {
    if(currentEvent.options) {
        // Handle static and dynamic threads
        let nextThread = typeof currentEvent.options[event.key].thread === 'function' ? currentEvent.options[event.key].thread() : currentEvent.options[event.key].thread;
        if (nextThread) {
            currentThread = nextThread.concat(currentThread);
            nextEvent();
        }
    } else if(currentThread.length>0 && event.key === ' ') {
        nextEvent();
    }
}

document.addEventListener("keydown", processGameEvent);