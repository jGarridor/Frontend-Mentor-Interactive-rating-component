/** Acquire info about who is been selected */
let secp = document.querySelector('.rating')
let secs = document.querySelector('.thanks')
let ctner = document.querySelector('.rating__scales');
let changeBtn = document.querySelector('.submit')
let checkFlag = 0; // This flag tells the program to not change the window if no scale has been selected.
let scales = document.getElementsByClassName('scale');
let msg = document.querySelector('.thanks__sbmitmsg');



ctner.addEventListener("click", function (e) {
    let scaleSlted = e.target
    let check = scaleSlted.classList.contains("scale")
    if (check) {
        selectScale(scaleSlted);
        writeMsg(scaleSlted);
    }
});

changeBtn.addEventListener('click', function () {
    if (checkFlag == 1) {
        secp.style.setProperty('display', 'none');
        secs.style.setProperty('display', 'flex');
    } else {
        alert("Please! You have to select an option.");
    }
});


/* This function select and mark the selected scale. It can deselect and unmark and already selected scale*/
function selectScale(mark) {
    if (mark.classList.contains('selected')) {
        desSelect();
        checkFlag = 0;
        return;
    }
    desSelect();
    mark.classList.add('selected');
    checkFlag = 1;
}

/*This function unmark any selected option*/
function desSelect() {
    [...scales].forEach((scale) => {
        scale.classList.remove('selected');
    });
}

/*This function allows to write the message, which is going to tell the user what option was selected*/
function writeMsg(mark) {
    let newP = document.createElement('p');
    if (!msg.lastElementChild) {
        newP.textContent = message(mark);
        msg.appendChild(newP);
    }else {
        let removeP = msg.lastElementChild;
        msg.removeChild(removeP);
        newP.textContent = message(mark);
        msg.appendChild(newP);
    }    
}

/*More than a function, this is the message to be displayed*/
function message(mark) {
    return `You selected ${mark.textContent} out of 5.`
}

