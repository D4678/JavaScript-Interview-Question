let finalBtn = document.querySelector('button');
finalBtn.addEventListener('click', inputMsg);

function inputMsg(){
    let name = prompt("Enter your name");
    finalBtn.textContent = "Roll No. 1:" + name;
}