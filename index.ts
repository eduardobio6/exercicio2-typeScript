// Import stylesheets
import './style.css';
import { Person } from './person.ts';

let person = new Person('Jucelino', 'Souza', 'Kubscheck', 52);

const appDiv: HTMLElement = document.getElementById('app.text');
appDiv.innerHTML = `
<h1>${person.getFullname()}</h1>
<h1>Nasceu hein: ${person.getBirthdayYear()}</h1>
<h1>Email: ${person.email}</h1>
`;
