const { API } = require("../backend");

export const signup = (user) => {
  return fetch(`${API}/signup`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const signin = (user) => {
  return fetch(`${API}/signin`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const signout = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    // window.location.reload();
    return fetch(`${API}/signout`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};

export const GoogleAuthChecker = () => {
  return fetch(`${API}/googleauthcookiechecker`, {
    method: "GET",
    credentials: "include",
  })
    .then((res) => {
      // console.log(res);
      return res.json();
    })
    .catch((error) => {
      console.log(error);
    });
};
