/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ("the", "our");
  let adj = ("great", "big");
  let noun = ("jogger", "racoon");

  let listForLoop = "";
  for (let index = 0; index < pronoun.length; index++) {
    for (let indexAdj = 0; indexAdj < adj.length; indexAdj++) {
      for (let indexNoun = 0; indexNoun < noun.length; indexNoun++) {
        listForLoop += `
        < li class="list-group-item" > ${pronoun[index]}${adj[indexAdj]}${noun[indexNoun]}</li >`;
      }
    }
  }

  let listForIn = "";
  for (const keyPronoun in pronoun) {
    listForIn += `<li class= "list-group-item">${pronoun[keyPronoun]}</li>`;
  }

  document.querySelector("#for-loop").innerHTML = listForLoop;
  document.querySelector("#for-in").innerHTML = listForIn;
};
