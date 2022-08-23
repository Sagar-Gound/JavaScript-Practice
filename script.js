const setOfWords=[
    "My name is Sagar Subhashchandra Gound and I am a Developer.",
    "Hope you are having fun, this is a simple game that you can make.",
    "If youn want to learn to code then, follow YouTube channels for the same and along with the tutorial start practicing.",
];

const msg = document.getElementById('msg');
const typeWords = document.getElementById('myWords');
const btn = document.getElementById('btn');
let startTime, endTime;
const playGame = () =>{
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}

const endGame = () =>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime-startTime)/1000);

    let totalStr = 
};

btn.addEventListener('click', function(){
        if(this.innerText == 'Start'){
        typeWords.disabled == false;
        playGame();
    }else if(this.innerText == "Done"){
        typeWords.disabled = true;
        btn.innerText = "Start";
     endGame();
    }
})