export function getList() {
  return fetch("https://rickandmortyapi.com/api/character").then((data) =>
    data.json()
  );
}
