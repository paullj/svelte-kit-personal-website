import { writable as internal, get } from 'svelte/store';
import type { Writable } from 'svelte/store';

type NullableObjectType = null | string | { [key: string]: string };

export const storable = <T extends NullableObjectType>(
  key: string,
  initial: NullableObjectType = null
): Writable<T> => {
  const browser = typeof localStorage != 'undefined';
  const storedValue = browser ? localStorage.getItem(key) : null;
  const value = storedValue ? JSON.parse(storedValue) : initial;
  const store = internal(value);
  const { subscribe, set: setStore } = store;

  const setLocalStorage = (key: string, value: NullableObjectType) => {
    if (!browser) return;

    localStorage.setItem(key, JSON.stringify(value));
  };

  return {
    set(value): void {
      setLocalStorage(key, value);
      setStore(value);
    },
    update(updater): void {
      const value = updater(get(store));

      setLocalStorage(key, value);
      setStore(value);
    },
    subscribe
  };
};
