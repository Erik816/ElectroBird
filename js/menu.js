// Script to allow inspect element on right click
// NOTE: the following assumes an ES6 environment
// The remote module is required to call main process modules
'use strict';
const remote = require('remote');
const Menu = remote.require('menu');
const MenuItem = remote.require('menu-item');

const currentWindow = remote.getCurrentWindow();

let rightClickPosition = null;

const menu = new Menu();
menu.append(new MenuItem({ label: 'Inspect Element', click: () => {
  currentWindow.inspectElement(rightClickPosition.x, rightClickPosition.y);
} }));

window.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  rightClickPosition = {x: e.x, y: e.y};
  menu.popup(currentWindow);
}, false);
