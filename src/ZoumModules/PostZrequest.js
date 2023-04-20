export const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
export const idgame = 'CVL6hHVOMpB1CrtV35aa';

export const setjeu = async () => {
  try {
    const data = {
      name: 'game',
    };

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.log(error);
  }
};

export const getjeu = async () => {
  try {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${idgame}/scores/`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    const jeu = await response.json();
    const ScoresList = document.querySelector('.ScoresListes');
    ScoresList.innerHTML = '';
    for (let i = 0; i < jeu.result.length; i++) {
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
