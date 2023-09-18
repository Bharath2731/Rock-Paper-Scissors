const rulesButton=document.querySelector('.rulesButton');
const rulesListOuter=document.querySelector('.rulesListOuter');
const cross=document.querySelector('.cross');
const outerScorecard=document.querySelector('.outerScorecard');
const cScore=document.querySelector('.cScore');
const yScore=document.querySelector('.yScore');
const playAreaOuter=document.querySelector('.playAreaOuter');
const rock=document.querySelector('.rock');
const rockImg=document.querySelector('.rockImg');
const paper=document.querySelector('.paper');
const paperImg=document.querySelector('.paperImg');
const scissors=document.querySelector('.scissors');
const scissorsImg=document.querySelector('.scissorsImg');
const resultAreOuter=document.querySelector('.resultAreaOuter');
const resultText=document.querySelector('.resultText');
const againstPc=document.querySelector('.againstPc');
const again=document.querySelector('.again');
const winnerPlayagain=document.querySelector('.winnerPlayagain');
const nextButton=document.querySelector('.nextButton');
const winnerPage=document.querySelector('.winnerPage');
var youPicked=document.querySelector('.youPicked');
var pcPicked=document.querySelector('.pcPicked');

let computerScore = parseInt(localStorage.getItem('computerScore')) || 0;
let yourScore = parseInt(localStorage.getItem('yourScore')) || 0;

cScore.innerHTML=computerScore
yScore.innerHTML=yourScore

function showRules(){
    rulesListOuter.style.display="block";
}
rulesButton.addEventListener("click",()=>{
    showRules();
})

function closeRules(){
    rulesListOuter.style.display="none";   
}
cross.addEventListener('click',()=>{
    closeRules();
})

function getRandomChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function playAgainFun(){
    playAreaOuter.style.display='block'
    resultAreOuter.style.display='none'
    nextButton.style.display='none'
    rulesButton.style.left='90vw'
    outerScorecard.style.display='flex'
    youPicked.style.boxShadow='none'
    pcPicked.style.boxShadow='none'
    winnerPage.style.display='none'

}
rock.addEventListener("click", () => {
    compareChoices("rock",rockImg);
});
paper.addEventListener("click", () => {
    compareChoices("paper",paperImg);
});
scissors.addEventListener("click", () => {
    compareChoices("scissors",scissorsImg);
});
again.addEventListener("click",()=>{
    playAgainFun();
})
winnerPlayagain.addEventListener('click',()=>{
    playAgainFun();
})
const winnerStyle={
    marginTop: '3vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border : 'solid #FFA943',
    backgroundColor: '#FFF',
    borderWidth: "2vh",
    borderRadius: '50%',
    width: '8vw',
    height: '8vw'
}

function compareChoices(userChoice,userDiv) {
    const computerChoice = getRandomChoice();
    playAreaOuter.style.display='none'
    resultAreOuter.style.display='flex'

    console.log(computerChoice)
    const yourclone= userDiv.cloneNode(true);
    if(computerChoice==="rock"){
        pcPicked.innerHTML='';
        const computerclone=rockImg.cloneNode(true);
        Object.assign(pcPicked.style,winnerStyle);
        pcPicked.style.border='solid #0074B6'
        pcPicked.style.borderWidth='2.5vh'
        pcPicked.appendChild(computerclone)
    }
    if(computerChoice==="paper"){
        pcPicked.innerHTML='';
        const computerclone=paperImg.cloneNode(true);
        Object.assign(pcPicked.style,winnerStyle);
        pcPicked.style.border='solid #FFA943'
        pcPicked.style.borderWidth='2.5vh'
        pcPicked.appendChild(computerclone)
    }
    if(computerChoice==="scissors"){
        pcPicked.innerHTML='';
        const computerclone=scissorsImg.cloneNode(true);
        Object.assign(pcPicked.style,winnerStyle);
        pcPicked.style.border='solid #BD00FF'
        pcPicked.style.borderWidth='2.5vh'
        pcPicked.appendChild(computerclone)
    }

    if (userChoice === computerChoice) {
        console.log("It's a tie!");
        resultText.innerHTML='TIE UP'
        againstPc.innerHTML=''
        again.innerHTML='REPLAY'
        youPicked.innerHTML='';
        Object.assign(youPicked.style, winnerStyle);
        youPicked.appendChild(yourclone);
    }
    else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper"))
    {
        console.log('you won');
        resultText.innerHTML='YOU WIN'
        againstPc.innerHTML='AGAINST PC'
        again.innerHTML='PLAY AGAIN'
        youPicked.innerHTML='';
        Object.assign(youPicked.style, winnerStyle);
        youPicked.appendChild(yourclone);
        youPicked.style.boxShadow='0 0 0 9vh #2E9A2563,0 0 0 6vh #2E9A2563,0 0 0 3vh #2E9A2563'
        yourScore=parseInt(localStorage.getItem('yourScore'))+1
        localStorage.setItem('yourScore',yourScore)
        yScore.innerHTML=yourScore

        nextButton.style.display='flex';
        rulesButton.style.left='82vw'

    } 
    else {
        console.log("Computer wins!");
        console.log('pc won');
        resultText.innerHTML='YOU LOST'
        againstPc.innerHTML='AGAINST PC'
        again.innerHTML='PLAY AGAIN'
        youPicked.innerHTML='';
        Object.assign(youPicked.style, winnerStyle);
        youPicked.appendChild(yourclone);
        pcPicked.style.boxShadow='0 0 0 9vh #2E9A2563,0 0 0 6vh #2E9A2563,0 0 0 3vh #2E9A2563'
        computerScore=parseInt(localStorage.getItem('computerScore'))+1
        localStorage.setItem('computerScore',computerScore)
        cScore.innerHTML=computerScore
    }

    if(userChoice=="rock"){
        youPicked.style.border='solid #0074B6'
        youPicked.style.borderWidth='2.5vh'
    }
    if(userChoice=="paper"){
        youPicked.style.border='solid #FFA943'
        youPicked.style.borderWidth='2.5vh'
    }
    if(userChoice=="scissors"){
        youPicked.style.border='solid #BD00FF'
        youPicked.style.borderWidth='2.5vh'
    }
}

nextButton.addEventListener('click',()=>{
    nextfun();
})
function nextfun(){
    winnerPage.style.display='block'
    nextButton.style.display='none'
    rulesButton.style.left='90vw'
    resultAreOuter.style.display='none'
    outerScorecard.style.display='none'
}