export async function fetchCharacters(pageIndex) {
  const response = await fetch(`https://swapi.dev/api/people?page=${pageIndex}`);
  const resData = await response.json();
  if (!response.ok) {
    throw new Error('Failed to fetch characters');
  }
  return resData;
}

export async function fetchPlanets() {
  const response = await fetch('https://swapi.dev/api/planets/');
  const resData = await response.json();
  if (!response.ok) {
    throw new Error('Failed to fetch characters');
  }
  return resData.results;
}

export async function fetchPlanet(url) {
  const response = await fetch(url);
  const resData = await response.json();
  if (!response.ok) {
    throw new Error('Failed to fetch characters');
  }
  return resData;
}

export async function fetchFilms() {
  const response = await fetch('https://swapi.dev/api/films/');
  const resData = await response.json();
  if (!response.ok) {
    throw new Error('Failed to fetch characters');
  }
  return resData.results;
}
