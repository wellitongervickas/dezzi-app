export const saveStorage = (key, payload) => sessionStorage
  .setItem(key, btoa(JSON.stringify(payload)));

export const getStorage = (key) => {
  const data = sessionStorage.getItem(key);
  return data ? JSON.parse(atob(data)) : null;
};

export const deleteStorage = (key) => sessionStorage.removeItem(key);

export default saveStorage;
