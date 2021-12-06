import App from './components/app/app';
import './global.css';

const alphabet: Array<string> = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

let alphabetBlock = document.querySelector('.alphabet');
(alphabetBlock as HTMLElement).innerHTML = '';

alphabet.map((letter) => {
    let letterItem = document.createElement('span');
    letterItem.className = 'alphabet-item';
    letterItem.textContent = letter;
    alphabetBlock!.append(letterItem);
});

const app = new App();
app.start();
