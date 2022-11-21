const TOKEN = "token";

export const saveToken = (token) => {
  localStorage.setItem(TOKEN, token);
};

export const getToken = (token) => {
  return localStorage.getItem(TOKEN);
};

export const deleteToken = (token) => {
  return localStorage.clear(TOKEN);
};
