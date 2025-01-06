import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!DOCTYPE html><div id="container"></div>');
global.document = dom.window.document;
global.window = dom.window;

import { createInitialGrid } from './script.js';

describe('Initial grid creation', () => {

});
