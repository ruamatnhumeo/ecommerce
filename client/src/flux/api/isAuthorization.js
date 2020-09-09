export const isAuthorization = () => {
  // Get token from localstorage
  if (typeof window === "undefined") return true;
  const token = window.localStorage.getItem("token");

  if (token) {
    return token;
  }

  return false;
};
