const apiURL = "http://localhost:3000/notes";
export const getNotes = () => {
  return fetch(apiURL).then((response) => response.json());
};
