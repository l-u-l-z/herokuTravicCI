import localforage from 'localforage';

const store = localforage.createInstance({
  name: 'storageName'
});

export const getItem = key => store.getItem(key);

export const setItem = (key, value) => store.setItem(key, value);

export const keys = () => store.keys();

export const clear = () => store.clear();

export const removeItem = key => store.removeItem(key);

export const length = () => store.length();
