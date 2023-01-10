/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 * 
 * komenda do otwrzenia tego czystego projektu z npm'a : npx create-snowpack-app . --template @snowpack/app-template-blank-typescript  --force
 * 
 * Komendy do danego projektu: All Commands:

  npm install      Install your dependencies. (We already ran this one for you!)  npm start        Start your development server.        
  npm run build    Build your website for production.    
  npm test         Run your tests.
 * 
 * 
 **/
// export {};
// let start = 'log';
// console.log(start);
// let costam = 'matesz';
// console.log(costam);

//-----------------------------zaczynamy pisać todolistę)
// 1:

// aby zniknął podkreślnik z uuid trzeba pobrać dodatkową biblitkę, ponieważ nie każdy snowpack czyli bundle czyli buildier posiada takową aby pokryć wszystkie biblioteki. Wklejma w konsolę npm i --save-dev @types/uuid. Po wklejeniu znikło podkreślenie błąd i wszystko okejjj.

// console.log(uuidV4());
import { v4 as uuidV4, validate } from 'uuid';

type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};

const list = document.querySelector<HTMLUListElement>('#list');
// const taskInput = document.querySelector<HTMLFormElement>('#new-task-form'); lub inaczej:
const form = document.getElementById('new-task-form') as HTMLFormElement | null;
const input = document.querySelector<HTMLInputElement>('#new-task-title');
const tasks: Task[] = loadTasks();
tasks.forEach(addListItem);

form?.addEventListener('submit', (e) => {
  e.preventDefault();

  if (input?.value == '' || input?.value == null) return;

  const newTask: Task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date(),
  };

  tasks.push(newTask);
  saveTasks();
  addListItem(newTask);
  input.value = '';
});

function addListItem(task: Task) {
  const item = document.createElement('li');
  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  checkbox.addEventListener('change', () => {
    task.completed = checkbox.checked;
    saveTasks();
  });
  checkbox.type = 'checkbox';
  checkbox.checked = task.completed;
  label.append(checkbox, task.title);
  item.append(label);
  list?.append(item);
}

function saveTasks() {
  localStorage.setItem('TASKS', JSON.stringify(tasks));
}

function loadTasks(): Task[] {
  const taskJson = localStorage.getItem('TASKS');
  if (taskJson == null) return [];
  return JSON.parse(taskJson);
}
