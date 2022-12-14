const BASE_URL = 'https://restcountries.com/v3.1';
const KEY_URL = 'name,capital,population,flags,languages';

export function fetchCountries(name) {
  return fetch(`${BASE_URL}/name/${name}?fields=${KEY_URL}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
