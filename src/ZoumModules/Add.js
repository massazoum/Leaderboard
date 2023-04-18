import Score from './classScore.js';

export default class scoreLists {
 static InpText =document.querySelector('.InpText');

 static InpNumber=document.querySelector('.InpNumber');

 static arrayscore =JSON.parse(localStorage.getItem('store')) || [];

 static gerer() {
   scoreLists.add();
   scoreLists.showScore();
 }

 static add() {
   const InpText = document.querySelector('.InpText');
   const InpNumber = document.querySelector('.InpNumber');
   const newscore = new Score(InpText.value, InpNumber.value);
   scoreLists.arrayscore.push(newscore);
   localStorage.setItem('store', JSON.stringify(scoreLists.arrayscore));
 }

 static showScore() {
   const ScoresList = document.querySelector('.ScoresListes');
   ScoresList.innerHTML = '';
   scoreLists.arrayscore.forEach((score) => {
     const newdiv = document.createElement('div');
     newdiv.className = 'ScoresListe';
     newdiv.innerHTML = ` <div class="scorenom">${score.nom}</div><div class="scorepoint"> :</div> <div>${score.win}</div>
      `;
     ScoresList.appendChild(newdiv);
   });
 }
}
