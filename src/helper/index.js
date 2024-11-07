export const loadFromLocalStorage = () => {
  const data = localStorage.getItem("users");

  if (data) {
    return JSON.parse(data);
  } else {
    localStorage.setItem("users", JSON.stringify(defaultUsers));
    return defaultUsers;
  }
};

export const saveToLocalStorage = (data) => {
  localStorage.setItem("users", JSON.stringify(data));
};
