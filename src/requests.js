const apiURL = "http://localhost:3000/notes";

export const getNotes = () => {
  return fetch(apiURL).then((response) => response.json());
};

export const createNote = (note) => {
  const { title, body } = note;
  return fetch(apiURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, body }),
  }).then((response) => response.json());
};

export const editNote = (note) => {
  const { id, title, body } = note;
  return fetch("${apiURL}/${id}", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, body }),
  }).then((response) => response.json());
};

export const deleteNote = (note) => {
  return fetch("${apiURL}/${id}", {
    method: "DELETE",
  }).then((response) => response.json());
};
