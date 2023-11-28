import { API } from "../backend";

export const nlpHandle = (userRecogData) => {
  // console.log(userRecogData);
  return fetch(`${API}/nlprecognize`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userRecogData),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const nlpAllRecognizations = () => {
  return fetch(`${API}/getAllUsersRecognizations`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const Recog = (q) => {
  // console.log(userRecogData);
  return fetch(`${API}/scrape`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(q),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const QueAns = (question) => {
  // console.log(userRecogData);
  return fetch(`${API}/summarize`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(question),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
