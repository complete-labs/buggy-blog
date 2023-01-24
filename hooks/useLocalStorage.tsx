export const getLocalStorage = (key: string): boolean => {
  const isAuthenticated =
    typeof window !== "undefined" ? localStorage.getItem(key) : "false";
  return isAuthenticated === "true";
};

export const setLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};
