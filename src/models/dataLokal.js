const dataLocal = {
  setData(data, key) {
    const parsed = JSON.stringify(data);
    localStorage.setItem(key, parsed);
  },

  loadData(key) {
    const storage = localStorage.getItem(key);
    const data = JSON.parse(storage) || [];
    return data;
  },
};

export default dataLocal;
