// import scoreLists from './Add.js';
import takeInp from './classScore.js';
import { idgame } from './PostZrequest.js';

const Postjeu = async () => {
  try {
    const jeu = takeInp();
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${idgame}/scores/`, {
      method: 'POST',
      body: JSON.stringify(jeu),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export default Postjeu;