import { Inputs } from "@/helpers/interface";
import { useState } from "react";

/**
 * Custom hook for managing state in local storage.
 *
 * @param {string} key - The key under which the data is stored in local storage.
 * @param {Inputs | string} initialValue - The initial value for the stored data.
 * @returns {Inputs} - A tuple containing the stored value and a function to set the value.
 */
const useLocalStorage = (key: string, initialValue: Inputs | string) => {
  const [state, setState] = useState<Inputs>(() => {
    try {
      const value = window?.localStorage?.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  /**
   * Function to set the stored value.
   *
   * @param {Inputs | ((prevValue: Inputs) => Inputs)} value - The new value to be stored.
   */
  const setValue = (value: Inputs) => {
    try {
      const valueToStore = value instanceof Function ? value(state) : value;
      window?.localStorage?.setItem(key, JSON.stringify(valueToStore));
      setState(valueToStore);
    } catch (error) {
      console.log(error);
    }
  };
  return [state, setValue] as const;
};

export default useLocalStorage;


