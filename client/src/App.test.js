import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {reverseString} from "./components/PlayerCard";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
})



test("reverse string", () =>{
  let actual;
  let expected;

  actual = reverseString("hello");
  expected = "olleh";
  expect(actual).toBe(expected);
})

test("reverse string", () =>{
  let actual;
  let expected;

  actual = reverseString("doggy");
  expected = "yggod";
  expect(actual).toBe(expected);
})