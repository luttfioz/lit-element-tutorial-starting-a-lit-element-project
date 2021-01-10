import './styles.css';
import './views/todo-view.js';
import './views/todo-add.js';


import { Router } from '@vaadin/router';

// const {Router} = window.Vaadin;

// setup a Router instance
const outlet = document.getElementById('outlet');
const router = new Router(outlet);

router.setRoutes([
    { path: '/', component: 'todo-view' },
    { path: '/add', component: 'todo-add' },
]);
