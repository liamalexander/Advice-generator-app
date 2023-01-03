'use strict';

const quoteContainer = document.querySelector(".advice-quote");
const quoteNumber = document.querySelector(".advice-number");
const btn = document.querySelector(".btn-dice");

const getData = async function () {
  const res = await fetch('https://api.adviceslip.com/advice');
  const data = await res.json();
  console.log(data);
  quoteContainer.textContent = data.slip.advice;
  quoteNumber.textContent = `advice #${data.slip.id}`;
};

btn.addEventListener("click", getData);

getData();

// FIX POSITION OF BTN - FIND ADVICE ONLINE
// CHANGE COLOUR ON HOVER AND AFTER AFFECT OF CLICKING (RETURN TO NORMAL PLACE)
// DO DESKTOP VERSION