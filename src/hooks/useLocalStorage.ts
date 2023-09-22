import { useState } from "react";

type ValueSetter<T> = T | ((prevValue: T) => T);
/**
 * Custom hook for managing state in local storage.
 *
 * @template T - The type of data to be stored.
 * @param {string} key - The key under which the data is stored in local storage.
 * @param {T} initialValue - The initial value for the stored data.
 * @returns {[T, (value: T | ((prevValue: T) => T)) => void]} - A tuple containing the stored value and a function to set the value.
 */
const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [state, setState] = useState<T>(() => {
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  /**
   * Function to set the stored value.
   *
   * @param {T | ((prevValue: T) => T)} value - The new value to be stored.
   */
  const setValue = (value: ValueSetter<T>) => {
    try {
      const valueToStore = value instanceof Function ? value(state) : value;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      setState(valueToStore);
    } catch (error) {
      console.log(error);
    }
  };

  return [state, setValue] as const;
};

export default useLocalStorage;
