// import _ from 'lodash';
import './style.css';
import scoreLists from './ZoumModules/Add.js';

const bntSubmit = document.querySelector('.bnt-Submit');
bntSubmit.addEventListener('click', scoreLists.gerer);

scoreLists.showScore();