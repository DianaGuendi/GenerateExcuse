/* eslint-disable */

//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoI = Math.floor(Math.random() * who.length);
  let actionI = Math.floor(Math.random() * action.length);
  let whatI = Math.floor(Math.random() * what.length);
  let whenI = Math.floor(Math.random() * when.length);

  return (
    who[whoI] + " " + action[actionI] + " " + what[whatI] + " " + when[whenI]
  );
};
