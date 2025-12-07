import Framework7 from 'framework7';
import type { App } from 'framework7/types';

const app: App = new Framework7({
  el: '#app',
  name: 'DiaryApp',
  theme: 'ios',

  routes: [
    { path: '/', url: '/src/pages/home.f7.html' },
    { path: '/entry/:id', url: '/src/pages/entry.f7.html' },
    { path: '/new', url: '/src/pages/new-entry.f7.html' },
  ],
});

console.log("App launched, don't fuck it up.");