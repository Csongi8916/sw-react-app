export async function fetchCharacters() {
  const response = await fetch('https://swapi.dev/api/people?page=1');
  const resData = await response.json();
  if (!response.ok) {
    throw new Error('Failed to fetch places');
  }

  return resData.results;
}
