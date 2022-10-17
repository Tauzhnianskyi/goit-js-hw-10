const BASE_URL = 'https://restcountries.com/v3.1';

function fetchCountries(countryName) {
  return fetch(`${BASE_URL}/name/${countryName}`).then(reponse =>
    reponse.json()
  );
}

export { fetchCountries };
