import './style.css';
import { getjeu } from './ZoumModules/PostZrequest.js';
import Postjeu from './ZoumModules/Add.js';

document.querySelector('.btn-refresh').addEventListener('click', getjeu);

const bntSubmit = document.querySelector('.bnt-Submit');
bntSubmit.addEventListener('click', Postjeu);
