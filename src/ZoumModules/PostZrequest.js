// import scoreLists from './Add.js';
export const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
export const idgame = 'CVL6hHVOMpB1CrtV35aa';
// 6okCL9n7Yp871DSUNmEp

export const setjeut = async () => {
  try {
    const data = {
      name: 'game',
    };

    const response = fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
    const date = await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getjeu = async (jeu) => {
  try {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${idgame}/scores/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const jeu = await response.json();
    const ScoresList = document.querySelector('.ScoresListes');
    ScoresList.innerHTML = '';
    for (let i = 0; i <= jeu.result.length; i++) {
      const newdiv = document.createElement('div');
      newdiv.className = 'ScoresListe';
      newdiv.innerHTML = ` <div class="scorenom">${jeu.result[i].user}</div><div class="scorepoint"> :</div> <div>${jeu.result[i].score}</div>
     `;
      ScoresList.appendChild(newdiv);
    }
  } catch (error) {
    console.log(error);
  }
};
