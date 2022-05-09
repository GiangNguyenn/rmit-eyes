export const storeUserSession = (userData) => {
  return localStorage.setItem('user', userData);
};

export const getUserLogged = () => localStorage.getItem('isLogged');

export const clearUserSession = () => {
  return localStorage.removeItem('isLogged');
};
