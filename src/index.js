import './css/styles.css';
import Notiflix from 'notiflix';
import lodash, { debounce } from 'lodash';
import { fetchCountries } from './fetch-api';

const inputEl = document.querySelector('input');
console.log(inputEl);
const DEBOUNCE_DELAY = 300;

const debounceHandle = debounce(onInput, DEBOUNCE_DELAY);

inputEl.addEventListener('input', debounceHandle);

function onInput() {
  const countryName = inputEl.value;
  const finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalURL);
}
