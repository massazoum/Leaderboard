import _ from 'lodash';
import './style.css';
import {score ,scoreLists} from './ZoumModules/Add'

const bntSubmit =document.querySelector('.bnt-Submit');
bntSubmit.addEventListener('click',scoreLists.gerer);

scoreLists.showScore();