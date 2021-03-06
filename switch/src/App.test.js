import 'react-testing-library/cleanup-after-each';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import 'jest-dom/extend-expect';
import React from 'react';
import App from './App';
import {render} from 'react-testing-library'
const puppeteer = require('puppeteer');

var ShallowRenderer = require('react-test-renderer/shallow');
describe('Login Page screenshot test', () => {
  test('Login Page page should render correctly', () => {
      const renderer = new ReactShallowRenderer();
      renderer.render(<App />);
      expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});


jest.setTimeout(30000);
test("login successfully", async()=>{
  const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ['--window-size=1920,1080']
      });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/room-list');
  await page.waitFor('input[name=username]');
  await page.type('input[name=username]','jaric');
  await page.waitFor('input[name=password]');
  await page.type('input[name=password]', 'Rok_W0900');
  await page.click('button[type=submit]');
  await page.waitFor(300);
  await page.url('http://localhost:3000/room-list');
  browser.close();
});

