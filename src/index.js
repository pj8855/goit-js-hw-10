import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const select = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

select.addEventListener('change', addMarkup);

select.classList.add('is-hidden');
error.classList.add('is-hidden');

fetchBreeds()
  .then(data => {
    createOptions(data);
    select.classList.remove('is-hidden');
  })
  .catch(() => error.classList.remove('is-hidden'))
  .finally(() => loader.classList.add('is-hidden'));

function createOptions(cats) {
  const markup = cats
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
  select.innerHTML = markup;
};

function addMarkup(event) {
  catInfo.innerHTML = '';
  loader.classList.remove('is-hidden');
  fetchCatByBreed(event.target.value)
    .then(createCardCat)
    .catch(() => error.classList.remove('is-hidden'))
    .finally(() => loader.classList.add('is-hidden'));
};

function createCardCat(cat) {
  const { description, name, temperament } = cat[0].breeds[0];
  const markup = `<img src="${cat[0].url}" alt="${name}" width="300"/>
  <div class="wrapper"><h1>${name}</h1><p>${description}</p><p><b>Temperament: </b>${temperament}</p></div>`;
  catInfo.innerHTML = markup;
};