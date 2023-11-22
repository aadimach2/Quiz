const quizdata=[
    {
    question:'how many states do india have ?',
    a:'10',
    b:'27',
    c:'28',
    d:'29',
    correct:'c'

},{
    question:'what is the capital of crotia ?',
    a:'delhi',
    b:'tokyo',
    c:'london',
    d:'zagreb',
    correct:'d'
},{
    question:'what is the most used programming language ?',
    a:'python',
    b:'java',
    c:'r',
    d:'javascript',
    correct:'d'

},{
    question:'who invented law of motion ?',
    a:'Newton',
    b:'cury',
    c:'faraday',
    d:'alfred nobel',
    correct:'a'
},{
    question:'capital of france ?',
    a:'tashkent',
    b:'bejing',
    c:'manila',
    d:'paris',
    correct:'d'
}

];


const answerel=document.querySelectorAll(".answer");
const questionel=document.getElementById('question')
const quiz=document.getElementById("quiz");
// const a=document.getElementById('a');
// const b=document.getElementById('b');
// const c=document.getElementById('c');
// const d=document.getElementById('d');
const submitbtn=document.getElementById("submit");



let currentquiz=0;
let score=0;
loadquiz();

function loadquiz(){
    deselectanswers();

    const currentquizdata=quizdata[currentquiz];
    questionel.innerText=currentquizdata.question;
    a_text.innerText=currentquizdata.a;
    b_text.innerText=currentquizdata.b;
    c_text.innerText=currentquizdata.c;
    d_text.innerText=currentquizdata.d;
 
}

function get_selected(){
    
   
    let answer=undefined;

    answerel.forEach((answerel)=>{
        if (answerel.checked){
            answer=answerel.id;
        }
    });
    return answer;
}
         
function deselectanswers(){
    answerel.forEach((answerel)=>{
        answerel.checked=false;
    });
}

submitbtn.addEventListener('click',()=>{
    //check to see the answer
    const answer=get_selected();

   

   if(answer){
     if(answer===quizdata[currentquiz].correct){
        score++;
     }
      currentquiz++;
    
       if (currentquiz<quizdata.length) {
           loadquiz();

        }else{
           quiz.innerHTML=`<h2> You Answered correctly at  ${score}/${quizdata.length} Question</h2> <button
           onclick="location.reload()">Reload</button>`
         }
    } 

})



















