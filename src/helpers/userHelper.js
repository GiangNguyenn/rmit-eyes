export const storeUserSession = (user_id) => {
  return localStorage.setItem('isLogged', user_id);
};
export const clearUserSession = () => {
  return localStorage.removeItem('isLogged');
};
