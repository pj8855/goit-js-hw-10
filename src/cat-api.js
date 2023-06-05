export { fetchBreeds, fetchCatByBreed };

const API_KEY = 'live_sRTncfFk90dBfidxR7eHbS40As4umDGNZQFozK92Kwrz5ZMv5kzEaMrNG6FVJYJJ';

const options = {
  headers: {
    'x-api-key': API_KEY,
  },
};

export function fetchBreeds() {
  return fetch(`https://api.thecatapi.com/v1/breeds`, options).then(response =>
    response.json()
  );
};

export function fetchCatByBreed(breedId) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
    options
  ).then(response => response.json());
};